import React from "react";
import { Link } from "react-router-dom";
import "./ErrorRoutes.css";
import ErrorImage from "../../../../public/Images/ErrorImage.png";

const ErrorRoutes = () => {
  return (
    <section className="grid h-[100vh] justify-items-center">
      <div className="grid grid-cols-2 items-center">
        <div class="">
          <h1 className="text-4xl font-bold m-0 text-[#333]">Page Not Found</h1>
          <p className="text-[1.5rem] text-[#777] mb-[2rem]">
            Oops! The page you're looking for doesn't exist.
          </p>
          <div
            class="w-[150px] h-[150px] my-10 bg-[#ff5555] rounded-[50%]"
            id="animationEffect"
          ></div>
        </div>
        <div>
          <img src={ErrorImage} alt="" />
        </div>
      </div>
      <Link
        to={"/"}
        className=" mt-[2rem] px-[2rem] pt-3 overflow-hidden md:mb-40 font-bold bg-gradient-to-r from-FourtColor hover:from-thirdColor to-thirdColor hover:to-FourtColor text-bgColor rounded-md ease-in-out hover:bg-[#ff3333]"
      >
        Go back to home
      </Link>
    </section>
  );
};

export default ErrorRoutes;
