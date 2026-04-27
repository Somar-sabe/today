'use client'

import React from 'react'

export default function PromotionBar({
  text = '🔥 Zero commission - Direct Developer Pricing - Limited Time Payment Plans Available',
}) {
  return (
    <div className="promo" role="status" aria-live="polite">
      <span className="promoText">{text}</span>

      <style jsx>{`
        .promo {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 9999;

          background: linear-gradient(
            180deg,
            rgba(179, 150, 128, 1),
            rgba(158, 130, 110, 1)
          );
          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          /* ✅ don’t force a single height */
          min-height: 42px;
          padding: 10px 14px;

          text-align: center;

          /* subtle luxury */
          box-shadow: 0 10px 28px rgba(2, 6, 23, 0.18);
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);

          /* iPhone notch safe area */
          padding-top: calc(10px + env(safe-area-inset-top));
        }

        .promoText {
          display: block;
          max-width: 1100px;

          font-weight: 800;
          letter-spacing: 0.02em;

          /* ✅ responsive font */
          font-size: clamp(12px, 1.3vw, 14px);
          line-height: 1.25;

          /* ✅ allow wrapping */
          white-space: normal;
          word-break: break-word;

          /* nicer wrapping where supported */
          text-wrap: balance;
        }

        @media (max-width: 640px) {
          .promo {
            min-height: 40px;
            padding: 9px 12px;
          }

          .promoText {
            /* ✅ make it readable on mobile */
            font-size: 12px;
            line-height: 1.3;

            /* allow 2 lines comfortably */
            max-width: 92vw;
          }
        }

        @media (max-width: 380px) {
          .promoText {
            font-size: 11.5px;
          }
        }
      `}</style>
    </div>
  )
}
