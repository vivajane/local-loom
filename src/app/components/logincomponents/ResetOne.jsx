import React from "react";
import AuthProfile from "../AuthProfile";

const ResetOne = ({ checkShow, title }) => {
  return (
    <div className="pt-10">
      <AuthProfile title="Reset Password" />
      <p className="text-[#4B2417] text-sm">
        Enter email associated with your account
      </p>
      <div className="space-y-4 py-6 w-full">
        <input
          className="bg-white py-2  px-4 rounded-md w-full"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <button
          onClick={checkShow}
          className="bg-[#4B2417] text-white px-4 py-2 mt-3 rounded-md w-full"
        >
          Get OTP
        </button>
      </div>
    </div>
  );
};

export default ResetOne;
