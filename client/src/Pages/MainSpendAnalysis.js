import React, { useState,createRef } from "react";
import Profile from "../components/Profile";
import ProfileExpand from "../components/ProfileExpand";
import DailySpendAnalysis from "./DailySpendAnalysis";
import { useScreenshot, createFileName } from "use-react-screenshot";

export default function MainSpendAnalysis() {
  const [viewProfile, setViewProfile] = useState("hidden");

  const ref = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "spendanalysisdaily", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <>
      
          <div className="col-span-4 bg-jp-black py-4">
        <Profile setViewProfile={setViewProfile} />
        <button className="bg-mj-yellow px-4 py-3 ml-20 flex rounded-md font-bold duration-300 ease-out hover:scale-110" onClick={downloadScreenshot}>Download Report</button>
        
        <div ref={ref}>
          <DailySpendAnalysis />  
          </div>
          </div>
          <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
            <ProfileExpand />
          </div>      
    
    </>
  );
}
