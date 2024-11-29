import PrivacyPolicy from "../../../../public/Images/PrivacyPolicy.png";

const PrivayPolicy = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center items-center mt-24">
      <div>
        <img src={PrivacyPolicy} alt="" />
      </div>
      <div>
        <h3 className="text-primary font-bold text-2xl mb-2">
          Privacy & Policy:
        </h3>
        <div className="text-justify max-w-[80%] text-gray-500">
          <p>
            Welcome to my portfolio! I am MD Kawsar, a Web Developer, and your
            privacy is my top priority. This Privacy Policy outlines how I
            collect, use, and protect your personal information while you
            interact with my portfolio website.
          </p>
          <h6 className="font-semibold">Information Collection:</h6>
          <p>
            To enhance your experience, I may collect personal information such
            as your name and email address through contact forms or website
            analytics tools (e.g., cookies). Rest assured, I will never share or
            sell your information without your explicit consent.
          </p>
          <h6 className="font-semibold">Information Usage:</h6>
          <p>
            The data I collect is used solely for the purposes of improving
            communication and optimizing my portfolio. It allows me to better
            understand your needs and provide you with relevant updates or
            information.
          </p>
          <h6 className="font-semibold">Data Security:</h6>
          <p>
            I take the security of your personal data seriously and implement
            appropriate technical measures to protect it from unauthorized
            access, alteration, or disclosure.
          </p>
          <h6 className="font-semibold">Third-Party Links:</h6>
          <p>
            My portfolio may include links to third-party websites. Please be
            aware that I am not responsible for the privacy practices or content
            of these external sites. I encourage you to review their privacy
            policies before sharing any personal information.
          </p>
          <span>
            By accessing and using my portfolio, you agree to the terms outlined
            in this Privacy Policy. If you have any questions or concerns
            regarding your privacy, feel free to contact me. Thank you for
            visiting!
          </span>
        </div>
      </div>
    </section>
  );
};

export default PrivayPolicy;
