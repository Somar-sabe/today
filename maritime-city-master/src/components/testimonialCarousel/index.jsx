'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Jason Brown',
    role: 'Web Developer',
    message: '“Cras sollicitudin leo sed interdum lacinia. Duis dignissim, arcu nec aliquet venentest atis, arcu dolor tempor lorem, sed eleifend urna enim in nunc”.',
    avatar: '/img/testimonial/testi_avatar.png',
  },
  {
    name: 'Oliver Dummer',
    role: 'Web Developer',
    message: '“Cras sollicitudin leo sed interdum lacinia. Duis dignissim, arcu nec aliquet venentest atis, arcu dolor tempor lorem, sed eleifend urna enim in nunc”.',
    avatar: '/img/testimonial/testi_avatar.png',
  },
  {
    name: 'Margie Robinn',
    role: 'Web Developer',
    message: '“Cras sollicitudin leo sed interdum lacinia. Duis dignissim, arcu nec aliquet venentest atis, arcu dolor tempor lorem, sed eleifend urna enim in nunc”.',
    avatar: '/img/testimonial/testi_avatar.png',
  },
];

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function TestimonialSection() {
  return (
    <section className="testimonial-area pb-20">
      <div className="container">
        <div className="section-title center-align mb-10 text-center">
          <h5>05. Feedback</h5>
          <h2>Our Testimonials</h2>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testi, index) => (
            <div className="single-testimonial" key={index}>
              <div className="testi-author">
                <Image  src={testi.avatar} alt={testi.name} width={60} height={60} />
                <div className="ta-info">
                  <h6>{testi.name}</h6>
                  <span>{testi.role}</span>
                </div>
              </div>
              <p>{testi.message}</p>
              <div className="qt-img">
                <Image  src="/img/testimonial/qt-icon.png" alt="quote" width={30} height={30} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
