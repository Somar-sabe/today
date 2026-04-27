import { useState } from "react";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VisibilityObserver } from "reactjs-visibility";

function CounterUpar() {
  const [loading, setLoading] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setLoading({ loading: true });
    }
  };

  const options = {
    rootMargin: "200px",
  };

  return (
    <>
      <div style={{paddingTop:70}} className="ltn__counterup-area section-bg-1 pt-120 pb-70" dir="rtl">
        <Container>
          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
            خطة الدفع
          </h6>
          <Row>
            <h2 style={{fontSize:25}} className="ltn__feature-info">
            خطة دفع جذابة 60/40
            </h2>
            <br />
            <br />
            <br />
            <br />
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <h1>
20%
                </h1>
                <h6>الحجز</h6>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <h1>
                 40%
                </h1>
                <h6>6 اقساط</h6>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <h1>
40%
                </h1>
                <h6>التسليم في 2030</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CounterUpar;
