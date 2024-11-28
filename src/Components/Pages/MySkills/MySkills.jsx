import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import skillJson from "../../../../public/skills.json";
import Aos from "aos";
import "./MySkills.css";

const MySkills = () => {
  Aos.init();
  return (
    // skill section
    <section
      data-aos="fade-up"
      className="grid justify-center mb-10 mt-20 md:mt-10"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl uppercase font-extrabold bg-style text-mainText">
          My Skills
        </h2>
      </div>
      {/* my skill section tab  */}
      <Tabs>
        <TabList
          className={
            "grid md:grid-cols-12 grid-cols-2 gap-5 font-bold text-primary"
          }
        >
          <Tab
            className={
              "bg-secondary border-2 hover:bg-gradient-to-r md:col-span-2 md:col-start-3 border-transparent focus:text-bgColor focus:border-2 focus:border-green-500 rounded-md text-center px-5 py-2 ml-4 focus:bg-gradient-to-r from-FourtColor to-thirdColor"
            }
          >
            All
          </Tab>
          <Tab
            className={
              "bg-secondary border-2 hover:bg-gradient-to-r md:col-span-2 border-transparent focus:text-bgColor focus:border-2 focus:border-green-500 rounded-md text-center px-5 py-2 ml-4 focus:bg-gradient-to-r from-FourtColor to-thirdColor"
            }
          >
            Front-end
          </Tab>
          <Tab
            className={
              "bg-secondary border-2 hover:bg-gradient-to-r md:col-span-2 border-transparent focus:text-bgColor focus:border-2 focus:border-green-500 rounded-md text-center px-5 py-2 ml-4 focus:bg-gradient-to-r from-FourtColor to-thirdColor"
            }
          >
            Backend
          </Tab>
          <Tab
            className={
              "bg-secondary border-2 hover:bg-gradient-to-r md:col-span-2 border-transparent focus:text-bgColor focus:border-2 focus:border-green-500 rounded-md text-center px-5 py-2 ml-4 focus:bg-gradient-to-r from-FourtColor to-thirdColor"
            }
          >
            Tools
          </Tab>
        </TabList>
        {/* all skill image  */}
        <TabPanel className={"flex justify-center mt-20"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-[65%]">
            {skillJson.map((skill) => (
              <div className="tooltip" key={skill}>
                <img
                  src={skill.img}
                  key={skill.img}
                  className="min-h-full p-7 shadow-lg rounded-2xl hover:border-8 hover:border-secondary hover:bg-gradient-to-r from-FourtColor to-thirdColor"
                />
                <span className="tooltiptext">
                  Experience Level: {skill.experienceLevel}
                </span>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* front-end tab image */}
        <TabPanel className={"flex justify-center"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-[65%]">
            {skillJson.map(
              (skill) =>
                skill.category === "Frontend" && (
                  <div className="tooltip" key={skill}>
                    <img
                      src={skill.img}
                      className="min-h-full p-7 shadow-lg rounded-2xl hover:border-8 hover:border-secondary hover:bg-gradient-to-r from-FourtColor to-thirdColor"
                    />
                    <span className="tooltiptext">
                      Experience Level: {skill.experienceLevel}
                    </span>
                  </div>
                )
            )}
          </div>
        </TabPanel>
        {/* Backend tab image  */}
        <TabPanel className={"flex justify-center"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-[65%]">
            {skillJson.map(
              (skill) =>
                skill.category === "Backend" && (
                  <div className="tooltip" key={skill}>
                    <img
                      src={skill.img}
                      className="min-h-full p-7 shadow-lg rounded-2xl hover:border-8 hover:border-secondary hover:bg-gradient-to-r from-FourtColor to-thirdColor"
                    />
                    <span className="tooltiptext">
                      Experience Level: {skill.experienceLevel}
                    </span>
                  </div>
                )
            )}
          </div>
        </TabPanel>
        {/* tools tab image  */}
        <TabPanel className={"flex justify-center"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-[65%]">
            {skillJson.map(
              (skill) =>
                skill.category === "Tools" && (
                  <div className="tooltip" key={skill}>
                    <img
                      src={skill.img}
                      className="min-h-full p-7 shadow-lg rounded-2xl hover:border-8 hover:border-secondary hover:bg-gradient-to-r from-FourtColor to-thirdColor"
                    />
                    <span className="tooltiptext">
                      Experience Level: {skill.experienceLevel}
                    </span>
                  </div>
                )
            )}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default MySkills;
