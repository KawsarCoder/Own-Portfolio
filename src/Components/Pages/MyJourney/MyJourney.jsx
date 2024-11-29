const MyJourney = () => {
  const JourneyInfo = [
    {
      id: "1",
      name: "Campus Ambassador at Programming Hero",
      date: "02/24 - 12/24",
      details: `Programming Hero is revolutionizing digital learning with a personalized, immersive approach. Guided by the slogan "Let's code your career!", we specialize in web development and software engineering, helping learners go from zero experience to junior developer roles. Our graduates thrive in top local tech companies and global startups.`,
    },
    {
      id: "2",
      name: "MERN Stack Developer at Codex Devware",
      date: "02/22 - Present",
      details:
        "Codex Devware is a trailblazing IT company founded in 2022, dedicated to driving innovation in the tech industry. With a vision to achieve a Digital Bangladesh and spearhead technological progress, the organization strives to shape a brighter, tech-enabled future. Join us in creating extraordinary solutions together!",
    },
    {
      id: "3",
      name: "Member of YSDI",
      date: "12/23 - Present",
      details:
        "Youth Skill Development Trust is a youth-focused organization dedicated to empowering young people nationwide through career development. It offers workshops, training, and mentorship to bridge the gap between education and employment, preparing youth for a successful future.",
    },
  ];
  return (
    <section className="mt-16">
      <h3 className="text-center capitalize font-extrabold text-4xl text-mainText mt-20 mb-10">
        Career Milestones
      </h3>
      {JourneyInfo.map((info) => (
        <ol
          key={info.id}
          className="relative border-s border-thirdColor dark:border-FourtColor"
        >
          <li className=" ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {info.name}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {info.date}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 pb-10">
              {info.details}
            </p>
          </li>
        </ol>
      ))}
    </section>
  );
};

export default MyJourney;
