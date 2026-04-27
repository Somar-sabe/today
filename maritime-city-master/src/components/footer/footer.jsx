import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footers">
      {/* Top */}
      <div className="toppo">
        <div className="wraps">
          <div className="grid">
            {/* Brand / Contact */}
            <div className="col">
              <div className="brand">
                <Image src="/img/logo.png" alt="Altair" width={148} height={45} priority />
              </div>

              <ul className="contact">
                <li className="contactRow">
                  <span className="icon" aria-hidden="true">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text">Dubai, United Arab Emirates</span>
                </li>
                <li className="contactRow">
                  <span className="icon" aria-hidden="true">
                    <FaPhoneAlt />
                  </span>
                  <Link className="text link" href="tel:+97145798350">
                    +971 45-798-350
                  </Link>
                </li>
                <li className="contactRow">
                  <span className="icon" aria-hidden="true">
                    <FaEnvelope />
                  </span>
                  <Link className="text link" href="mailto:info@altairre.ae">
                    info@altairre.ae
                  </Link>
                </li>
              </ul>

              <div className="social">
                <Link className="socialBtn" href="#" aria-label="Facebook" title="Facebook">
                  <FaFacebookF />
                </Link>
                <Link className="socialBtn" href="#" aria-label="Twitter" title="Twitter">
                  <FaTwitter />
                </Link>
                <Link className="socialBtn" href="#" aria-label="LinkedIn" title="LinkedIn">
                  <FaLinkedin />
                </Link>
                <Link className="socialBtn" href="#" aria-label="YouTube" title="YouTube">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="col">
              <h4 className="title">Company</h4>
              <ul className="links">
                <li>
                  <Link className="link" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    Property
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col">
              <h4 className="title">Newsletter</h4>
              <p className="desc">
                Subscribe to our weekly newsletter and receive updates via email.
              </p>

              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input className="input" type="email" name="email" placeholder="Email*" />
                <button className="submit" type="submit" aria-label="Subscribe">
                  <FaPaperPlane />
                  <span>Subscribe</span>
                </button>
              </form>

              <p className="note">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottoms">
        <div className="wraps bottomRow">
          <p className="copy">© {year} EVO Labs. All rights reserved.</p>

          <ul className="legal">
            <li>
              <Link className="link" href="#">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="link" href="#">
                Claim
              </Link>
            </li>
            <li>
              <Link className="link" href="#">
                Privacy & Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* ===== Base ===== */
        .footers {
          background: radial-gradient(900px 520px at 20% 0%, rgba(201, 169, 110, 0.14), transparent 60%),
            radial-gradient(900px 520px at 80% 0%, rgba(15, 23, 42, 0.10), transparent 55%),
            #0b1220;
          color: rgba(255, 255, 255, 0.86);
        }

        .wraps {
          width: min(1200px, 92vw);
          margin: 0 auto;
        }

        .toppo {
          padding: 44px 0 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .grid {
          display: grid;
          grid-template-columns: 1.25fr 0.9fr 1.15fr;
          gap: 28px;
        }

        .col {
          min-width: 0;
        }

        .brand {
          display: inline-flex;
          padding: 10px 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(10px);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.25);
        }

        .title {
          margin: 0 0 12px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.92);
        }

        .desc {
          margin: 0 0 14px;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 600;
          line-height: 1.6;
        }

        /* ===== Links (IMPORTANT: not right on mobile) ===== */
        .links,
        .legal,
        .contact {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
        }

        .links {
          display: grid;
          gap: 10px;
        }

        .link {
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          font-weight: 700;
          transition: 0.18s ease;
        }

        .link:hover {
          color: rgba(201, 169, 110, 0.95);
        }

        /* ===== Contact ===== */
        .contact {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }

        .contactRow {
          display: grid;
          grid-template-columns: 18px 1fr;
          gap: 10px;
          align-items: start;
        }

        .icon {
          opacity: 0.9;
          margin-top: 2px;
          color: rgba(201, 169, 110, 0.95);
        }

        .text {
          color: rgba(255, 255, 255, 0.78);
          font-weight: 650;
          line-height: 1.55;
        }

        /* ===== Social ===== */
        .social {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .socialBtn {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.10);
          color: rgba(255, 255, 255, 0.86);
          text-decoration: none;
          transition: 0.18s ease;
        }

        .socialBtn:hover {
          transform: translateY(-1px);
          border-color: rgba(201, 169, 110, 0.35);
          color: rgba(201, 169, 110, 0.95);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
        }

        /* ===== Newsletter ===== */
        .form {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          margin-top: 10px;
        }

        .input {
          height: 48px;
          border-radius: 14px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.92);
          outline: none;
          font-weight: 700;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .input:focus {
          border-color: rgba(201, 169, 110, 0.45);
          box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.14);
        }

        .submit {
          height: 48px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(201, 169, 110, 0.35);
          background: linear-gradient(180deg, rgba(201, 169, 110, 0.25), rgba(201, 169, 110, 0.12));
          color: rgba(255, 255, 255, 0.92);
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: 0.18s ease;
          white-space: nowrap;
        }

        .submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
        }

        .submit span {
          font-size: 12px;
        }

        .note {
          margin: 10px 0 0;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 650;
        }

        /* ===== Bottom ===== */
        .bottoms {
          padding: 18px 0 22px;
          background: rgba(0, 0, 0, 0.18);
        }

        .bottomRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.70);
          font-weight: 700;
        }

        .legal {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin: 0;
        }

        /* ===== Responsive ===== */
        @media (max-width: 980px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 680px) {
          .toppo {
            padding: 34px 0 22px;
          }

          .grid {
            grid-template-columns: 1fr; /* STACK */
            gap: 22px;
          }

          /* THIS is what fixes your issue: force center alignment on mobile */
          .col,
          .toppo,
          .wraps {
            text-align: center;
          }

          .contactRow {
            grid-template-columns: 18px 1fr;
            justify-items: start;
            max-width: 420px;
            margin: 0 auto;
            text-align: left; /* address looks better left */
          }

          .links {
            justify-items: center; /* center list items */
          }

          .social {
            justify-content: center;
          }

          .form {
            grid-template-columns: 1fr; /* input then button */
          }

          .submit {
            width: 100%;
            justify-content: center;
          }

          .bottomRow {
            flex-direction: column;
            text-align: center;
          }

          .legal {
            justify-content: center; /* NOT RIGHT anymore */
          }
        }
      `}</style>
    </footer>
  );
}
