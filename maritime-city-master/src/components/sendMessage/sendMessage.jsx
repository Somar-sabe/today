import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const SendMessage = () => {
  const [showModal, setShowModal] = useState(true);
  
    return (
        <div className="formWrapper">
        <button className="closeButton" onClick={() => setShowModal(false)}>X</button>
        <form>
          <div className="formGroup">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="formGroup">
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              country={'ae'}
              value=""
              inputProps={{
                name: 'phoneNumber',
                required: true,
                autoFocus: false,
              }}
              containerStyle={{ width: '100%' }}
              inputStyle={{ width: '100%' }}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="communication">Best method to contact you?</label>
            <div className="selectWrapper">
            <select id="communication" name="communication">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">Whatsapp</option>
              <option value="telegram">Telegram</option>
              <option value="wechat">WeChat</option>
            </select>
            <span className="selectIcon">&#9662;</span>
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="time">What is the best time to call you?</label>
            <input type="time" id="time" name="time" />
          </div>
          <div className="formGroup">
            <label htmlFor="captcha">2 + 4</label>
            <input type="text" id="captcha" name="captcha" placeholder="-" />
          </div>
          <div className="submitWrapper">
            <button type="submit" className="submitButton">Submit &rarr;</button>
          </div>
        </form>
      </div>
    );
};

export default SendMessage;