'use client';

import { useState } from 'react';
import Image from 'next/image';

const HeroSectionStyleFiveFa = () => {
  const [activeTab, setActiveTab] = useState('2200');

  const tabContent = {
    '2200': {
      image: '/img/plan-2200.jpg',
      details: [
        { label: 'مساحت کل:', value: '۸۶۳٫۰۵ فوت مربع' },
        { label: 'تعداد طبقات:', value: '۳۰ طبقه' },
        { label: 'پارکینگ:', value: '۴ جای پارک بزرگ' },
        { label: 'فضای اجتماعی:', value: '۸۶۳٫۰۵ فوت مربع' },
      ],
    },
    '3000': {
      image: '/img/plan-800.jpg',
      details: [
        { label: 'مساحت کل:', value: '۱۱۱۵٫۵۷ فوت مربع' },
        { label: 'تعداد طبقات:', value: '۳۰ طبقه' },
        { label: 'پارکینگ:', value: '۴ جای پارک بزرگ' },
        { label: 'فضای اجتماعی:', value: '۱۱۱۵٫۵۷ فوت مربع' },
      ],
    },
    '3200': {
      image: '/img/plan-1200.jpg',
      details: [
        { label: 'مساحت کل:', value: '۱۹۲۶٫۲۰ فوت مربع' },
        { label: 'تعداد طبقات:', value: '۳۰ طبقه' },
        { label: 'پارکینگ:', value: '۴ جای پارک بزرگ' },
        { label: 'فضای اجتماعی:', value: '۱۹۲۶٫۲۰ فوت مربع' },
      ],
    },
  };

  return (
    <section className="apartments pb-110">
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="apartments-img">
              <Image
                src={tabContent[activeTab].image}
                alt="نقشه طبقه"
                width={600}
                height={500}
                layout="responsive"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 order-1 order-lg-2" dir="rtl">
            <div className="section-title mb-30">
              <h5>نقشه واحدها</h5>
              <h2 style={{ fontSize: 40, textAlign: "center" }}>فضای زندگی واحدها را ببینید</h2>
            </div>

            <nav className="nav nav-tabs nav-fill mb-3">
              <button
                className={`nav-item nav-link ${activeTab === '2200' ? 'active' : ''}`}
                onClick={() => setActiveTab('2200')}
              >
                آپارتمان یک‌خوابه
              </button>
              <button
                className={`nav-item nav-link ${activeTab === '3000' ? 'active' : ''}`}
                onClick={() => setActiveTab('3000')}
              >
                آپارتمان دو‌خوابه
              </button>
              <button
                className={`nav-item nav-link ${activeTab === '3200' ? 'active' : ''}`}
                onClick={() => setActiveTab('3200')}
              >
                آپارتمان سه‌خوابه
              </button>
            </nav>

            <div className="tab-content py-3 px-3 px-sm-0">
              <div className="tab-pane fade show active">
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: '12px',
                    direction: 'rtl',
                  }}
                >
                  {tabContent[activeTab].details.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '150px 1fr',
                        alignItems: 'center',
                        backgroundColor: '#f9f9f9',
                        padding: '10px 15px',
                        borderRadius: '6px',
                        fontSize: '16px',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                      }}
                    >
                      <span style={{ fontWeight: '600', color: '#2c3e50' }}>{item.label}</span>
                      <span style={{ color: '#555' }}>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionStyleFiveFa;
