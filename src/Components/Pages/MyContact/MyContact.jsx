import ContactImage from "../../../../public/Images/ContactImage.png";
import FormSubmit from "./FormSubmit";

const MyContact = () => {
  return (
    // contact container
    <section data-aos="fade-up" className="max-w-[1140px] grid mx-auto">
      <h2 className="text-center font-extrabold text-4xl uppercase text-mainText mt-20 mb-10">
        Contact Me
      </h2>
      {/* contact content  */}
      <div className="grid md:grid-cols-2 grid-cols-1 mb-20">
        {/* contact image  */}
        <div>
          {" "}
          <img src={ContactImage} alt="" />
        </div>
        {/* contact form  */}
        <FormSubmit />
      </div>
    </section>
  );
};

export default MyContact;
