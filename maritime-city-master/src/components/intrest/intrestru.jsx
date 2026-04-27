import React from "react";

const Interest = () => {
  return (
    <section className="interest-section" aria-label="Project interest">
      <h2 className="title">
        Не упустите этот проект, зарегистрируйте свой интерес!
      </h2>

      <p className="desc">
        Заполните форму, чтобы получить брошюру, планировки этажей,
        актуальную доступность и стартовые предложения до того,
        как они исчезнут.
      </p>

      <style jsx>{`
        .interest-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 18px 14px;
          text-align: left;
        }

        .title {
          margin: 0;
          font-weight: 800;
          color: #1d1d1d;
          line-height: 1.25;
          letter-spacing: -0.3px;
          font-size: 22px;
        }

        .desc {
          margin: 0;
          color: #5f5f5f;
          line-height: 1.7;
          font-size: 14.5px;
        }

        /* ✅ Desktop layout */
        @media (min-width: 1024px) {
          .interest-section {
            width: 30%;
            padding: 0;
          }

          .title {
            font-size: 28px;
            line-height: 1.2;
          }

          .desc {
            font-size: 15.5px;
            max-width: 420px;
          }
        }

        /* ✅ Small phones */
        @media (max-width: 380px) {
          .title {
            font-size: 20px;
          }

          .desc {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Interest;