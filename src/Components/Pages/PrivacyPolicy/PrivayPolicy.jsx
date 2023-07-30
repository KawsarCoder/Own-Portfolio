import React from "react";
import PrivacyPolicy from "../../../../public/Images/PrivacyPolicy.png";

const PrivayPolicy = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center items-center">
      <div>
        <img src={PrivacyPolicy} alt="" />
      </div>
      <div>
        <h3 className="text-primary font-bold text-2xl mb-2">
          Privacy & Policy:
        </h3>
        <p className="text-justify max-w-[80%] text-gray-500">
          Welcome to my portfolio! Your privacy is of utmost importance to me.
          As MD Kawsar, the Web Developer behind this website, I am committed to
          protecting any personal information you may provide while visiting or
          interacting with my portfolio. Information Collection: I may collect
          basic personal data like name and email through contact forms or
          cookies for website analytics. Rest assured, I will never share this
          information without your explicit consent. Information Usage: Any data
          collected will be used solely for communication and portfolio
          improvement purposes. Data Security: I implement appropriate security
          measures to safeguard your information from unauthorized access or
          disclosure. Third-party Links: My portfolio may contain links to
          external websites. I am not responsible for their privacy practices.
          By using my portfolio, you agree to this Privacy Policy. If you have
          any concerns, feel free to contact me. Thank you for visiting!
        </p>
      </div>
    </section>
  );
};

export default PrivayPolicy;
