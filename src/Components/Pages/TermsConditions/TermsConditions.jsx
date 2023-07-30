import React from "react";
import TermsConditionsImg from "../../../../public/Images/TermConditions.png";

const TermsConditions = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center mt-20">
      <div>
        <img src={TermsConditionsImg} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-primary">
          Terms and Conditions:{" "}
        </h3>
        <p className="text-gray-600">
          Welcome to my portfolio! By accessing and using this website, you
          agree to comply with the following terms and conditions:
          <br />
          <br />
          <b>1. Content Ownership:</b> All content on this website, including
          text, images, and code, is owned by MD Kawsar and protected by
          copyright laws. Unauthorized use or reproduction is prohibited. <br />{" "}
          <br />
          <b> 2. Use of Information:</b> Any personal information you provide,
          such as your name and email, will be used for communication purposes
          only. I will not share this data without your explicit consent.
          <br /> <br />
          <b> 3. Accuracy of Information:</b> While I strive to keep the content
          on this portfolio accurate and up-to-date, I make no warranties or
          representations regarding the completeness or accuracy of the
          information provided. <br /> <br />
          <b>4. Third-party Links:</b> My portfolio may contain links to
          external websites for your convenience. However, I am not responsible
          for the content or practices of those sites. <br /> <br />
          <b>5. Website Availability: </b>I aim to maintain continuous access to
          my portfolio. However, I am not liable for any temporary
          unavailability due to technical issues beyond my control. <br />{" "}
          <br />
          <b>6. Cookies:</b>
          This website may use cookies for analytics purposes. You can adjust
          your browser settings to disable cookies if desired. <br />
          <br />
          <b>7. Limitation of Liability: </b> I am not liable for any damages or
          losses resulting from the use of this website or the information
          provided herein. <br /> <br />
          <b>8. Changes to Terms:</b> I reserve the right to modify or update
          these terms and conditions at any time. Please check this page
          periodically for any changes. <br />
          <br /> By using my portfolio, you agree to adhere to these terms and
          conditions. If you have any questions or concerns, please feel free to
          contact me. Thank you for visiting!
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;
