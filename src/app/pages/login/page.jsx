"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.png";
import pot from "../../../../public/images/pot.png";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CreateAcctount from "../../SignUp/signUpComponents/CreateAcctount";
import Verification from "@/app/SignUp/signUpComponents/Verification";
import LoginComp from "@/app/components/logincomponents/LoginComp";
import ForgotPassword from "../forgotpassword/page";
import Loading from "@/app/components/Loading";
import authbig from "../../../../public/images/authbig.png";
import authtwo from "../../../../public/images/authtwo.png";

const Login = () => {
  const [show, setShow] = useState(1);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const checkShow = () => {
    setShow((prev) => prev + 1);
  };
  return (
    <div className="bg-[#F0E0D0] min-h-screen flex flex-col justify-center md:flex-row md:items-stretch overflow-hidden">
      {loading && <Loading />}

      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2">
        {show === 1 && (
          <LoginComp
            loading={loading}
            setLoading={setLoading}
            checkShow={checkShow}
          />
        )}
      </div>

      <div className="hidden md:flex md:w-1/2 relative items-center justify-center bg-[#F0E0D0] overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-end">
          {/* Big pot */}
          <Image
            className="relative z-20 object-contain"
            src={authbig}
            alt="authbig"
            width={320}
            height={320}
            // style={{ maxHeight: "90vh", width: "auto" }}
          />

          {/* Small pot behind */}
          <Image
            className="absolute bottom-0 left-[6rem] z-10 object-contain"
            src={authtwo}
            alt="authtwo"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
