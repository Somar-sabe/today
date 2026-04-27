import { useState } from "react";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VisibilityObserver } from "reactjs-visibility";
function CounterUp() {
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
      <div style={{paddingTop:70}} className="ltn__counterup-area section-bg-1 pt-120 pb-70">
        <Container>
          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
            Payment Plan
          </h6>
          <Row>

            <h2 className="ltn__feature-info">
              Attractive 10/70/20 Payment Plan
            </h2>
            <br />
            <br />
            <br />
            <br />
            <Col xs={12} sm={6} md={3} className="align-self-center">

              <div className="ltn__counterup-item">
                {/* <div className="counter-icon">
                  <i className="flaticon-select"></i>
                </div> */}
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 10 : 0}
                      suffix="%"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>Booking</h6>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                {/* <div className="counter-icon">
                  <i className="flaticon-excavator"></i>
                </div> */}
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 70 : 0}
                      suffix="%"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>70 Installments</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                {/* <div className="counter-icon">
                  <i className="flaticon-armchair"></i>
                </div> */}
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 20 : 0}
                      suffix="%"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>Handover in June 2029</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CounterUp;
