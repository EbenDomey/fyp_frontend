import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-8 w-full text-base max-md:max-w-full"
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col justify-center w-full rounded-lg max-md:max-w-full">
          <label
            htmlFor="personnelId"
            className="leading-none text-[color(display-p3_0.0667_0.0667_0.0667)] max-md:max-w-full"
          >
            Personnel ID
          </label>
          <div className="flex flex-col justify-center mt-2 w-full leading-relaxed rounded-md text-[color(display-p3_0.549_0.5882_0.6471)] max-md:max-w-full focus-within:outline focus:outline-4 focus-within:outline-[#1e3a8a]">
            <input
              type="text"
              id="personnelId"
              placeholder="FJRBIQuUrh"
              className="overflow-hidden gap-2.5 self-stretch px-4 py-5 w-full rounded-md border border-solid border-[color(display-p3_0.9451_0.9608_0.9765)] max-md:max-w-full outline-none"
              required
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-7 w-full rounded-lg max-md:max-w-full">
          <label
            htmlFor="password"
            className="leading-none text-[color(display-p3_0.0667_0.0667_0.0667)] max-md:max-w-full"
          >
            Password
          </label>
          <div className="flex flex-col justify-center mt-2 w-full leading-relaxed text-[color(display-p3_0.549_0.5882_0.6471)] max-md:max-w-full">
            <div className="flex flex-row gap-5 items-center border border-solid border-[color(display-p3_0.9451_0.9608_0.9765)] focus-within:outline focus:outline-5 focus-within:outline-[#1e3a8a] rounded-md">
              {visiblePassword ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  size="1.9x"
                  style={{
                    color: "color(display-p3 0.549 0.5882 0.6471)",
                    padding: "5px",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => setVisiblePassword(!visiblePassword)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  size="1.9x"
                  style={{
                    color: "color(display-p3 0.549 0.5882 0.6471)",
                    padding: "5px",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => setVisiblePassword(!visiblePassword)}
                />
              )}
              <input
                type={!visiblePassword ? "password" : "text"}
                id="password"
                placeholder="Enter password"
                className="overflow-hidden self-stretch pr-4 py-5 w-full max-md:max-w-full outline-none"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex flex-col justify-center items-center mt-7 w-full leading-loose whitespace-nowrap rounded-lg min-h-[45px] text-[color(display-p3_1_1_1)] max-md:max-w-full bg-custom-gradient-to-right"
        >
          <div className="gap-3 self-stretch px-6 py-4 rounded-md min-h-[42px] max-md:px-5  hover:bg-[#1e3a8a]">
            Login
          </div>
        </button>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-center text-[color(display-p3_0.1176_0.2275_0.5412)] max-md:max-w-full">
        Forgot your password?{" "}
        <Link
          to="/reset"
          className="font-bold text-blue-900 underline hover:no-underline"
        >
          Reset password
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
