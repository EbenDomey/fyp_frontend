import React from "react";

function Logo() {
  return (
    <div className="flex flex-col items-center self-center max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40ecca6a9f77066bb0743bb9542dea91e3d9281fd04a49bdc54a3f35074ecfe0?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
        alt="Company Logo"
        className="object-contain max-w-full aspect-[4.1] w-[209px]"
      />
      <div className="flex flex-col items-center mt-8 max-md:max-w-full">
        <h1 className="text-4xl font-bold text-[color(display-p3_0.0667_0.0667_0.0667)]">
          Welcome back!
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[color(display-p3_0.4_0.4431_0.5216)] max-md:max-w-full">
          Log into your account and start where you left off.
        </p>
      </div>
    </div>
  );
}

export default Logo;
