import secondImage from "../../../../public/Images/SecondImage.png";
import Resume from "../../../../public/Images/WebDeveloper.pdf";
import NumberCounter from "./NumberCounter/NumberCounter";

const AboutMe = () => {
  const handleDownload = () => {
    const fileUrl = Resume;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "MD-Kawsar-Resume.pdf";
    anchor.click();
  };
  return (
    // about section
    <section className="max-w-[1140px] grid mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 items-center md:flex-row">
        {/* my about image  */}
        <div data-aos="fade-right" className="hidden lg:grid justify-center">
          <img
            className="object-cover justify-center rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={secondImage}
            alt=""
          />
        </div>
        {/* my about text  */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-4xl md:text-left text-center font-extrabold uppercase text-mainText tracking-tight dark:text-white">
            About Me
          </h5>
          {/* about me text  */}
          <p className="mb-3 font-normal text-gray-500 text-justify dark:text-gray-400">
            Hello, I am MD Kawsar, a passionate Web Developer with a focus on
            Full Stack development. Currently pursuing a diploma in Computer
            Technology at Chattogram Polytechnic Institute, I thrive on turning
            innovative ideas into fully functional and visually appealing
            websites and web applications. My journey in the world of
            programming has been an exciting one, and I constantly seek new
            challenges to expand my skill set. With a strong foundation in the
            Full Stack and a drive for continuous learning, I am dedicated to
            creating seamless user experiences and contributing to the
            ever-evolving digital landscape.
          </p>
          {/* download cv button  */}
          <button
            className="md:px-4 text-center px-3 w-48 uppercase md:py-3 py-2 md:mt-5 mb-10 font-bold text-md border-primary btn-style hover:bg-gradient-to-r from-FourtColor to-green-400 hover:text-white rounded-md flex text-primary"
            onClick={handleDownload}
          >
            Download CV{" "}
            <span className="ml-3">
              <i className="fa-solid fa-download"></i>
            </span>
          </button>
          {/* title list  */}
          <div className="mb-10">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 justify-items-center text-primary">
              <div>
                <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
                  <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
                    <i className="fa-solid fa-clipboard-check text-2xl"></i>
                    <NumberCounter maxNumber={58} />
                  </div>
                </div>
                <span className="font-extrabold justify-center grid text-center mt-5 text-sm">
                  Project Completed
                </span>
              </div>

              <div>
                <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
                  <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
                    <i className="fa-solid fa-road-circle-check text-2xl"></i>
                    <NumberCounter maxNumber={3} />
                  </div>
                </div>
                <span className="font-bold justify-center grid text-center  mt-5 text-md">
                  Year Of Journey
                </span>
              </div>

              <div>
                <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
                  <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
                    <i className="fa-solid fa-user text-2xl"></i>
                    <NumberCounter maxNumber={16} />
                  </div>
                </div>
                <span className="font-bold justify-center grid text-center  mt-5 text-md">
                  Happy Client
                </span>
              </div>

              <div>
                <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
                  <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
                    <i className="fa-solid fa-clock text-2xl"></i>
                    <NumberCounter maxNumber={12} />
                  </div>
                </div>
                <span className="font-bold justify-center grid text-center  mt-5 text-md">
                  Daily Work (h)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
