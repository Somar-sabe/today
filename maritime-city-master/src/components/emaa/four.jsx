import React from "react";

const PaymentPlanSection = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="payment-section">
      <div className="rty">
        <div className="content-column">
          <div className="badge">Payment Plan</div>

          <h1 className="title">
            Invest Smart with<br />Emaar’s Flexible Plan
          </h1>

          <p className="desc">
            The Oasis by Emaar features a flexible and investor-friendly payment plan designed
            to make luxury living more accessible. With payments spread conveniently over the
            construction period and a final installment on handover, buyers can secure their
            dream villa with ease.
          </p>

          <div className="btn-group">
            <button className="btn green">Download Payment Plan →</button>
            <button className="btn">Download Brochure →</button>
          </div>
        </div>

        <div className="plans-column">
          <div className="plan-box">
            <div className="plan-percent">10%</div>
            <div>
              <div className="plan-title">Down Payment</div>
              <div className="plan-text">Secure your unit with just a 10% initial payment.</div>
            </div>
          </div>

          <div className="plan-box">
            <div className="plan-percent">70%</div>
            <div>
              <div className="plan-title">During Construction</div>
              <div className="plan-text">Flexible installments throughout construction.</div>
            </div>
          </div>

          <div className="plan-box">
            <div className="plan-percent">20%</div>
            <div>
              <div className="plan-title">On Handover</div>
              <div className="plan-text">Pay the remaining balance upon project completion.</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-section {
          padding: 20px 0;
          max-width: 1200px;
          margin: auto;
        }

        .badge {
          background: #e8e8e8;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          margin-bottom: 20px;
          display: inline-block;
        }

        .title {
          font-size: 48px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .desc {
          max-width: 520px;
          font-size: 16px;
          line-height: 1.7;
          color: #444;
          margin-bottom: 30px;
        }

        .btn-group {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 22px;
          border-radius: 8px;
          border: 1px solid #0B3E2A;
          background: white;
          font-size: 15px;
          cursor: pointer;
          transition: 0.2s;
        }

        .btn.green {
          background: #A8E6C4;
          color: #0B3E2A;
          border: none;
        }

        .rty {
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }

        .content-column,
        .plans-column {
          flex: 1;
        }

        .plan-box {
          background: #F5F9F6;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
          gap: 25px;
        }

        .plan-percent {
          font-size: 40px;
          font-weight: 600;
          color: #0b3e2a;
          min-width: 90px;
        }

        .plan-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .plan-text {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .rty {
            flex-direction: column;
            gap: 20px;
          }

          .title {
            font-size: 36px;
          }

          .plan-box {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .plan-percent {
            margin-bottom: 10px;
          }

          .desc {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentPlanSection;
