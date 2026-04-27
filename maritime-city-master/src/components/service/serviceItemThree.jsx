import Image from 'next/image';

const serviceItemThree = () => {
  const services = [
    {
      icon: '/img/icon/se-icon4.png',
      title: 'Residential Developments',
      description:
        'Aliquam at justo enim. Vestibulum ac erat massa. Aliquam non leo ligula. Sed semper ex nibh, nec bibendum ipsum.',
      number: '01',
    },
    {
      icon: '/img/icon/se-icon5.png',
      title: 'Commercial Development',
      description:
        'Aliquam at justo enim. Vestibulum ac erat massa. Aliquam non leo ligula. Sed semper ex nibh, nec bibendum ipsum.',
      number: '02',
    },
    {
      icon: '/img/icon/se-icon6.png',
      title: 'Property Investor',
      description:
        'Donec vestibulum arcu a arcu scelerisque, quis dignissim turpis semper onec tortor mi, volutpat a iaculis sit amet.',
      number: '03',
    },
    {
      icon: '/img/icon/se-icon5.png',
      title: 'Commercial Development',
      description:
        'Aliquam at justo enim. Vestibulum ac erat massa. Aliquam non leo ligula. Sed semper ex nibh, nec bibendum ipsum.',
      number: '04',
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

export default serviceItemThree;
