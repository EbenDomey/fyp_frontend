import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between p-px w-full text-base text-black bg-white border border-gray border-solid shado max-md:max-w-full fixed left-0 top-0">
      <Link to={"/dashboard"}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/896e2d35acdbddcec5fdaf6032602ab390e7fe00205bfbe9d86cd85259be0e64?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[3.36] w-[305px]"
        />
      </Link>
      <div className="flex gap-2 justify-center items-center self-end my-auto mr-12 ">
        <img
          loading="lazy"
          src="/images/doctor_icon.jpg"
          alt="Dr. Shaun Murphy"
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[50px]"
        />
        <div className="self-stretch m-auto">Dr. Shaun Murphy</div>
      </div>
    </header>
  );
}

export default Header;
