const MyServices = () => {
  return (
    // service section
    <section data-aos="fade-up" className="max-w-[1140px] grid mx-auto mb-10">
      <div>
        <h2 className="text-center uppercase font-extrabold text-4xl text-mainText mt-20 mb-10">
          My Services
        </h2>
      </div>
      {/* service content wrapper  */}
      <div className="flex justify-center">
        <ol className="items-center sm:flex">
          {/* web design  */}
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center mx-auto justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
                <i className="fa-solid fa-wand-magic-sparkles mx-auto text-FourtColor text-lg"></i>
              </div>
              <div className="hidden sm:flex w-full bg-gradient-to-r from-FourtColor to-thirdColor h-1 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8 shadow-inner p-5 rounded-lg text-gray-500 hover:bg-gradient-to-r from-FourtColor to-thirdColor hover:text-bgColor">
              <h3 className="text-lg font-semibold text-primary dark:text-white">
                Web Designer
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Experience 2y+
              </time>
              <p className="text-base font-normal dark:text-gray-400 text-justify">
                Web design encompasses the art of crafting a websites appearance
                and user experience. It involves meticulous planning and
                execution, combining elements like layout, images, colors,
                fonts, and graphics to create a visually appealing and engaging
                online environment.
              </p>
            </div>
          </li>
          {/* web development  */}
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex mx-auto items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
                <i className="fa-solid fa-code text-thirdColor text-lg"></i>
              </div>
              <div className="hidden sm:flex w-full bg-gradient-to-r from-thirdColor to-secondary h-1 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8 shadow-lg p-5 rounded-lg text-gray-500 hover:bg-gradient-to-r from-thirdColor to-FourtColor hover:text-bgColor">
              <h3 className="text-lg font-semibold text-primary dark:text-white">
                Web Developer
              </h3>
              <time className="block mb-2 text-sm font-normal text-gray-400 leading-none dark:text-gray-300 hover:text-white">
                Experience 3y+
              </time>
              <p className="text-base font-normal hover:text-bgColor dark:text-gray-400 text-justify">
                Web development entails creating websites for the Internet or
                private networks. It spans from basic static pages to intricate
                web applications. Developers work diligently to construct
                functional and user-friendly online platforms that cater to a
                wide array of needs and purposes.
              </p>
            </div>
          </li>
          {/* bug fixing  */}
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center mx-auto justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
                <i className="fa-solid fa-bug-slash text-FourtColor text-lg"></i>
              </div>
              <div className="hidden sm:flex w-full bg-gradient-to-r from-secondary to-FourtColor h-1 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8 shadow-inner p-5 rounded-lg text-gray-500 hover:bg-gradient-to-r from-FourtColor to-thirdColor hover:text-bgColor">
              <h3 className="text-lg font-semibold text-primary dark:text-white">
                Ads & SEO
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Experience 1y+
              </time>
              <p className="text-base font-normal dark:text-gray-400 text-justify">
                Ads and SEO are vital components of digital marketing, focusing
                on boosting visibility and driving traffic to websites or
                platforms. Ads involve creating and running targeted campaigns
                to reach the right audience, while SEO ensures that your content
                ranks high in search engine results, attracting organic
                visitors.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default MyServices;
