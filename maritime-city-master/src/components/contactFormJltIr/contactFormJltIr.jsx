import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactFormIr = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.trim().length < 5) {
        alert("لطفاً یک شماره تلفن معتبر وارد کنید.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      Name: formData.get("fullName"),
      Phone: phone,
      Email: formData.get("email"),
      Message: `طريقة الاتصال المفضلة: ${formData.get("communication")}}`,
      ContactType: "https://promotion.altairre.ae/Jumeirah-Residences-Emirates-Towers-ir",
    };

    try {
      const response = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);

        // Download brochure
        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.download = "brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const errorData = await response.json();
        console.error("ارسال فرم ناموفق بود:", errorData);
        alert("در هنگام ارسال فرم خطایی رخ داد. لطفاً دوباره تلاش کنید.");
        
      }
    } catch (error) {
        console.error("خطای شبکه:", error);
        alert("در شبکه خطایی رخ داده است. لطفاً بعداً دوباره تلاش کنید.");
        
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="thankYouMessage" dir="rtl">
  <h3>با تشکر!</h3>
  <p>پیام شما با موفقیت ارسال شد. لطفاً برای دریافت کاتالوگ، بخش دانلودها را بررسی کنید.</p>
</div>

      ) : (
        <form className="contactForm" onSubmit={handleSubmit}>
<div className="formGroup" dir="rtl">
  <label htmlFor="fullName">نام کامل</label>
  <input type="text" id="fullName" name="fullName" placeholder="نام کامل شما" required />
</div>

<div className="formGroup" dir="rtl">
  <label htmlFor="email">ایمیل</label>
  <input type="email" id="email" name="email" placeholder="ایمیل شما" required />
</div>

          <div className="formGroup" >
          <label dir="rtl" htmlFor="phoneNumber">شماره تلفن</label>

            <PhoneInput
            dir="rtl"
              country={'ae'}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: 'phoneNumber',
                required: true,
                id: 'phoneNumber',
              }}
              specialLabel=""
            />
          </div>

          <div className="formGroup" dir="rtl">
  <label htmlFor="communication">بهترین روش ارتباط با شما چیست؟</label>
  <div className="selectWrapper" dir="rtl">
    <select id="communication" name="communication">
      <option value="email">ایمیل</option>
      <option value="phone">تلفن</option>
      <option value="whatsapp">واتساپ</option>
      <option value="telegram">تلگرام</option>
      <option value="wechat">وی‌چت</option>
    </select>
    <span className="selectIcon">&#9662;</span>
  </div>
</div>


          <div className="submitWrapper" dir="rtl">
            <button type="submit" className="submitButton" disabled={isSubmitting}>
              {isSubmitting ? "جاري الإرسال..." : "إرسال →"}
            </button>
          </div>
        </form>
      )}

      <style jsx>{`

        .contactForm {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px 30px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
          font-family: 'Arial', sans-serif;
        }

        .formGroup {
          margin-bottom: 0px;
        }

        .formGroup label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
        }

        .formGroup input[type="text"],
        .formGroup input[type="email"],
        .formGroup input[type="time"],
        .formGroup select {
          width: 100%;
          padding: 12px 14px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-sizing: border-box;
          transition: border-color 0.3s;
        }

        .formGroup input:focus,
        .formGroup select:focus {
          border-color: #bc986b;
          outline: none;
        }

        .selectWrapper {
          position: relative;
        }

        .selectWrapper select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 100%;
        }

        .selectIcon {
          position: absolute;
      right: 8%;          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 14px;
          color: #666;
        }

        .submitWrapper {
          text-align: center;
        }

        .submitButton {
          padding: 12px 28px;
          font-size: 16px;
          font-weight: 600;
          background-color: #bc986b;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submitButton:hover {
          background-color: #0056b3;
        }

        .submitButton:disabled {
          background-color: #aaa;
          cursor: not-allowed;
        }

        .thankYouMessage {
          max-width: 600px;
          margin: 40px auto;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 12px;
          text-align: center;
        }

        .thankYouMessage h3 {
          color: #28a745;
        }
      `}</style>
    </>
  );
};

export default ContactFormIr;
