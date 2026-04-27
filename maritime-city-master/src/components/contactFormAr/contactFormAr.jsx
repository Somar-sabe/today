import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactFormAr = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.trim().length < 5) {
      alert("يرجى إدخال رقم هاتف صالح.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      Name: formData.get("fullName"),
      Phone: phone,
      Email: formData.get("email"),
      Message: `طريقة الاتصال المفضلة: ${formData.get("communication")}, أفضل وقت: ${formData.get("time")}`,
      ContactType: "https://promotion.altairre.ae/maritime-city-ar",
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
        console.error("فشل إرسال النموذج:", errorData);
        alert("حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("خطأ في الشبكة:", error);
      alert("حدث خطأ في الشبكة. يرجى المحاولة في وقت لاحق.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="thankYouMessage" dir="rtl">
          <h3>شكراً!</h3>
          <p>تم إرسال رسالتك بنجاح. يرجى التحقق من التنزيلات الخاصة بك للكتالوج.</p>
        </div>
      ) : (
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup" dir="rtl">
            <label htmlFor="fullName">الاسم الكامل</label>
            <input type="text" id="fullName" name="fullName" placeholder="اسمك الكامل" required />
          </div>

          <div className="formGroup" dir="rtl">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" name="email" placeholder="البريد الإلكتروني" required />
          </div>

          <div className="formGroup" >
            <label dir="rtl" htmlFor="phoneNumber">رقم الهاتف</label>
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
            <label htmlFor="communication">ما هي أفضل طريقة للتواصل معك؟</label>
            <div className="selectWrapper" dir="rtl">
              <select id="communication" name="communication">
                <option value="email">البريد الإلكتروني</option>
                <option value="phone">الهاتف</option>
                <option value="whatsapp">واتساب</option>
                <option value="telegram">تليجرام</option>
                <option value="wechat">ويتشات</option>
              </select>
              <span className="selectIcon">&#9662;</span>
            </div>
          </div>

          <div className="formGroup" dir="rtl">
            <label htmlFor="time">ما هو أفضل وقت للاتصال بك؟</label>
            <input type="time" id="time" name="time" />
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

export default ContactFormAr;
