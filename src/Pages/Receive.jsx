import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
// import { useAddress } from "@thirdweb-dev/react";

function Receive() {
  const walletUser = "0x24F375746fF3f15D12Ec2E929D9f0bD24C5D059D";
  const textRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(null);

  const handleCopyClick = () => {
    textRef.current.select();
    document.execCommand("copy");
    setCopySuccess("Copied!");
  };

  return (
    <div className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">
      <Navbar />
      <div className="flex items-center justify-center my-4">
        <img
          src="https://i.ibb.co/smfNztD/walletQr.png"
          alt="walletQr"
          border="0"
        />
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="btn btn-primary ml-2 py-2" onClick={handleCopyClick}>
          Copy
        </button>
        <input
          ref={textRef}
          className="input-rounded input ml-2 py-2" // Adjusted py-2 here
          value={walletUser}
          readOnly
        />
        {copySuccess && <p className="ml-2">{copySuccess}</p>}
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="flex items-center justify-center my-4">
        <Link to="https://timely-queijadas-382d44.netlify.app/" className="btn btn-primary ml-2 py-2">
          NFC
        </Link>{" "}
        <button className="btn btn-primary ml-2 py-2">Share</button>
      </div>
    </div>
  );
}

export default Receive;
