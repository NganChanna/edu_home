import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Token Response:", tokenResponse);

      const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      }).then((res) => res.json());

      console.log("User Info:", userInfo);
      // Logic for saving token would go here
      navigate("/");
    },

    onError: () => {
      console.log("Login Failed!");
    },
  });

  return (
    <button
      onClick={() => login()}
      type="button"
      className="group relative flex items-center justify-center w-full h-12 gap-3 px-6 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md"
    >
      {/* Google Icon */}
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
      />
      
      <span className="text-slate-700 font-semibold text-sm">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleLoginBtn;