import React from "react";
import { FiPercent, FiTrendingDown, FiClock } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi2";

const Interest = () => {
  return (
    <section className="interest-section" aria-label="Ramadan Offer">
      <h2 className="title">
        Самая выгодная возможность для покупки недвижимости в этот{" "}
        <span className="gold">Рамадан</span> уже здесь
      </h2>

      <p className="lead">
        Если вы ждали исключительной возможности — сейчас самое время.
      </p>

      <div className="list" role="list">
        <div className="item" role="listitem">
          <FiPercent className="icon" />
          <span>Скидка до 30% на отдельные проекты</span>
        </div>

        <div className="item" role="listitem">
          <FiTrendingDown className="icon" />
          <span>Цены, которые больше не повторятся</span>
        </div>

        <p className="sectionTitle">Супергибкие планы оплаты:</p>

        <div className="item" role="listitem">
          <AiOutlineDollar className="icon" />
          <span>Всего 0,5% ежемесячного платежа</span>
        </div>

        <div className="item" role="listitem">
          <AiOutlineDollar className="icon" />
          <span>Даже 0,25% ежемесячного платежа по отдельным проектам</span>
        </div>

        <div className="item" role="listitem">
          <HiOutlineSparkles className="icon" />
          <span>Идеально для разумных инвестиций</span>
        </div>

        <div className="item" role="listitem">
          <HiOutlineSparkles className="icon" />
          <span>
            Отличный старт владения недвижимостью в Дубае с меньшим финансовым
            давлением
          </span>
        </div>

        <div className="item highlight" role="listitem">
          <FiClock className="icon" />
          <span>Предложения ограничены и действуют только в Рамадан</span>
        </div>
      </div>

      <style jsx>{`
        .interest-section {
          width: 100%;
          max-width: 560px; /* مهم جنب الفورم بالديسكتوب */
        }

        .title {
          font-size: 28px;
          line-height: 1.22;
          margin: 0 0 10px;
          color: #1d1d1d;
          font-weight: 750;
          letter-spacing: -0.2px;
        }

        .gold {
          color: #bc986b;
          font-weight: 800;
          white-space: nowrap;
        }

        .lead {
          font-size: 16px;
          color: #5a5a5a;
          margin: 0 0 18px;
          line-height: 1.6;
        }

        .list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15.5px;
          color: #2f2f2f;
          line-height: 1.55;
        }

        .icon {
          font-size: 18px;
          color: #bc986b;
          margin-top: 2px;
          flex: 0 0 auto;
        }

        .sectionTitle {
          font-weight: 800;
          margin: 14px 0 2px;
          color: #bc986b;
          font-size: 14px;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        .highlight {
          font-weight: 700;
          color: #8f1f1f;
        }

        /* ✅ Mobile First Improvements */
        @media (max-width: 768px) {
          .interest-section {
            max-width: 90%;
          }

          .title {
            font-size: 21px;
            line-height: 1.25;
            margin-bottom: 10px;
          }

          .lead {
            font-size: 14.5px;
            margin-bottom: 14px;
          }

          /* أهم تغيير للموبايل: items تصير readable أكثر ومرتبة */
          .list {
            gap: 10px;
          }

          .item {
            font-size: 14.5px;
            line-height: 1.55;
            padding: 10px 10px;
            border-radius: 12px;
            background: rgba(188, 152, 107, 0.06);
            border: 1px solid rgba(188, 152, 107, 0.16);
          }

          .icon {
            font-size: 17px;
            margin-top: 2px;
          }

          .sectionTitle {
            margin: 16px 0 6px;
            font-size: 12.5px;
          }

          .highlight {
            background: rgba(198, 40, 40, 0.06);
            border: 1px solid rgba(198, 40, 40, 0.16);
            color: #8f1f1f;
          }

          .highlight .icon {
            color: #c62828;
          }
        }

        /* ✅ Very small phones */
        @media (max-width: 380px) {
          .title {
            font-size: 19px;
          }

          .item {
            font-size: 14px;
            padding: 9px 9px;
          }
        }
      `}</style>
    </section>
  );
};

export default Interest;