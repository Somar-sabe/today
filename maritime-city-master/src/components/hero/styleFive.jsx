'use client';

import { useState } from 'react';
import Image from 'next/image';

const HeroSectionStyleFive = () => {
  const [activeTab, setActiveTab] = useState('2200');

  const tabContent = {
    '2200': {
  
      details: [
        { label: 'Total Area:', value: '863.05 sqft Full Area' },
        { label: 'Total Floor:', value: '30 Floors' },
        { label: 'Parking Lot:', value: '4 Large' },
        { label: 'Social Area:', value: '863.05 sqft Area' },
      ],
    },
    '3000': {
     
      details: [
        { label: 'Total Area:', value: '1115.57 sqft Full Area' },
        { label: 'Total Floor:', value: '30 Floors' },
        { label: 'Parking Lot:', value: '4 Large' },
        { label: 'Social Area:', value: '1115.57 sqft Area' },
      ],
    },
    '3200': {
     
      details: [
        { label: 'Total Area:', value: '1926.20 Full Area' },
        { label: 'Total Floor:', value: '30 Floors' },
        { label: 'Parking Lot:', value: '4 Large' },
        { label: 'Social Area:', value: '1926.20 Area' },
      ],
    },
  };

  return (
    <section className="apartments pb-110">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="section-title mb-30">
              <h5>03. Our Plans</h5>
              <h2>See Our Living Space Of Flat</h2>
            </div>

            <nav className="nav nav-tabs nav-fill mb-3">
              <button
                className={`nav-item nav-link ${activeTab === '2200' ? 'active' : ''}`}
                onClick={() => setActiveTab('2200')}
              >
                2200sqft Flat
              </button>
              <button
                className={`nav-item nav-link ${activeTab === '3000' ? 'active' : ''}`}
                onClick={() => setActiveTab('3000')}
              >
                3000sqft Flat
              </button>
              <button
                className={`nav-item nav-link ${activeTab === '3200' ? 'active' : ''}`}
                onClick={() => setActiveTab('3200')}
              >
                3200sqft Flat
              </button>
            </nav>

            <div className="tab-content py-3 px-3 px-sm-0">
              <div className="tab-pane fade show active">
                <p>{tabContent[activeTab].text}</p>
                <ul>
                  {tabContent[activeTab].details.map((item, index) => (
                    <li key={index}>
                      <span className="before">{item.label}</span>{' '}
                      <span className="after">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="apartments-img">
              <Image
                src="/img/bg/floor-chart.png"
                alt="floor-chart"
                width={600}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionStyleFive;
