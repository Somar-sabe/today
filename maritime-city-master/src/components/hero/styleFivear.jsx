'use client';

import { useState } from 'react';
import Image from 'next/image';

const HeroSectionStyleFivear = () => {
  const [activeTab, setActiveTab] = useState('2200');

  const tabContent = {
    '2200': {
      image: '/img/plan-2200.jpg',
      details: [
        { label: 'المساحة الكلية:', value: '863.05 قدم مربع كامل المساحة' },
        { label: 'عدد الطوابق:', value: '30 طابقاً' },
        { label: 'موقف سيارات:', value: '4 مواقف كبيرة' },
        { label: 'المنطقة الاجتماعية:', value: '863.05 قدم مربع' },
      ],
    },
    '3000': {
      image: '/img/plan-800.jpg',
      details: [
        { label: 'المساحة الكلية:', value: '1115.57 قدم مربع كامل المساحة' },
        { label: 'عدد الطوابق:', value: '30 طابقاً' },
        { label: 'موقف سيارات:', value: '4 مواقف كبيرة' },
        { label: 'المنطقة الاجتماعية:', value: '1115.57 قدم مربع' },
      ],
    },
    '3200': {
      image: '/img/plan-1200.jpg',
      details: [
        { label: 'المساحة الكلية:', value: '1926.20 كامل المساحة' },
        { label: 'عدد الطوابق:', value: '30 طابقاً' },
        { label: 'موقف سيارات:', value: '4 مواقف كبيرة' },
        { label: 'المنطقة الاجتماعية:', value: '1926.20' },
      ],
    },
  };

  return (
    <section className="apartments pb-110" >
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 order-2 order-lg-1" >
            <div className="apartments-img">
            <Image
                src={tabContent[activeTab].image}
                alt="مخطط الطابق"
                width={600}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2"  >
            <div className="section-title mb-30" dir="rtl">
              <h5>مخطط الوحدات</h5>
              <h2 style={{ fontSize: 40, textAlign: "center" }}>شاهد مساحات المعيشة للشقق</h2>
            </div>

            <nav className="nav nav-tabs nav-fill mb-3">
              <button
                className={`nav-item nav-link ${activeTab === '2200' ? 'active' : ''}`}
                onClick={() => setActiveTab('2200')}
              >
                شقة غرفة نوم
              </button>
              <button
                className={`nav-item nav-link ${activeTab === '3000' ? 'active' : ''}`}
                onClick={() => setActiveTab('3000')}
              >
                شقة غرفتين نوم
              </button>
              <button
                className={`nav-item nav-link ${activeTab === '3200' ? 'active' : ''}`}
                onClick={() => setActiveTab('3200')}
              >
                شقة 3 غرف نوم
              </button>
            </nav>

            <div className="tab-content py-3 px-3 px-sm-0" >
              <div className="tab-pane fade show active" dir="rtl">
                <p>{tabContent[activeTab].text}</p>
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
        gridTemplateColumns: '150px 1fr', // label column, value column
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

          {/* Right Image */}

        </div>
      </div>
    </section>
  );
};

export default HeroSectionStyleFivear;
