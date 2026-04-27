
import React from "react";

const PropertyDetailsInfo = () => {
  return (
    <section className="property-details-info">
      <div className="container-fluid mt-1">
        <div className="row property-main-info-1">
          <div className="property-type">
            <h3>Property Type - </h3>
          </div>

          <div className="col-lg-4">
            <table className="table">
              <tbody>
                <tr>
                  <td>Project Name:</td>
                  <td><b>Damac Seacrest</b></td>
                </tr>
                <tr>
                  <td>Property Type:</td>
                  <td><b>Apartments</b></td>
                </tr>
                <tr>
                  <td>Down Payment:</td>
                  <td><b>10%</b></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-4">
            <table className="table">
              <tbody>
                <tr>
                  <td>Location:</td>
                  <td><b>Dubai Maritime City</b></td>
                </tr>
                <tr>
                  <td>Available Units:</td>
                  <td><b>1, 2, and 3</b></td>
                </tr>
                <tr>
                  <td>Starting Price:</td>
                  <td><b>AED 2.2 Million</b></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-lg-4">
            <table className="table">
              <tbody>
                <tr>
                  <td>Developer:</td>
                  <td><b>Damac Properties</b></td>
                </tr>
                <tr>
                  <td>Payment Plan:</td>
                  <td><b>60:40</b></td>
                </tr>
                <tr>
                  <td>Handover Date:</td>
                  <td><b>December 2030</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsInfo;
