import React, { useEffect } from "react";
// import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Register() {
  const { wallet } = "hjdhdusu8whuhshs";
  const navigate = useNavigate();

  useEffect(() => {
    if (wallet) {
      navigate("/home");
    }
  }, [wallet, navigate]);

  return (
    <div className="bg-gradient-to-t from-green-500 to-cyan-400 h-screen">
      <div className="flex w-full justify-center gap-4">
        <div>
          <p>Register or login by connecting to your Metamask</p>
        </div>
        <ConnectWallet />
      </div>
    </div>
  );
}
