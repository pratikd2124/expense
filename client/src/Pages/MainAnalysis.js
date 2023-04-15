import React, { useState,createRef } from "react";
import Analysis from "../components/Analysis";
import List from "../components/List";
import Profile from "../components/Profile";
import ProfileExpand from "../components/ProfileExpand";
import { Scrollbars } from "react-custom-scrollbars";
import { useScreenshot, createFileName } from "use-react-screenshot";


export default function MainAnalysis(props) {
  const [viewProfile, setViewProfile] = useState("hidden");
  const [listExpense, setListExpense] = useState([]);
  const [clicked, setClicked] = useState(true);
  
  const ref = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "monthlychart", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
    
    
  {
    return window.innerWidth > 420 ? (
      <>
        <div className="col-span-2 bg-jp-black">
          {clicked ? (
            <Scrollbars
              style={{ width: 540, height: 640 }}
              className="lg:mt-8 -mt-1 lg:ml-24 ml-3"
            >
              {listExpense
                ? listExpense.map((item) => {
                    return (
                      <List
                        setDeleteId={props.setDeleteId}
                        openModalConfirm={props.openModalConfirm}
                        expense={item}
                      />
                    );
                  })
                : null}
            </Scrollbars>
          ) : null}
        </div>
        <div className="col-span-2 bg-jp-black mt-10 lg:mt-0">
          <Profile setViewProfile={setViewProfile} />
          <div className='hidden lg:block absolute bottom-48 left-0'>
          <button className="bg-mj-yellow px-4 py-3 ml-20 flex rounded-md font-bold duration-300 ease-out hover:scale-110" onClick={downloadScreenshot}>Download Chart</button>
          </div>
          <div ref = {ref}> 
          <Analysis
            clicked={clicked}
            setClicked={setClicked}
            setListExpense={setListExpense}
            listExpense={listExpense}
          />
          </div>
          
        </div>
        <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
          <ProfileExpand />
        </div>
      </>
    ) : (
      <>
        <div className="col-span-2 bg-jp-black py-10 lg:py-0">
          <Profile setViewProfile={setViewProfile} />
          <Analysis
            clicked={clicked}
            setClicked={setClicked}
            setListExpense={setListExpense}
            listExpense={listExpense}
          />
        </div>
        <div className="col-span-2 bg-jp-black">
          {clicked ? (
            <Scrollbars
              style={{ width: 540, height: 640 }}
              className="lg:mt-8 -mt-1 lg:ml-24 ml-1"
            >
              {listExpense
                ? listExpense.map((item) => {
                    return (
                      <List
                        setDeleteId={props.setDeleteId}
                        openModalConfirm={props.openModalConfirm}
                        expense={item}
                      />
                    );
                  })
                : null}
            </Scrollbars>
          ) : null}
        </div>

        <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
          <ProfileExpand />
        </div>
      </>
    );
  }
  // return (
  //   <>
  //     <div className="col-span-2 bg-jp-black">
  //       {clicked ? (
  //         <Scrollbars
  //           style={{ width: 540, height: 640 }}
  //           className="lg:mt-8 -mt-1 lg:ml-24 ml-3"
  //         >
  //           {listExpense
  //             ? listExpense.map((item) => {
  //                 return (
  //                   <List
  //                     setDeleteId={props.setDeleteId}
  //                     openModalConfirm={props.openModalConfirm}
  //                     expense={item}
  //                   />
  //                 );
  //               })
  //             : null}
  //         </Scrollbars>
  //       ) : null}
  //     </div>
  //     <div className="col-span-2 bg-jp-black">
  //       <Profile setViewProfile={setViewProfile} />
  //       <Analysis
  //         clicked={clicked}
  //         setClicked={setClicked}
  //         setListExpense={setListExpense}
  //         listExpense={listExpense}
  //       />
  //     </div>
  //     <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
  //       <ProfileExpand />
  //     </div>
  //   </>
  // );
}
