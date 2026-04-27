'use client'

import React, { useEffect, useMemo, useState ,useRef} from 'react'
import { createPortal } from 'react-dom'
import Select from 'react-select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import parsePhoneNumberFromString from 'libphonenumber-js'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router' // ✅ ADD THIS



const ContactFormModal = ({
  isOpen = false,
  setOpen,
  title,
  ContactType = 'ContactForm',
  PropertyId = null,
  ProjectId = null,
  onSuccess,
}) => {
  const router = useRouter() // ✅ ADD THIS

  const safeSetOpen = typeof setOpen === 'function' ? setOpen : () => {}

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // ✅ If already submitted, never show popup again
  useEffect(() => {
    if (!mounted) return
    try {
      const submitted = localStorage.getItem('lead_submitted') === '1'
      if (submitted) safeSetOpen(false)
    } catch {}
  }, [mounted])

  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)

  const [phone, setPhone] = useState('')
  const [communication, setCommunication] = useState('Email')
  const [randomNum1, setRandomNum1] = useState(0)
  const [randomNum2, setRandomNum2] = useState(0)

  const [lookingFor, setLookingFor] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [stage, setStage] = useState('')
  const [areas, setAreas] = useState([])
  const [budget, setBudget] = useState('')

  const captchaRef = useRef(null);
  const phoneRef = useRef(null);
  const stepsCount = 6

  const progressPercent = useMemo(() => {
    const map = { 1: 17, 2: 33, 3: 50, 4: 67, 5: 83, 6: 100 }
    return map[step] || 17
  }, [step])

  const commOptions = useMemo(
    () => [
      { value: 'Email', label: 'Email' },
      { value: 'Phone call', label: 'Phone call' },
      { value: 'WhatsApp', label: 'WhatsApp' },
      { value: 'Telegram', label: 'Telegram' },
      { value: 'WeChat', label: 'WeChat' },
    ],
    []
  )

  const customSelectStyles = useMemo(
    () => ({
      option: (base, state) => ({
        ...base,
        color: '#0f172a',
        backgroundColor: state.isSelected
          ? 'rgba(58,48,127,0.10)'
          : state.isFocused
          ? 'rgba(58,48,127,0.08)'
          : '#fff',
      }),
      control: (base) => ({
        ...base,
        borderRadius: 12,
        borderColor: 'rgba(15,23,42,0.12)',
        boxShadow: 'none',
        minHeight: 44,
      }),
      menu: (base) => ({ ...base, zIndex: 999999 }),
    }),
    []
  )

  useEffect(() => {
    if (!isOpen) return
    setStep(1)
    setLookingFor('')
    setPropertyType('')
    setStage('')
    setAreas([])
    setBudget('')
    setPhone('')
    setCommunication('Email')
    setRandomNum1(Math.floor(Math.random() * 10) + 1)
    setRandomNum2(Math.floor(Math.random() * 10) + 1)
  }, [isOpen])

  const close = () => {
    if (submitting) return
    safeSetOpen(false)
  }

  // ✅ single “next” guard (used by both button + auto-next)
  const goNext = (fromStep = step, overrides = {}) => {
    const vLookingFor = overrides.lookingFor ?? lookingFor
    const vPropertyType = overrides.propertyType ?? propertyType
    const vStage = overrides.stage ?? stage
    const vAreas = overrides.areas ?? areas
    const vBudget = overrides.budget ?? budget

    if (fromStep === 1 && !vLookingFor) return toast.error('Please select one option')
    if (fromStep === 2 && !vPropertyType) return toast.error('Please select one option')
    if (fromStep === 3 && !vStage) return toast.error('Please select one option')
    if (fromStep === 4 && vAreas.length === 0) return toast.error('Please select at least one area')
    if (fromStep === 5 && !vBudget) return toast.error('Please select one budget')

    setStep((s) => Math.min(stepsCount, s + 1))
  }

  const next = () => goNext(step)
  const back = () => setStep((s) => Math.max(1, s - 1))

  const toggleArea = (name, autoNext = false) => {
    setAreas((prev) => {
      const nextArr = prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]

      if (autoNext) {
        if (name === "I don't know yet") {
          goNext(4, { areas: nextArr })
        } else if (prev.length === 0 && nextArr.length > 0) {
          goNext(4, { areas: nextArr })
        }
      }

      return nextArr
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return

    let phoneNumber = null

    try {
      phoneNumber = parsePhoneNumberFromString(`+${phone}`)
    } catch {
      phoneNumber = null
    }

    if (!phoneNumber || !phoneNumber.isValid()) {
      if (phoneRef.current) {
        phoneRef.current.setCustomValidity('Invalid phone number')
        phoneRef.current.reportValidity()
        phoneRef.current.focus()
      }
      return
    }

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = Object.fromEntries(fd.entries())

    const expected = randomNum1 + randomNum2;
    const captchaValue = Number(payload.Captcha);

    if (!Number.isFinite(captchaValue) || captchaValue !== expected) {
      // ✅ طلع الخطأ على نفس الحقل
      if (captchaRef.current) {
        captchaRef.current.setCustomValidity("Wrong answer. Please solve the equation.");
        captchaRef.current.reportValidity();
        captchaRef.current.focus();
      } else {
        toast.error("Incorrect sum");
      }
      return;
    }

    const finalPayload = {
      Name: String(payload.Name || ''),
      Email: String(payload.Email || ''),
      Communication: String(communication || 'Email'),
      Time: String(payload.Time || ''),
      ContactType,
      PropertyId,
      ProjectId,
      Phone: phoneNumber.number,
      Message: [
        `LookingFor: ${lookingFor}`,
        `PropertyType: ${propertyType}`,
        `Stage: ${stage}`,
        `Areas: ${areas.join(', ')}`,
        `Budget: ${budget}`,
        '',
        `Name: ${payload.Name || ''}`,
        `Email: ${payload.Email || ''}`,
        `Communication: ${communication || 'Email'}`,
        `Time: ${payload.Time || ''}`,
      ].join('\n'),
    }

    try {
      setSubmitting(true)
      const res = await fetch('https://api.altairre.ae/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalPayload),
      })

      if (!res.ok) {
        let msg = 'An error has occured!'
        try {
          const err = await res.json()
          msg = err?.message || msg
        } catch {}
        toast.error(msg)
        return
      }

      toast.success('Form sent!')
      if (typeof onSuccess === 'function') onSuccess()

      // ✅ mark as submitted so popup never shows again
      try { localStorage.setItem('lead_submitted', '1') } catch {}

      close()
      form.reset()
      setPhone('')

      // ✅ Redirect to Thankyou page
      router.push(`/Thankyou?from=${encodeURIComponent(ContactType)}`)
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!mounted || !isOpen) return null
  return createPortal(
    <>
      <div className="cfmOverlay" role="dialog" aria-modal="true">
        <div className="cfmBackdrop" aria-hidden="true" />

        <div className="cfmModal" onClick={(e) => e.stopPropagation()}>
          <button className="cfmClose" onClick={close} aria-label="Close">
            ✕
          </button>

          <div className="cfmContent">
            {step === 1 && (
              <>
                <h3 className="cfmTitle">What are you looking for?</h3>
                <div className="grid2">
                  {[
                    'Tax Free Investment',
                    'Personal use Property',
                    'Golden Visa',
                    'Sell Property',
                    'Property Management',
                    'Consolution services',
                  ].map((x) => (
<button
  key={x}
  type="button"
  className={`choice ${lookingFor === x ? 'choiceActive' : ''}`}
  onClick={() => {
    setLookingFor(x)
    goNext(1, { lookingFor: x })
  }}
>

                      <span className="radioDot" />
                      <span className="choiceText">{x}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="cfmTitle">What type of property in Dubai do you require?</h3>
                <div className="grid2">
                  {[
                    {
                      label: 'Apartment',
                      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&q=80&auto=format&fit=crop',
                    },
                    {
                      label: 'Penthouse',
                      img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&q=80&auto=format&fit=crop',
                    },
                    {
                      label: 'Villa / Townhouse',
                      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&q=80&auto=format&fit=crop',
                    },
                    {
                      label: 'Commercial / Office',
                      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80&auto=format&fit=crop',
                    },
                    {
                      label: 'Plot',
                      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&q=80&auto=format&fit=crop',
                    },
                    {
                      label: 'Other',
                      img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80&auto=format&fit=crop',
                    },
                  ].map((x) => (
                    <button
                      key={x.label}
                      type="button"
                      className={`choiceCard ${propertyType === x.label ? 'choiceActive' : ''}`}
onClick={() => {
  setPropertyType(x.label)
  goNext(2, { propertyType: x.label })
}}

                    >
                      <img className="choiceImg" src={x.img} alt="" />
                      <div className="choiceRight">
                        <span className="radioDot" />
                        <span className="choiceText">{x.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="cfmTitle">What are you looking for?</h3>
                <div className="grid2">
                  {['Off-Plan', 'Ready', 'Other...'].map((x) => (
                    <button
                      key={x}
                      type="button"
                      className={`choice ${stage === x ? 'choiceActive' : ''}`}
onClick={() => {
  setStage(x)
  goNext(3, { stage: x })


                      }}
                    >
                      <span className="radioDot" />
                      <span className="choiceText">{x}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h3 className="cfmTitle">Select Your Preferred Area in Dubai</h3>
                <div className="scrollBox">
                  <div className="grid2">
                    {[
                      "I don't know yet",
                      'Downtown Dubai',
                      'Emaar Beachfront',
                      'Dubai Hills Estate',
                      'Dubai Creek Harbour',
                      'Palm Jumeirah',
                      'Bluewaters Island',
                      'Business Bay',
                      'Port De La Mer',
                      'Dubai Marina',
                      'Jumeirah Beach Residences (JBR)',
                      'Jumeirah Golf Estates',
                      'Tilal Al Ghaf',
                      'Dubailand',
                      'Damac Hills',
                      'Other',
                    ].map((x) => (
                      <button
                        key={x}
                        type="button"
                        className={`choiceCheck ${areas.includes(x) ? 'choiceActive' : ''}`}
                        onClick={() => toggleArea(x, true)} // ✅ auto-next rules inside toggleArea
                      >
                        <span className="checkBox" />
                        <span className="choiceText">{x}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h3 className="cfmTitle">What&apos;s your budget?</h3>
                <div className="grid2">
                  {[
                    'Below AED 1,000,000',
                    'AED 1,000,000 – 2,000,000',
                    'AED 2,000,000 – 5,000,000',
                    'AED 5,000,000 – 10,000,000',
                    'More than AED 10,000,000',
                  ].map((x) => (
                    <button
                      key={x}
                      type="button"
                      className={`choice ${budget === x ? 'choiceActive' : ''}`}
onClick={() => {
  setBudget(x)
  goNext(5, { budget: x })

                      }}
                    >
                      <span className="radioDot" />
                      <span className="choiceText">{x}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <h3 className="cfmTitle">{title || 'Have questions? Get in touch!'}</h3>

                <form className="cfmForm" onSubmit={onSubmit}>
                  <div className="cfmField">
                    <label>Full Name</label>
                    <input name="Name" required placeholder="Your Full Name" autoComplete="name" />
                  </div>

                  <div className="cfmField">
                    <label>Email</label>
                    <input name="Email" type="email" required placeholder="Email" autoComplete="email" />
                  </div>

                  <div className="cfmField">
                    <label>Phone Number</label>

  <PhoneInput
    country="ae"
    value={phone}
    onChange={(value) => {
      setPhone(value)
      // ✅ امسح رسالة الخطأ أول ما يكتب
      phoneRef.current?.setCustomValidity('')
    }}
    containerClass="cfmPhoneWrap"
    inputClass="cfmPhoneInput"
    buttonClass="cfmPhoneBtn"
    enableLongNumbers={false}
    inputProps={{
      name: 'Phone',
      required: true,
      autoComplete: 'tel',
      ref: phoneRef, // ✅ مهم جداً
    }}
  />
                  </div>

                  <div className="cfmField">
                    <label>What is the best way to communicate you?</label>
                    <Select
                      value={commOptions.find((o) => o.value === communication) || commOptions[0]}
                      onChange={(v) => setCommunication(v?.value || 'Email')}
                      options={commOptions}
                      styles={customSelectStyles}
                      classNamePrefix="select"
                    />
                    <input type="hidden" name="Communication" value={communication} />
                  </div>

                  <div className="cfmField">
                    <label>What is the best time to call you?</label>
                    <input name="Time" required placeholder="Time" autoComplete="off" />
                  </div>

<div className="cfmField">
  <label>
    Solve this Equation: {randomNum1} + {randomNum2}
  </label>

  <input
    ref={captchaRef}
    name="Captcha"
    type="number"
    required
    placeholder="0"
    inputMode="numeric"
    onInput={(e) => {
      // مهم: أول ما يبلش يكتب، شيل أي رسالة خطأ مخصصة
      e.currentTarget.setCustomValidity("");
    }}
  />
</div>


                  <button type="submit" className="cfmSubmit" disabled={submitting}>
                    {submitting ? 'Submitting…' : 'Submit ↗'}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="footer">
            <div className="doneLabel">Done {progressPercent}%</div>

            <div className="progressTrack">
              <div className="progressFill" style={{ width: `${progressPercent}%` }} />
            </div>

            <div className="footerBtns">
              <button type="button" className="backBtn" onClick={back} disabled={step === 1}>
                ‹
              </button>

              {/* You can keep Next as fallback, but user won’t need it now */}
              {step < 6 && (
                <button type="button" className="nextBtn" onClick={next}>
                  Next ›
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* ✅ your same styles unchanged */
        .cfmOverlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.55);
          backdrop-filter: blur(6px);
          display: grid;
          place-items: center;
          z-index: 2147483647;
          padding: 18px;
        }
        .cfmBackdrop {
          position: absolute;
          inset: 0;
        }
        .cfmModal {
          width: min(980px, 96vw);
          background: #fff;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 12px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .cfmClose {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 28px;
          line-height: 1;
          z-index: 2;
        }
        .cfmContent {
          padding: 44px 44px 20px;
          min-height: 520px;
        }
        .cfmTitle {
          margin: 0 0 18px;
          font-size: 34px;
          font-weight: 800;
          color: #0f172a;
        }
        .grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .choice,
        .choiceCheck {
          height: 54px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: #fff;
          border-radius: 2px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
          cursor: pointer;
        }
        .choiceCard {
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: #fff;
          border-radius: 2px;
          display: grid;
          grid-template-columns: 88px 1fr;
          align-items: center;
          cursor: pointer;
          overflow: hidden;
          height: 88px;
        }
        .choiceImg {
          width: 88px;
          height: 88px;
          object-fit: cover;
        }
        .choiceRight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
        }
        .choiceText {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }
        .radioDot {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.35);
          background: #fff;
        }
        .checkBox {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.35);
          background: #fff;
          box-sizing: border-box;
        }
        .choiceActive {
          outline: 2px solid rgba(176, 146, 120, 0.65);
          border-color: rgba(176, 146, 120, 0.65);
        }
        .choiceActive .radioDot,
        .choiceActive .checkBox {
          background: #bc986b;
          border-color: #bc986b;
          box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.15);
        }
        .scrollBox {
          max-height: 420px;
          overflow: auto;
          padding-right: 6px;
        }
        .cfmForm {
          display: grid;
          gap: 14px;
          margin-top: 10px;
        }
        .cfmField label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .cfmField input {
          width: 100%;
          height: 46px;
          border-radius: 6px;
          border: 1px solid rgba(15, 23, 42, 0.15);
          padding: 0 12px;
          outline: none;
          font-weight: 600;
        }
        .cfmField input:focus {
          border-color: rgba(176, 146, 120, 0.65);
          box-shadow: 0 0 0 4px rgba(176, 146, 120, 0.15);
        }
        .cfmPhoneWrap {
          width: 100%;
        }
        .cfmPhoneInput {
          width: 100% !important;
          height: 46px !important;
          border-radius: 6px !important;
          border: 1px solid rgba(15, 23, 42, 0.15) !important;
          padding-left: 52px !important;
          font-weight: 600 !important;
        }
        .cfmPhoneBtn {
          border-radius: 6px 0 0 6px !important;
          border: 1px solid rgba(15, 23, 42, 0.15) !important;
          background: #fff !important;
        }
        .cfmSubmit {
          height: 52px;
          border-radius: 6px;
          border: none;
          background: rgb(176, 146, 120);
          color: #fff;
          font-weight: 800;
          cursor: pointer;
        }
        .footer {
          border-top: 1px solid rgba(15, 23, 42, 0.1);
          padding: 14px 18px;
          display: grid;
          grid-template-columns: 120px 1fr 160px;
          align-items: center;
          gap: 12px;
        }
        .doneLabel {
          font-size: 12px;
          font-weight: 700;
          color: rgba(15, 23, 42, 0.75);
        }
        .progressTrack {
          height: 6px;
          background: rgba(15, 23, 42, 0.12);
          border-radius: 999px;
          overflow: hidden;
        }
        .progressFill {
          height: 100%;
          background: rgb(176, 146, 120);
          width: 0%;
        }
        .footerBtns {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .backBtn {
          width: 44px;
          height: 38px;
          border-radius: 2px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: #fff;
          cursor: pointer;
          font-size: 20px;
        }
        .nextBtn {
          height: 38px;
          padding: 0 18px;
          border-radius: 2px;
          border: none;
          background: rgb(176, 146, 120);
          color: #fff;
          font-weight: 800;
          cursor: pointer;
        }
        @media (max-width: 820px) {
          .cfmOverlay {
            padding: 12px;
          }
          .cfmModal {
            width: min(720px, 96vw);
            max-height: 90vh;
          }
          .cfmContent {
            padding: 26px 16px 14px;
            min-height: 360px;
          }
          .cfmTitle {
            font-size: 22px;
            margin-bottom: 14px;
          }
          .grid2 {
            grid-template-columns: 1fr;
          }
          .scrollBox {
            max-height: 46vh;
          }
          .footer {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .footerBtns {
            justify-content: space-between;
          }
        }
        @media (max-width: 420px) {
          .cfmTitle {
            font-size: 20px;
          }
          .choice,
          .choiceCheck {
            height: 52px;
            padding: 0 14px;
          }
          .choiceCard {
            grid-template-columns: 78px 1fr;
            height: 78px;
          }
          .choiceImg {
            width: 78px;
            height: 78px;
          }
        }
      `}</style>
    </>,
    document.body
  )
}

export default ContactFormModal
