import React from "react";
import Logo from "../../components/login/Logo";
import LoginForm from "../../components/login/LoginForm";

function LoginPage() {
  return (
    <main className="overflow-hidden pt-14 pr-20 pb-24 pl-5 bg-[color(display-p3_1_1_1)] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow px-px min-h-[872px] max-md:mt-10 max-md:max-w-full max-sm:hidden">
            <img
              loading="lazy"
              src="/images/asthma_lung.webp"
              alt=""
              className="object-cover absolute inset-0 size-full rounded-2xl"
            />
            <div className="flex relative z-10 shrink-0 rounded-2xl bg-slate-800 bg-opacity-60 h-[873px] max-md:max-w-full max-sm:hidden" />
          </div>
        </section>
        <section className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <Logo />
            <LoginForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
