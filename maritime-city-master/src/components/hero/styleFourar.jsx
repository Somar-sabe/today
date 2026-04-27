import Image from 'next/image';

const HeroSectionStyleFourar = () => {
  const services = [
    {
      icon: '/img/icons/se-icon4.png',
      title: 'إقامات مطلة على الواجهة البحرية',
      description:
        'اختبر أسلوب حياة فاخر على الساحل في شقق وبنتهاوسات مصممة بدقة مع إطلالات بانورامية على البحر والأفق.',
      number: '01',
    },
    {
      icon: '/img/icons/se-icon5.png',
      title: 'مساحات تجارية متعددة الاستخدامات',
      description:
        'تقع بشكل استراتيجي داخل مدينة دبي البحرية، وتوفر مساحات تجزئة وأعمال مميزة مثالية للعلامات التجارية الراقية والمكاتب.',
      number: '02',
    },
    {
      icon: '/img/icons/se-icon6.png',
      title: 'فرصة استثمارية مميزة',
      description:
        'تقع في مركز بحري سريع التطور مع عوائد إيجارية مرتفعة وإمكانات قوية لزيادة رأس المال للمستثمرين الأذكياء.',
      number: '03',
    },
  ];

  return (
    <section className="services pt-120 pb-80 p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-relative">
            <div className="section-title center-align mb-10 text-center">
              <h5>02. خدماتنا</h5>
              <h2>ماذا نقدم</h2>
            </div>
          </div>
        </div>

        <div className="row services-active">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-4 bdr">
              <div className="services-08-item">
                <div className="services-08-thumb">
                  <Image 
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="services-08-content">
                  <h3>
                    <a href="#">{service.title}</a>
                  </h3>
                  <p>{service.description}</p>
                  <div className="number">{service.number}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .about-title h2 {
            font-size: 32px; /* Adjust to your preferred mobile size */
          }
          .h2 {
            font-size: 40px;
          }
          p {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSectionStyleFourar;
