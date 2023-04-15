import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import mainMenu from "../assets/mobile_bar.png";
import closeMenu from "../assets/close.png";

// import Home from "../components/Home";
// import List from "../components/List";
import Profile from "../components/Profile";
// import ProfileExpand from "../components/ProfileExpand";
export default function DashBoard(props) {
  const navigate = useNavigate();
  const [active, setActive] = useState("1");

  const [isMobile, setIsMobile] = useState(true);

  function selectLink1() {
    setActive("1");
  }
  function selectLink2() {
    setActive("2");
  }
  function selectLink3() {
    setActive("3");
  }
  function selectLink4() {
    setActive("4");
  }

  const handleLogOut = async () => {
    const res = await fetch("/user/logout");
    props.setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const checklogin = async () => {
      const res = await fetch("/user/auth");
      const data = await res.json();

      if (data.msg == "User Login Found") {
        props.setIsLoggedIn(true);
      } else {
        navigate("/");
        props.setIsLoggedIn(false);
      }
    };
    checklogin();
  }, []);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-5 h-screen font-lexend overflow-y-scroll overflow-x-clip">
        <div className="col-span-1 p-4 bg-rp-black text-jp-yellow">
          <div className="lg:inline flex">
            <Link to="/">
              <ul className="cursor-pointer">
                <li className="px-2 mt-2 py-1">
                  <h1 className="lg:text-3xl text-lg font-bold">
                    Expense Tracker
                  </h1>
                </li>
              </ul>
            </Link>
            <ul className="lg:flex lg:flex-col mt-10 hidden">
              <Link to="/dashboard">
                <li
                  onClick={selectLink1}
                  className={
                    active === "1"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md bg-jp-black rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </span>
                  Home
                </li>
              </Link>
              <Link to="/dashboard/analysis">
                <li
                  onClick={selectLink2}
                  className={
                    active === "2"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md bg-jp-black rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </span>
                  Analysis
                </li>
              </Link>
              <Link to="/dashboard/daily">
                <li
                  onClick={selectLink3}
                  className={
                    active === "3"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md bg-jp-black rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Daily
                </li>
              </Link>

              <Link to="/dashboard/export">
                <li
                  onClick={selectLink4}
                  className={
                    active === "4"
                    ? "mb-4 flex py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md bg-jp-black rounded-md"
                    : "mb-4 flex py-3 cursor-pointer text-2xl hover:bg-jp-black hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mx-4">
                    <svg  width="20" height="20" className="h-7 w-7 " viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V7.41421C16 6.88378 15.7893 6.37507 15.4142 6L12 2.58579C11.6249 2.21071 11.1162 2 10.5858 2H6ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V11.5858L7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071L13.7071 11.7071C14.0976 11.3166 14.0976 10.6834 13.7071 10.2929C13.3166 9.90237 12.6834 9.90237 12.2929 10.2929L11 11.5858V8Z" fill="#4A5568"/>
                     </svg>
                  </span>
                  Excel export
                </li>
              </Link>

            </ul>
            <div className="lg:hidden flex">
              <button
                className="ml-32 bg-rp-yellow rounded-lg "
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <img src={mainMenu} className="h-10 w-10 p-2" />
                ) : (
                  <img src={closeMenu} className="h-10 w-10 p-2" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsMobile(true)}
          className={isMobile ? "hidden bg-mj-black" : "inline bg-mj-black"}
        >
          <div className=" bg-rp-black ">
            <ul className="">
              <Profile />
              <Link to="/dashboard">
                <li
                  onClick={selectLink1}
                  className={
                    active === "1"
                      ? "text-rp-yellow flex text-2xl p-2 pt-8"
                      : "text-rp-yellow  w-fit  flex text-2xl  pt-8"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </span>
                  Home
                </li>
              </Link>
              <Link to="/dashboard/analysis">
                <li
                  onClick={selectLink2}
                  className={
                    active === "2"
                      ? "text-rp-yellow flex text-2xl p-2 pt-4"
                      : "text-rp-yellow flex text-2xl p-2 pt-4"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </span>
                  Analysis
                </li>
              </Link>
              <Link to="/dashboard/daily">
                <li
                  onClick={selectLink3}
                  className={
                    active === "3"
                      ? "text-rp-yellow flex text-2xl p-2"
                      : "text-rp-yellow flex text-2xl p-2"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Daily
                </li>
              </Link>
              
              <Link to="/dashboard/export">
                <li
                  onClick={selectLink4}
                  className={
                    active === "4"
                      ? "text-rp-yellow flex text-2xl p-2"
                      : "text-rp-yellow flex text-2xl p-2"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Excel export
                </li>
              </Link>

              <div className="ml-6  mt-4 bottom-5 left-16 pb-6 ">
                <button
                  onClick={handleLogOut}
                  className="bg-mj-yellow px-4 py-3 flex rounded-md font-bold duration-300 ease-out hover:scale-110"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </div>

        <div className=" lg:block absolute bottom-14 z-50 right-5 lg:bottom-20 lg:left-16 lg:right-0">
          <button
            onClick={props.openModalExpense}
            className="bg-mj-yellow px-4 py-3 flex rounded-md font-bold duration-300 ease-out hover:scale-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="hidden lg:block">Add Expense</span>
          </button>
        </div>
        <div className="hidden lg:block lg:absolute bottom-5 left-16">
          <button
            onClick={handleLogOut}
            className="bg-mj-yellow px-4 py-3 flex rounded-md font-bold duration-300 ease-out hover:scale-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            Logout
          </button>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
