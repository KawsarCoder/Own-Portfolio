import { useEffect } from "react";
import "./Home.css";
import AboutMe from "../AboutMe/AboutMe";
import MySkills from "../MySkills/MySkills";
import MyServices from "../MyServices/MyServices";
import MyProject from "../MyProject/MyProject";
// import MyBlog from "../MyBlog/MyBlog";
import MyContact from "../MyContact/MyContact";
import Header from "../Header.jsx/Header";
import Aos from "aos";
import "aos/dist/aos.css";
// import MyJourney from "../MyJourney/MyJourney";
import MyResume from "./MyResume/MyResume";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    // Top section
    <section className="max-w-[1200px] grid mx-auto">
      <Header />
      <AboutMe />
      <MySkills />
      {/* <MyJourney /> */}
      <MyResume />
      <MyServices />
      <MyProject />
      {/* Testimonial pending  */}
      {/* <MyBlog /> */}
      <MyContact />
    </section>
  );
};

export default Home;
