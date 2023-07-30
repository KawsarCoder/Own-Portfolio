import React from "react";
import Typewriter from "typewriter-effect";
import mainImage from "../../../../public/Images/mainImage.png";

const Header = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 mt-10">
      {/* top head text container  */}
      <div
        data-aos="fade-down"
        className="p-8 rounded-tl-[60px] rounded-br-[60px]"
      >
        <h2 className="text-primary text-2xl font-bold ">
          <span className="text-primary">Hello!</span> &#128075;{" "}
          <span className="">Welcome to my site</span>
        </h2>
        {/* My name  */}
        <h1 className="text-xl font-bold text-primary my-2">
          It's Me,{" "}
          <span className="text-FourtColor md:text-4xl text-3xl">
            Md. Kawsar
          </span>
        </h1>
        <div className="text-primary md:text-xl text-md lg:space-y-[-8px] font-bold flex">
          {/* typewriter style  */}
          <span className="md:mr-5 mr-1">A pasionate,</span>
          <div className="primary-gradiant lg:text-3xl text-md font-bold">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "MERN Stack Developer",
                  "ReactJS Developer",
                  "Front-End Developer",
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </div>
        </div>
        <div className="mt-5 text-justify text-gray-500">
          <p>
            Passionate Web Developer with expertise in building modern &
            scalable web applications. Dedicated to delivering high-quality code
            & always eager to learn.
          </p>
        </div>
        <div>
          <button className="mt-5 mb-10 font-bold text-md border-primary btn-style hover:bg-gradient-to-r from-FourtColor to-green-400 hover:text-white rounded-md flex text-primary">
            <a
              className="px-4 py-3"
              href="https://www.linkedin.com/in/mdkawsar1403/"
              target="_blank"
            >
              <span className="ml-3">
                <i className="fa-solid fa-user-tie mr-3"></i>
              </span>
              HIRE ME{" "}
            </a>
          </button>
          <span className="text-thirdColor font-bold md:text-3xl text-2xl">
            Let's Follow Here :
          </span>
          <div className="py-4 mt-5 font-bold w-[60%] border-primary btn-style rounded-md flex text-primary justify-evenly">
            {/* facebook icon  */}
            <a
              href="https://web.facebook.com/mohammod.kawsar.946/"
              target="_blank"
              className="border-primary border-2 rounded-full  w-[40px] h-[40px] px-1.5 py-0.5 hover:bg-gradient-to-r from-FourtColor to-green-400"
            >
              <span>
                <i className="fa-brands text-2xl text-primary fa-facebook"></i>
              </span>
            </a>

            {/* instagram icon  */}
            <a
              href="https://www.instagram.com/developer.kawsar/"
              target="_blank"
              className="border-primary border-2 rounded-full  w-[40px] h-[40px] px-2 py-0.5 hover:bg-gradient-to-r from-FourtColor to-green-400"
            >
              <span>
                <i className="fa-brands text-2xl text-primary fa-instagram"></i>
              </span>
            </a>

            {/* github icon  */}
            <a
              href="https://github.com/kawsarcoder"
              target="_blank"
              className="border-primary border-2 rounded-full  w-[40px] h-[40px] px-1.5 py-0.5 hover:bg-gradient-to-r from-FourtColor to-green-400"
            >
              <span>
                <i className="fa-brands text-2xl text-primary fa-github"></i>
              </span>
            </a>

            {/* linkedIn Icon  */}
            <a
              href="https://www.linkedin.com/in/mdkawsar1403/"
              target="_blank"
              className="border-primary border-2 rounded-full  w-[40px] h-[40px] px-2 py-0.5 hover:bg-gradient-to-r from-FourtColor to-green-400"
            >
              <span>
                <i className="fa-brands text-2xl text-primary fa-linkedin-in"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* top head image container  */}
      <div
        data-aos="fade-up"
        className="main-image grid justify-center relative"
      >
        <img src={mainImage} alt="" className="" />
      </div>
    </section>
  );
};

export default Header;
