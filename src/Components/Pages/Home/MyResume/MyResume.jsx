/* eslint-disable react/no-unescaped-entities */
const MyResume = () => {
  return (
    <section>
      <h2 className="text-center font-extrabold text-4xl capitalize text-mainText mt-20 mb-10">
        Resume at a Glance
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-20">
        <div className="border-r-4 border-secondary pr-10">
          <div className="">
            <h3 className="text-2xl font-bold text-thirdColor dark:text-white">
              <span>
                <i className="fa-solid fa-graduation-cap mr-2 mb-5"></i>
              </span>{" "}
              Education Qualification:
            </h3>
            <ol className="relative dark:border-gray-700">
              <li className="mb-10 shadow-lg p-10 rounded-xl">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-bgColor mt-[20%] rounded-full -right-14 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
                    <i className="fa-solid fa-up-down-left-right  text-thirdColor text-xl"></i>
                  </div>
                </span>
                <div className="flex items-center mb-1 text-lg font-semibold text-primary dark:text-white justify-between">
                  <span> Diploma in Computer Technology</span>
                  <span className="bg-blue-100 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    09/21 - 12/24
                  </span>
                </div>
                <span className="block mb-2 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
                  Chattogram Polytechnic Institute
                </span>
                <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                  Chattogram Polytechnic Institute is a reputable technical
                  institute located in Chattogram, offering a diverse range of
                  diploma programs in engineering and technology fields.
                  Renowned for its quality education and skilled faculty, it
                  equips students with practical knowledge and hands-on
                  experience, preparing them for successful careers in the
                  industry.
                </p>
              </li>
              <li className="mb-10 shadow-lg p-10 rounded-xl bg-gradient-to-r from-FourtColor to-thirdColor">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-bgColor mt-[20%] rounded-full -right-14 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
                    <i className="fa-solid fa-up-down-left-right  text-thirdColor text-xl"></i>
                  </div>
                </span>
                <div className="mb-1 text-lg font-bold text-primary dark:text-white flex justify-between">
                  <span>Full Stack Web Development Course</span>
                  <span className="bg-blue-200 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    02/22 - 10/24
                  </span>
                </div>
                <span className="block mb-2 text-sm font-bold leading-none text-gray-300 dark:text-gray-500">
                  Programming Hero
                </span>
                <p className="text-base font-normal text-bgColor mt-2 dark:text-gray-400 text-justify">
                  Completed Full Web Development Course at Programming Hero, a
                  renowned well-known company in Bangladesh. Gained expertise in
                  programming languages, web development, and web app creation.
                  Highly interactive and beginner-friendly platform that
                  equipped me with essential skills for a successful career in
                  web development.
                </p>
              </li>
              {/* <li className="shadow-lg p-10 rounded-xl">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-bgColor mt-[20%] rounded-full -right-14 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
                    <i className="fa-solid fa-turn-down text-thirdColor text-xl rotate-90"></i>
                  </div>
                </span>
                <div className="mb-1 text-lg font-semibold text-gray-900 dark:text-white flex justify-between">
                  <span>Full Stack Web Development Course</span>
                  <span className="bg-blue-100 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    2022 - 2024
                  </span>
                </div>
                <span className="block mb-2 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
                  Programming Hero
                </span>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                  Completed Full Web Development Course at Programming Hero, a
                  renowned well-known company in Bangladesh. Gained expertise in
                  programming languages, web development, and web app creation.
                  Highly interactive and beginner-friendly platform that
                  equipped me with essential skills for a successful career in
                  web development.
                </p>
              </li> */}
            </ol>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-thirdColor dark:text-white flex ml-10">
            <span>
              <i className="fa-solid fa-briefcase  mr-2 mb-5"></i>
            </span>{" "}
            Working Experience:
          </h3>
          <div className="">
            <ol className="relative ml-8">
              <li className="mb-10 shadow-lg p-10 rounded-xl bg-gradient-to-r from-FourtColor to-thirdColor">
                <div className="mb-1 text-lg font-bold text-primary dark:text-white flex justify-between">
                  <span>MERN Stack Developer</span>
                  <span className="bg-blue-200 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    02/22 - Present
                  </span>
                </div>
                <span className="block mb-2 text-sm font-bold leading-none text-gray-300 dark:text-gray-500">
                  Codex Devware
                </span>
                <p className="text-base font-normal text-bgColor mt-2 dark:text-gray-400 text-justify">
                  I am the General Secretary of Codex Devware, a software
                  development company and training institute based in
                  Chittagong, Bangladesh.We specialize in developing web
                  applications and mobile apps. We have a team of experienced
                  developers who are committed to delivering high-quality
                  products that meet the needs of our clients. We also offer
                  training courses on a variety of topics, including web
                  development, mobile development, and data science.
                </p>
              </li>
              <li className="mb-10 shadow-lg p-10 rounded-xl">
                <div className="mb-1 text-lg font-semibold text-primary dark:text-white flex justify-between">
                  <span>Campus Ambassador</span>
                  <span className="bg-blue-200 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    02/24 - 12/24
                  </span>
                </div>
                <span className="block mb-2 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
                  Programming Hero
                </span>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                  Programming Hero is revolutionizing digital learning with a
                  personalized, immersive approach. Guided by the slogan "Let's
                  code your career!", we specialize in web development and
                  software engineering, helping learners go from zero experience
                  to junior developer roles. Our graduates thrive in top local
                  tech companies and global startups.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
