import metaTubeImg from "../../../../public/Images/metaTubeImg.png";
import docProImg from "../../../../public/Images/docProImg.png";
import metaLearnImg from "../../../../public/Images/metaLernImg.png";
import carMerchantryImg from "../../../../public/Images/carMerchantryImg.png";
import "./MyProject";

const MyProject = () => {
  const projectData = [
    {
      id: "1",
      animatation: "flip-left",
      imgUrl: docProImg,
      liveLink: "https://docpro-app.vercel.app/",
      clientLink: "https://github.com/KawsarCoder/DocPro-App",
      serverLink: "https://github.com/KawsarCoder/DocPro-APP-Backend",
      projectName: "DocPro App",
      details:
        "Book appointments with top doctors, specialists, and healthcare providers near you. Manage your health with ease - anytime.",
      technology: [
        "NextJs",
        "Tailwind",
        "Radix UI",
        "ShadCN UI",
        "Kende",
        "Strapi",
        "Axios",
        "Vercel",
        "Node.js",
        "Render",
        "Cloudinary",
      ],
    },
    {
      id: "2",
      animatation: "flip-right",
      imgUrl: metaTubeImg,
      liveLink: "https://meta-tube-c8397.web.app/",
      clientLink: "https://github.com/KawsarCoder/Meta-Tube-Client-Side",
      serverLink: "https://github.com/KawsarCoder/Meta-Tube-server-Side",
      projectName: "Meta Tube",
      details:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      technology: [
        "CSS",
        "React",
        "Tailwind",
        "Flowbit",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
        "React-Toostify",
        "Daisy UI",
        "Vercel",
      ],
    },
    {
      id: "3",
      animatation: "flip-left",
      imgUrl: metaLearnImg,
      liveLink: "https://meta-learn-5c198.web.app/",
      clientLink: "https://github.com/KawsarCoder/Meta-Learn-Client-Side",
      serverLink: "https://github.com/KawsarCoder/Meta-Learn-server-Side",
      projectName: "Meta Learn",
      details:
        " We are provide best programming course for ever, if you want to join please visit course.",
      technology: [
        "CSS",
        "React",
        "Tailwind",
        "Flowbit",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
    },
    {
      id: "4",
      animatation: "flip-right",
      imgUrl: carMerchantryImg,
      liveLink: "https://car-merchantry.web.app/",
      clientLink: "https://github.com/KawsarCoder/Car-Merchantry-Client-Side",
      serverLink: "https://github.com/KawsarCoder/Meta-Learn-server-Side",
      projectName: "Car Merchantry",
      details:
        "Exclusive cars available here. We Provides service all over the world.",
      technology: [
        "CSS",
        "React",
        "Tailwind",
        "Flowbit",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
    },
  ];
  return (
    // project section
    <section className="max-w-[1140px] grid mx-auto mb-20">
      <h2 className="text-center capitalize font-extrabold text-4xl text-mainText mt-20 mb-10">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div> Things I've Worked On</div>
      </h2>
      {/* projects content  */}
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-5">
        {projectData.map((data) => (
          <div key={data?.id}>
            {/* Project container  */}
            <div
              data-aos={data.animatation}
              className="grid gap-5 overflow-hidden  md:grid-cols-3 grid-cols-1 justify-items-center items-center border-4 shadow-lg border-FourtColor rounded-lg md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {/* Project image  */}
              <div className="ml-10 border-4 rounded-lg w-full ">
                <img src={data?.imgUrl} alt="Scrolling Image" />
              </div>
              {/* Project details  */}
              <div className="flex lg:ml-2 flex-col md:col-span-2 justify-between p-4 leading-normal">
                <div className="grid grid-cols-3 gap-2">
                  <a href={data.liveLink} target="_blank" rel="noreferrer">
                    <button className="relative inline-flex shadow-md items-center justify-center p-1 mb-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span className="relative px-4 text-sm py-1 transition-all ease-in duration-75 bg-bgColor dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live Link
                      </span>
                    </button>
                  </a>
                  <a href={data.clientLink} target="_blank" rel="noreferrer">
                    <button className="relative inline-flex shadow-md items-center justify-center p-1 mb-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                      <span className="relative px-1 text-sm py-1 transition-all ease-in duration-75 bg-bgColor dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Client Repo
                      </span>
                    </button>
                  </a>
                  <a href={data.serverLink} target="_blank" rel="noreferrer">
                    <button className="relative inline-flex shadow-md items-center justify-center p-1 mb-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span className="relative px-1 text-sm py-1 transition-all ease-in duration-75 bg-bgColor dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Server Repo
                      </span>
                    </button>
                  </a>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
                  {data.projectName}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.details}
                </p>
                <div>
                  <h5 className="font-bold text-xl text-thirdColor">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2 text-primary">
                    {data?.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="shadow-lg p-3 font-bold rounded-full hover:bg-gradient-to-r from-FourtColor to-thirdColor hover:text-bgColor"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* github button wrapper */}
      <div className="grid justify-center">
        <button
          type="button"
          className="text-white mt-12 bg-gradient-to-r from-FourtColor hover:from-thirdColor to-thirdColor hover:to-FourtColor focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <a
            href="https://github.com/kawsarcoder"
            className="flex font-bold items-center"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            See More Project on Github
          </a>
        </button>
      </div>
    </section>
  );
};

export default MyProject;
