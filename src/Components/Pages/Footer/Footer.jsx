import logoImage from "../../../../public/Images/Logo.png";
import Resume from "../../../../public/Images/WebDeveloper.pdf";
import Certificate from "../../../../public/Images/WebCertificate.pdf";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleDownload = () => {
    const fileUrl = Resume;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "MD-Kawsar-Resume.pdf";
    anchor.click();
  };
  const handleCertificate = () => {
    const fileUrl = Certificate;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "Web-Development-Certificate.pdf";
    anchor.click();
  };
  return (
    <section className="mt-20 w-[100%]">
      <div>
        <footer className="bg-gradient-to-r from-FourtColor to-thirdColor dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 grid justify-items-center">
                <a href="/" className="">
                  <img
                    src={logoImage}
                    className="h-20 mx-auto self-center"
                    alt="MD Kawsar"
                  />
                  <span className="self-center text-2xl text-primary font-semibold whitespace-nowrap dark:text-white">
                    MD Kawsar
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">
                    Documents
                  </h2>
                  <ul className="text-bgColor dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <button
                        className="hover:underline"
                        onClick={handleCertificate}
                      >
                        Web Development
                      </button>
                    </li>
                    <li>
                      <button
                        className="hover:underline"
                        onClick={handleDownload}
                      >
                        Resume
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">
                    Follow Me
                  </h2>
                  <ul className="text-bgColor dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/kawsarcoder"
                        target="_blank"
                        className="hover:underline "
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mdkawsar1403/"
                        target="_blank"
                        className="hover:underline"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-bgColor dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link to={"PrivacyPoliciy"} className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to={"TermsConditions"} className="hover:underline">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-primary sm:text-center dark:text-gray-400">
                © 2025{" "}
                <a
                  href="https://www.linkedin.com/in/mdkawsar1403/"
                  target="_blank"
                  className="hover:underline"
                  rel="noreferrer"
                >
                  MD Kawsar
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                {/* facebook icon  */}
                <a
                  href="https://web.facebook.com/mohammod.kawsar.946/"
                  target="_blank"
                  className="border-primary border-2 rounded-full  w-[30px] h-[30px] px-1.5 py-0.5 hover:bg-gradient-to-r from-FourtColor to-secondary"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands text-md text-primary fa-facebook"></i>
                  </span>
                </a>

                {/* instagram icon  */}
                <a
                  href="https://www.instagram.com/code.with.kawsar/"
                  target="_blank"
                  className="border-primary border-2 rounded-full  w-[30px] h-[30px] px-1.5 py-0.5 hover:bg-gradient-to-r from-FourtColor to-secondary"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands text-md text-primary fa-instagram"></i>
                  </span>
                </a>

                {/* github icon  */}
                <a
                  href="https://github.com/kawsarcoder"
                  target="_blank"
                  className="border-primary border-2 rounded-full  w-[30px] h-[30px] px-1.5 py-0.5 hover:bg-gradient-to-r from-FourtColor to-secondary"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands text-md text-primary fa-github"></i>
                  </span>
                </a>

                {/* linkedIn Icon  */}
                <a
                  href="https://www.linkedin.com/in/mdkawsar1403/"
                  target="_blank"
                  className="border-primary border-2 rounded-full  w-[30px] h-[30px] px-2 py-0.5 hover:bg-gradient-to-r from-FourtColor to-secondary"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands text-md text-primary fa-linkedin-in"></i>
                  </span>
                </a>
                {/* Discord Icon  */}
                <a
                  href="https://discord.com/channels/@md.kawsar"
                  target="_blank"
                  className="border-primary border-2 rounded-full  w-[30px] h-[30px] px-1 py-0.5 hover:bg-gradient-to-r from-FourtColor to-secondary"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands text-md text-primary fa-discord"></i>
                  </span>
                </a>
                {/* Youtube Icon  */}
                <a
                  href="https://youtube.com/@code.with.kawsar"
                  target="_blank"
                  className="border-primary border-2 rounded-full  w-[30px] h-[30px] px-1 py-0.5 hover:bg-gradient-to-r from-FourtColor to-secondary"
                  rel="noreferrer"
                >
                  <span>
                    <i className="fa-brands text-md text-primary fa-youtube"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
