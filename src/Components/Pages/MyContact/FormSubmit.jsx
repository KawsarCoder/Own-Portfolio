/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const FormSubmit = () => {
  // const [error, setError] = useState("");
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };
  const notify = (success) => {
    if (success === "success") {
      toast.success("😊 Message Send Successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (success === "error") {
      toast.error("🥺 Message Send unsuccessful!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const userID = import.meta.env.VITE_USER_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    // Send the form data via EmailJS
    emailjs
      .send(serviceID, templateId, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        notify("success");
        setFormData(initialFormData); // Clear the form data
      })
      .catch((error) => {
        notify("error");
        console.error("Error sending email:", error);
      });
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="shadow-md grid grid-cols-1 gap-5 p-10 rounded-lg bg-gradient-to-r from-FourtColor to-thirdColor"
    // >
    //   <h5 className="text-primary text-lg font-bold -mb-3">Name</h5>
    //   <input
    //     type="text"
    //     name="name"
    //     required
    //     className="rounded-lg border-secondary bg-bgColor"
    //     placeholder="Write your name"
    //     value={formData.name}
    //     onChange={handleChange}
    //   />
    //   <h5 className="text-primary text-lg font-bold -mb-3">Email</h5>
    //   <input
    //     type="email"
    //     className="rounded-lg border-secondary bg-bgColor"
    //     name="email"
    //     required
    //     placeholder="Write your email "
    //     value={formData.email}
    //     onChange={handleChange}
    //   />
    //   <h5 className="text-primary text-lg font-bold -mb-3">Phone Number </h5>
    //   <input
    //     type="tel"
    //     name="phone"
    //     className="rounded-lg border-secondary bg-bgColor"
    //     placeholder="Write your phone number"
    //     value={formData.phone}
    //     onChange={handleChange}
    //   />
    //   <h5 className="text-primary text-lg font-bold -mb-3">Message Subject</h5>

    //   <input
    //     type="text"
    //     name="subject"
    //     required
    //     className="rounded-lg border-secondary bg-bgColor"
    //     placeholder="Write message subject"
    //     value={formData.subject}
    //     onChange={handleChange}
    //   />
    //   <h5 className="text-primary text-lg font-bold -mb-3">Your message</h5>
    //   <textarea
    //     name="message"
    //     required
    //     className="rounded-lg border-secondary bg-bgColor"
    //     placeholder="Write your Message"
    //     value={formData.message}
    //     onChange={handleChange}
    //   ></textarea>
    //   <button
    //     className="md:px-4 text-center justify-center mx-auto bg-bgColor shadow-lg px-3 w-48 uppercase md:py-3 py-2 md:mt-5 font-bold text-md border-primary btn-style hover:bg-gradient-to-r from-FourtColor to-green-400 hover:text-white rounded-md flex text-primary"
    //     type="submit"
    //     onClick={notify}
    //   >
    //     Submit
    //   </button>
    //   <ToastContainer
    //     position="bottom-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="colored"
    //   />
    // </form>
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-['Space_Grotesk'] text-white mb-2"
          >
            Name
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className="w-full bg-[#160427] border border-[#9909CD]/30 rounded-md p-3 text-white focus:border-[#9909CD] focus:outline-none focus:ring-1 focus:ring-[#9909CD] transition-colors"
            placeholder="Your name"
            whileFocus={{ y: -2 }}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-['Space_Grotesk'] text-white mb-2"
          >
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className="w-full bg-[#160427] border border-[#9909CD]/30 rounded-md p-3 text-white focus:border-[#9909CD] focus:outline-none focus:ring-1 focus:ring-[#9909CD] transition-colors"
            placeholder="your.email@example.com"
            whileFocus={{ y: -2 }}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-['Space_Grotesk'] text-white mb-2"
          >
            Message
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            rows={5}
            className="w-full bg-[#160427] border border-[#9909CD]/30 rounded-md p-3 text-white focus:border-[#9909CD] focus:outline-none focus:ring-1 focus:ring-[#9909CD] transition-colors resize-none"
            placeholder="Write your message here..."
            whileFocus={{ y: -2 }}
            disabled={isSubmitting}
          />
        </div>

        <motion.button
          type="submit"
          className={`w-full px-6 py-3 bg-[#9909CD] text-white font-['Space_Grotesk'] font-medium rounded-md hover:bg-[#8008af] transition-colors ${
            isSubmitting ? "opacity-70" : ""
          }`}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  );
};

export default FormSubmit;
