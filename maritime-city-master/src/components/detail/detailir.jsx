import React from "react";

const PropertyDetailsInfo = () => {
  const sectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "40px 20px",
    fontFamily: "Tahoma, sans-serif",
    direction: "rtl",
  };

  const headingStyle = {
    padding: "0px 0 0px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2c3e50",
    borderBottom: "2px solid #e0e0e0",
    marginBottom: "30px",
    textAlign: "center",
  };

  const tableContainerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    padding: "20px",
  };

  const tableStyle = {
    width: "100%",
    fontSize: "16px",
    color: "#333",
  };

  const cellLabelStyle = {
    fontWeight: "500",
    padding: "10px",
    color: "#555",
    width: "40%",
  };

  const cellValueStyle = {
    fontWeight: "bold",
    padding: "10px",
    color: "#000",
  };

  return (
    <section className="property-details-info" style={sectionStyle}>
      <div className="container-fluid mt-1">
        <div className="row property-main-info-1">
          <div style={headingStyle} className="property-type" dir="rtl">
            <h3 style={{ padding: 20 }}>جزئیات پروژه</h3>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center" }} className="row" dir="rtl">
            <div className="col-lg-4" style={tableContainerStyle}>
              <table className="table" style={tableStyle}>
                <tbody>
                  <tr>
                    <td style={cellLabelStyle}>نام پروژه:</td>
                    <td><b>جميرا رزیدنس</b></td>
                  </tr>
                  <tr>
                    <td style={cellLabelStyle}>موقعیت مکانی:</td>
                    <td><b>برج‌های دریاچه جمیرا</b></td>
                  </tr>
                  <tr>
                    <td style={cellLabelStyle}>تاریخ تحویل:</td>
                    <td><b>اوت 2030</b></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-4" style={tableContainerStyle}>
              <table className="table" style={tableStyle}>
                <tbody>
                  <tr>
                    <td style={cellLabelStyle}>قیمت شروع:</td>
                    <td><b>۳.۵۱ میلیون درهم</b></td>
                  </tr>
                  <tr>
                    <td style={cellLabelStyle}>طرح پرداخت:</td>
                    <td><b>۶۰:۴۰</b></td>
                  </tr>
                  <tr>
                    <td style={cellLabelStyle}>واحدهای موجود:</td>
                    <td><b>۱، ۲ و ۳ خوابه</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsInfo;
