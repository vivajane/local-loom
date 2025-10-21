"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.png";
import pot from "../../../../public/images/pot.png";
import { useState } from "react";
import CreateAcctount from "../../SignUp/signUpComponents/CreateAcctount";
import Verification from "@/app/SignUp/signUpComponents/Verification";
import Link from "next/link";
import Loading from "@/app/components/Loading";

const SellerSignUp = () => {
  const [show, setShow] = useState(1);
  const [loading, setLoading] = useState(false);

  const checkShow = () => {
    setShow((prev) => prev + 1);
  };
  return (
    <div className="bg-[#F0E0D0] h-screen lg:px-26 md:px-16 px-8 py-6">
      {loading && <Loading />}
      <section className="md:flex h-screen justify-between gap-20 lg:gap-30">
        <div>
          <div>
            {show === 1 && (
              <CreateAcctount
                loading={loading}
                setLoading={setLoading}
                checkShow={checkShow}
              />
            )}
          </div>
          <div>
            {show === 2 && (
              <Verification
                loading={loading}
                setLoading={setLoading}
                checkShow={checkShow}
              />
            )}
          </div>
        </div>
        <div className="pt-24 md:w-1/2 hidden md:block md:flex-shrink-0">
          <Image src={pot} alt="pot" width={400} />
        </div>
      </section>
    </div>
  );
};

export default SellerSignUp;
