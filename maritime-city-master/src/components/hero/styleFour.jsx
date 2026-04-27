import Image from 'next/image';

const HeroSectionStyleFour = () => {
  const services = [
    {
      icon: '/img/icons/se-icon4.png',
      title: 'Waterfront Residences',
      description:
        'Experience upscale coastal living in meticulously designed apartments and penthouses with sweeping sea and skyline views.',
      number: '01',
    },
    {
      icon: '/img/icons/se-icon5.png',
      title: 'Mixed-Use Commercial Spaces',
      description:
        'Strategically located within Dubai Maritime City, offering premium retail and business spaces ideal for high-end brands and offices.',
      number: '02',
    },
    {
      icon: '/img/icons/se-icon6.png',
      title: 'Prime Investment Opportunity',
      description:
        'Positioned in a fast-evolving maritime hub with high rental yields and strong capital appreciation potential for savvy investors.',
      number: '03',
    },
  ];


  return (
    <section className="services pt-120 pb-80 p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-relative">
            <div className="section-title center-align mb-10 text-center">
              <h5>02. Our Services</h5>
              <h2>What We Provide</h2>
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
    .h2{
    font-size:40px;}
        p {
        font-size: 18px;
    }
      }
      `}</style>
    </section>
  );
};

export default HeroSectionStyleFour;
