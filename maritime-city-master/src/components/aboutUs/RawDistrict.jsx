'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './RawDistrict.module.css';
// Adjust the "../" steps depending on how deep your current component file is buried
// The "@" alias automatically starts searching from your project's "src" folder
import originalImage from '@/assets/images/original.webp';
import Lead from '../contactnew/LeadFormCard';
// Master Inventory Data Structure matching the design configurations
const UNIT_DATA = {
  studio: { name: 'Studio Loft', price: 649000, size: '380 sq.ft', image: originalImage.src },
  oneSuite: { name: '1-Bed Suite', price: 889000, size: '610 sq.ft', image: originalImage.src },
  oneBed: { name: '1-Bedroom Residence', price: 1000000, size: '720 sq.ft', image: originalImage.src },
  twoBed: { name: '2-Bedroom Suite', price: 1400000, size: '1,054 sq.ft', image: originalImage.src },
  office: { name: 'Premium Office Space', price: 1200000, size: '700 sq.ft', image: originalImage.src }
};

export default function RawDistrict() {
  const [selectedUnit, setSelectedUnit] = useState('oneSuite');
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  
  const revealsRef = useRef([]);

  // Modeler Logic
  const unit = UNIT_DATA[selectedUnit];
  const basePrice = unit.price;
  const dldFee = basePrice * 0.04;
  const downPaymentVal = basePrice * (downPaymentPct / 100);
  const bookingTotal = downPaymentVal + dldFee;
  
  // Post-Handover breakdown (Fixed 40% allocations deferred across 3 years / 12 quarters)
  const deferredTotal = basePrice * 0.40;
  const quarterlyInstallment = deferredTotal / 12;
  
  // Dynamic construction milestone calculation (Total 100% - Downpayment% - 5% on Handover - 40% Post Handover)
  const constructionPct = 100 - downPaymentPct - 5 - 40;
  const constructionVal = basePrice * (constructionPct / 100);

  // Modern Scroll Reveal Intersection Observer API Setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToReveals = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0
    }).format(value).replace('AED', 'AED ');
  };

  return (
    <div className={styles.bodyWrapper}>
        
      <main>
        
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroBgContainer}>
            <img src={originalImage.src} alt="RAW District Aerial" className={styles.heroImage} />
            <div className={styles.heroGradientOverlay}></div>
          </div>

          <div className={styles.heroContentContainer}>
            <div className={`${styles.revealBlur} ${styles.heroLeft}`} ref={addToReveals}>
              <div className={styles.vipTag}>
                <span className={styles.pulseDot}></span>
                <span>VIP Pre-Launch Allocation</span>
              </div>
              <h1 className={styles.heroTitle}>
                RAW DISTRICT<br />
                <span className={styles.goldFontWeight}>by Imtiaz</span>
              </h1>
              <p className={styles.heroDescription}>
                An architectural declaration at the convergence corridor of Dubai's future. Fully furnished with custom joinery, integrated appliances, and a direct sky-bridge to the Dubai Metro.
              </p>
              
              <div className={styles.heroMetricsGrid}>
                <div>
                  <span className={styles.metricLabel}>Entry Level</span>
                  <span className={styles.metricValue}>AED 649K</span>
                </div>
                <div>
                  <span className={styles.metricLabel}>Handover</span>
                  <span className={styles.metricValue}>Q1 2029</span>
                </div>
                <div>
                  <span className={styles.metricLabel}>Post-Handover</span>
                  <span className={`${styles.metricValue} ${styles.textGold}`}>3-Year Plan</span>
                </div>
              </div>
            </div>

            <div className={`${styles.revealBlur} ${styles.heroRight} ${styles.delay300}`} ref={addToReveals}>
                <Lead />
              <a href="#register" className={styles.brochureButton}>
                <span>Request Brochure</span>
                <span className={styles.arrowIcon}>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
