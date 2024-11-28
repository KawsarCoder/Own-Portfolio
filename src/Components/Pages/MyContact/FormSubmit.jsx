import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSubmit = () => {
  // const [error, setError] = useState("");
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    <form
      onSubmit={handleSubmit}
      className="shadow-md grid grid-cols-1 gap-5 p-10 rounded-lg bg-gradient-to-r from-FourtColor to-thirdColor"
    >
      <h5 className="text-primary text-lg font-bold -mb-3">Name</h5>
      <input
        type="text"
        name="name"
        required
        className="rounded-lg border-secondary bg-bgColor"
        placeholder="Write your name"
        value={formData.name}
        onChange={handleChange}
      />
      <h5 className="text-primary text-lg font-bold -mb-3">Email</h5>
      <input
        type="email"
        className="rounded-lg border-secondary bg-bgColor"
        name="email"
        required
        placeholder="Write your email "
        value={formData.email}
        onChange={handleChange}
      />
      <h5 className="text-primary text-lg font-bold -mb-3">Phone Number </h5>
      <input
        type="tel"
        name="phone"
        className="rounded-lg border-secondary bg-bgColor"
        placeholder="Write your phone number"
        value={formData.phone}
        onChange={handleChange}
      />
      <h5 className="text-primary text-lg font-bold -mb-3">Message Subject</h5>

      <input
        type="text"
        name="subject"
        required
        className="rounded-lg border-secondary bg-bgColor"
        placeholder="Write message subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <h5 className="text-primary text-lg font-bold -mb-3">Your message</h5>
      <textarea
        name="message"
        required
        className="rounded-lg border-secondary bg-bgColor"
        placeholder="Write your Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button
        className="md:px-4 text-center justify-center mx-auto bg-bgColor shadow-lg px-3 w-48 uppercase md:py-3 py-2 md:mt-5 font-bold text-md border-primary btn-style hover:bg-gradient-to-r from-FourtColor to-green-400 hover:text-white rounded-md flex text-primary"
        type="submit"
        onClick={notify}
      >
        Submit
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </form>
  );
};

export default FormSubmit;
