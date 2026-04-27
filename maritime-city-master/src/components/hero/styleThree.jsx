import Image from 'next/image';

const HeroSectionStyleThree = () => {
  return (
    <section
      id="video"
      className="video-area pt-60 pb-60 p-relative"
      style={{
        backgroundImage: 'url(/img/bg/video-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
    >
      {/* Lines */}
      <div className="content-lines-wrapper2">
        <div className="content-lines-inner2">
          <div className="content-lines2"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="s-video-wrap">
              <div className="s-video-content">
                <a
                  href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  className="popup-video mb-50"
                >
                  <Image 
                    src="/img/bg/play-button.png"
                    alt="Play Button"
                    width={80}
                    height={80}
                  />
                </a>
              </div>
            </div>

            <div className="section-title center-align text-center">
              <h2>View Promo Video</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionStyleThree;