<section id="philosophy" className={styles.philosophySection}>
  <div className={styles.philosophyGrid}>
    <div className={styles.revealBlur} ref={addToReveals}>
      <div className={styles.philosophyCard}>
        {/* Pass the imported variable inside curly braces */}
        <img src={originalImage.src} alt="Lifestyle Interior" className={styles.philosophyImage} />
        <div className={styles.philosophyOverlay}></div>
        <div className={styles.philosophyTagContainer}>
          <span className={styles.philosophyCardTag}>The RAW Attitude</span>
        </div>
      </div>
    </div>


            <div className={`${styles.revealBlur} ${styles.philosophyTextContent} ${styles.delay200}`} ref={addToReveals}>
              <span className={styles.sectionSubtitle}>A Culture Enclave</span>
              <h2 className={styles.sectionTitle}>
                Not For The Default. <br />
                <span className={styles.mutedTitleText}>We Are Never Finished.</span>
              </h2>
              <p className={styles.sectionDescription}>
                "The building is the least interesting thing about us. Most places want you to fit in, we want to know what you're building to stand out." RAW District is custom-built from the culture of the place it lands in.
              </p>
              
              <div className={styles.featuresGrid}>
                <div className={styles.glassCard}>
                  <div className={styles.featureIcon}>▤</div>
                  <h4 className={styles.featureTitle}>Custom Joinery</h4>
                  <p className={styles.featureDescription}>In-house manufactured details</p>
                </div>
                <div className={styles.glassCard}>
                  <div className={styles.featureIcon}>🔇</div>
                  <h4 className={styles.featureTitle}>Acoustic Treatments</h4>
                  <p className={styles.featureDescription}>Smart systems & silence</p>
                </div>
                <div className={styles.glassCard}>
                  <div className={styles.featureIcon}>≈</div>
                  <h4 className={styles.featureTitle}>Unscripted Flow</h4>
                  <p className={styles.featureDescription}>Minimal design prioritizing ease</p>
                </div>
                <div className={styles.glassCard}>
                  <div className={styles.featureIcon}>🛋️</div>
                  <h4 className={styles.featureTitle}>Fully Furnished</h4>
                  <p className={styles.featureDescription}>Delivered completely turnkey</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AMENITIES BENTO GRID SECTION */}
        <section id="amenities" className={styles.amenitiesSection}>
          <div className={styles.containerMax}>
            <div className={`${styles.revealBlur} ${styles.textCenterBlock}`} ref={addToReveals}>
              <span className={styles.sectionSubtitle}>Space With Pace</span>
              <h2 className={styles.sectionTitleCenter}>Unscripted Flow</h2>
              <p className={styles.bentoHeaderDesc}>Nothing exists to complete a standard amenity checklist. Hover to explore the ecosystem.</p>
            </div>

            <div className={`${styles.revealBlur} ${styles.bentoGrid} ${styles.delay200}`} ref={addToReveals}>
              <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
                <img src={originalImage.src} alt="Clubhouse" className={styles.bentoImage} />
                <div className={styles.bentoOverlayLarge}></div>
                <div className={styles.bentoContent}>
                  <h3 className={styles.bentoTitleLarge}>The Clubhouse</h3>
                  <p className={styles.bentoHoverText}>A dramatic, double-height communal lounge. Features sunken seating pods and the Masih Imtiaz Art Collection.</p>
                </div>
              </div>
              
              <div className={styles.bentoCard}>
                <img src={originalImage.src} alt="Workspace" className={styles.bentoImage} />
                <div className={styles.bentoOverlaySmall}></div>
                <div className={styles.bentoContentSmall}>
                  <h3 className={styles.bentoTitleSmall}>Co-Working</h3>
                </div>
              </div>

              <div className={styles.bentoCard}>
                <img src={originalImage.src} alt="Residences" className={styles.bentoImage} />
                <div className={styles.bentoOverlaySmall}></div>
                <div className={styles.bentoContentSmall}>
                  <h3 className={styles.bentoTitleSmall}>Residences</h3>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
                <img src={originalImage.src} alt="Architecture" className={styles.bentoImage} />
                <div className={styles.bentoOverlaySmall}></div>
                <div className={styles.bentoContentSmall}>
                  <h3 className={styles.bentoTitleSmall}>Outer Shell & Skybridge</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INVENTORY HORIZONTAL SCROLL MATRIX */}
        <section id="pricing-matrix" className={styles.inventorySection}>
          <div className={styles.containerMax}>
            <div className={`${styles.revealBlur} ${styles.inventoryHeader} ${styles.flexRowBetween}`} ref={addToReveals}>
              <div>
                <span className={styles.sectionSubtitle}>Secure Development Matrix</span>
                <h2 className={styles.sectionTitle}>Inventory</h2>
              </div>
              <p className={styles.scrollNotice}>Direct developer pricing. No agency premium fees. Scroll to explore →</p>
            </div>

            <div className={`${styles.revealBlur} ${styles.scrollSnapX} ${styles.delay200}`} ref={addToReveals}>
              {Object.keys(UNIT_DATA).map((key) => {
                const item = UNIT_DATA[key];
                return (
                  <div 
                    key={key} 
                    onClick={() => setSelectedUnit(key)}
                    className={`${styles.inventoryCard} ${selectedUnit === key ? styles.activeInventoryCard : ''}`}
                  >
                    <div className={styles.inventoryImgWrapper}>
                      <img src={item.image} alt={item.name} className={styles.inventoryCardImg} />
                    </div>
                    <div className={styles.inventoryCardContent}>
                      <div className={styles.inventoryCardMeta}>
                        <span className={styles.unitSizeFont}>{item.size}</span>
                        <span className={styles.shortcutIndicator}>↗</span>
                      </div>
                      <h3 className={styles.inventoryCardTitle}>{item.name}</h3>
                      <div className={styles.inventoryCardFooter}>
                        <span className={styles.inventoryCardPrice}>{formatCurrency(item.price)}</span>
                        <span className={styles.startingPriceSub}>Starting Price</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE FINANCIAL SIMULATOR */}
        <section id="calculator" className={styles.calculatorSection}>
          <div className={styles.radialBlurBg}></div>
          <div className={styles.containerMaxRelative}>
            <div className={`${styles.revealBlur} ${styles.textCenterBlock}`} ref={addToReveals}>
              <span className={styles.sectionSubtitle}>Financial Modeler</span>
              <h2 className={styles.sectionTitleCenter}>Interactive Simulator</h2>
            </div>

            <div className={`${styles.revealBlur} ${styles.calculatorMainCard} ${styles.delay200}`} ref={addToReveals}>
              <div className={styles.calcInputsGrid}>
                <div>
                  <label htmlFor="calc-unit-select" className={styles.inputFieldLabel}>01. Configuration</label>
                  <div className={styles.selectWrapper}>
                    <select 
                      id="calc-unit-select" 
                      value={selectedUnit}
                      onChange={(e) => setSelectedUnit(e.target.value)}
                      className={styles.customSelectInput}
                    >
                      {Object.keys(UNIT_DATA).map((key) => (
                        <option key={key} value={key}>
                          {UNIT_DATA[key].name} ({formatCurrency(UNIT_DATA[key].price)})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div className={styles.sliderLabelRow}>
                    <label htmlFor="calc-down-slider" className={styles.inputFieldLabel}>02. Downpayment</label>
                    <span className={styles.sliderPercentageDisplay}>{downPaymentPct}%</span>
                  </div>
                  <input 
                    id="calc-down-slider" 
                    type="range" 
                    min="20" 
                    max="50" 
                    value={downPaymentPct} 
                    step="5" 
                    onChange={(e) => setDownPaymentPct(parseInt(e.target.value))}
                    className={styles.customRangeSlider}
                  />
                  <div className={styles.sliderLimitsRow}>
                    <span>20% Min</span>
                    <span>50% Max</span>
                  </div>
                </div>
              </div>

              {/* Modeler Results Metrics Dashboard */}
              <div className={styles.resultsDashboardGrid}>
                <div className={styles.dashboardMetricBlock}>
                  <span className={styles.dashboardBlockLabel}>Base Price</span>
                  <div className={styles.dashboardBlockValue}>{formatCurrency(basePrice)}</div>
                </div>
                <div className={`${styles.dashboardMetricBlock} ${styles.borderGoldHighlight}`}>
                  <span className={styles.dashboardBlockLabel}>Total Booking (+DLD)</span>
                  <div className={`${styles.dashboardBlockValue} ${styles.textGold}`}>{formatCurrency(bookingTotal)}</div>
                  <span className={styles.dashboardBlockSubtext}>DLD Fee: <span className={styles.colorWhiteText}>{formatCurrency(dldFee)}</span></span>
                </div>
                <div className={styles.dashboardMetricBlock}>
                  <span className={styles.dashboardBlockLabel}>Deferred (Post-Handover)</span>
                  <div className={styles.dashboardBlockValue}>{formatCurrency(deferredTotal)}</div>
                  <span className={styles.dashboardBlockSubtext}>
                    <span className={styles.goldFontBold}>{formatCurrency(quarterlyInstallment)}</span> /quarter
                  </span>
                </div>
              </div>

              {/* Structured Matrix Comparison Grid */}
              <div className={styles.comparisonTimelineGrid}>
                <div className={styles.timelineBlockStandard}>
                  <h4 className={styles.timelineHeading}>Standard 50/50 Plan</h4>
                  <div className={styles.timelineRow}><span>Downpayment:</span> <span className={styles.colorWhiteText}>20% (+4% DLD)</span></div>
                  <div className={styles.timelineRow}><span>Construction:</span> <span className={styles.colorWhiteText}>30%</span></div>
                  <div className={styles.timelineRow}><span>On Handover:</span> <span className={styles.weightBoldWhite}>50%</span></div>
                </div>
                
                <div className={styles.timelineBlockRecommended}>
                  <div className={styles.recommendedBadge}>Recommended</div>
                  <h4 className={styles.timelineHeading}>60/40 Post-Handover</h4>
                  <div className={styles.timelineRow}>
                    <span>Downpayment:</span> 
                    <span><span className={styles.colorWhiteText}>{downPaymentPct}%</span> (+4% DLD)</span>
                  </div>
                  <div className={styles.timelineRow}>
                    <span>Construction:</span> 
                    <span className={styles.colorWhiteText}>{constructionPct}% ({formatCurrency(constructionVal)})</span>
                  </div>
                  <div className={styles.timelineRow}><span>On Handover:</span> <span className={styles.colorWhiteText}>5%</span></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}