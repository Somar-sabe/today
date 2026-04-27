'use client';

import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  return (
    <section id="blog" className="blog-area p-relative pb-90 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title center-align mb-50">
              <h5>06. Our Blog</h5>
              <h2>Latest News Feed</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title center-align text-right">
              <Link href="#">View All Blog</Link>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Blog Post 1 */}
          <div className="col-lg-6 col-md-12">
            <div className="single-post2 mb-15">
              <div className="blog-thumb2">
                <Link href="#">
                  <Image 
                    src="/img/blog/inner_b1.jpg"
                    alt="Blog Image 1"
                    width={600}
                    height={400}
                    layout="responsive"
                  />
                </Link>
              </div>
              <div className="blog-content2">
                <div className="b-meta">
                  <div className="meta-info">
                    <ul>
                      <li><i className="fas fa-user"></i> Admin</li>
                      <li><i className="fas fa-calendar-alt"></i> 24th March 2021</li>
                    </ul>
                  </div>
                </div>
                <h4>
                  <Link href="#">Fusce suscipit arcu velit id scelerisque.</Link>
                </h4>
                <p>Cras sollicitudin leo sed interdum lacinia. Duis dignissim, arcu nec aliquet venentest atis, arcu dolor tempor lorem.</p>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-lg-6 col-md-12">
            <div className="single-post2 mb-15">
              <div className="blog-thumb2">
                <Link href="#">
                  <Image 
                    src="/img/blog/inner_b2.jpg"
                    alt="Blog Image 2"
                    width={600}
                    height={400}
                    layout="responsive"
                  />
                </Link>
              </div>
              <div className="blog-content2">
                <div className="b-meta">
                  <div className="meta-info">
                    <ul>
                      <li><i className="fas fa-user"></i> Admin</li>
                      <li><i className="fas fa-calendar-alt"></i> 24th March 2021</li>
                    </ul>
                  </div>
                </div>
                <h4>
                  <Link href="#">Vivamus sodales rutrum erat none.</Link>
                </h4>
                <p>Cras sollicitudin leo sed interdum lacinia. Duis dignissim, arcu nec aliquet venentest atis, arcu dolor tempor lorem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
