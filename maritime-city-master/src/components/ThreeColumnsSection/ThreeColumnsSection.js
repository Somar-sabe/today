'use client';

import React from 'react';

export default function ThreeColumnsSection() {
  return (
    <section className="three-columns">
      <div className="container">
        <div className="column">
          <div className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="55" aria-hidden="true">
              <path d="M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"></path>
            </svg>
          </div>
          <h3 style={{color:'white'}}>AED 5.7 Million</h3>
          <p style={{color:'white'}}>STARTING PRICE</p>
        </div>

        <div className="column">
          <div className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="55" aria-hidden="true">
              <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"></path>
            </svg>
          </div>
          <h3 style={{color:'white'}}>2, 3 & 4</h3>
          <p style={{color:'white'}}>BEDROOM APARTMENTS & PENTHOUSES</p>
        </div>

        <div className="column">
          <div className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="55" aria-hidden="true">
              <path d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-..."></path>
            </svg>
          </div>
          <h3 style={{color:'white'}}>Multiple Options</h3>
          <p style={{color:'white'}}>FLEXIBLE SIZES & FLOOR PLANS</p>
        </div>
      </div>

      <style jsx>{`
        .three-columns {
              background-image: linear-gradient(rgba(0, 35, 73, 1), rgba(0, 35, 73, 1)) !important;
          padding: 60px 20px;
        }

        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .column {
          flex: 1 1 300px;
          max-width: 340px;
          text-align: center;
          color: #ffffff;
        }

        .icon-wrapper {
          margin-bottom: 20px;
        }

        h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.2;
        }
.icon-wrapper svg {
  fill: white;
}
        p {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
