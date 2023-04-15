import React, { useEffect, useState,createRef } from "react";
import Daily from "../components/Daily";
import List from "../components/List";
import Profile from "../components/Profile";
import ProfileExpand from "../components/ProfileExpand";
import { Scrollbars } from "react-custom-scrollbars";
import { useNavigate } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";
import moment from "moment";

export default function MainDaily(props) {
  const navigate = useNavigate();
  const [viewProfile, setViewProfile] = useState("hidden");
  let [expense, setExpense] = useState([]);

  useEffect(() => {
    async function HandleDailyExpense() {
      const res = await fetch("/expense/getdailyexpense");
      const data = await res.json();

      if (data.errors) {
        navigate("/");
      } else {
        setExpense(data.filterData);
      }
    }
    HandleDailyExpense();
  }, []);

  const ref = createRef(null);
  const ref2 = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "chart", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const download2 = (image, { name = "list", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
    const downloadScreenshot2 = () => takeScreenShot(ref2.current).then(download2);
    

  return (
    <>
      <div className='absolute top-5 right-6'>
          <Profile setViewProfile={setViewProfile} />
      </div>
      <div ref={ref} className="col-span-2 bg-jp-black py-5">
        <Daily />
      </div>
      <div ref={ref2} className="col-span-2 bg-jp-black py-20">
        <Scrollbars
          style={{ width: 540, height: 640 }}
          className="lg:mt-8 -mt-1"
        >
          {expense.map((item) => {
            return (
              <List
                setDeleteId={props.setDeleteId}
                openModalConfirm={props.openModalConfirm}
                expense={item}
              />
            );
          })}
        </Scrollbars>
      </div>
      <div className='absolute bottom-64 left-0'>
        <button className="bg-mj-yellow px-4 py-3 ml-20 flex rounded-md font-bold duration-300 ease-out hover:scale-110" onClick={downloadScreenshot}>Download Chart</button>
      </div>
      <div className='absolute bottom-48 left-0'>
        <button className="bg-mj-yellow px-4 py-3 ml-20 flex rounded-md font-bold duration-300 ease-out hover:scale-110" onClick={downloadScreenshot2}>Download list</button>
      </div>
      <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
        <ProfileExpand />
      </div>
    </>
  );
}
