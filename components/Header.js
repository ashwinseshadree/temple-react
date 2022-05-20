import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [searchKey, setSearchKey] = useState("");
  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("is_logged_in");
    const userName = localStorage.getItem("user_name");
    const userId = localStorage.getItem("user_id");
    const userProfile = localStorage.getItem("user_profile");

    setIsLoggedIn(isLoggedIn);
    setUserName(userName);
    setUserId(userId);
    setUserProfile(userProfile);
  }, []);

  const logoutUser = () => {
    console.log("logout user ....");
    localStorage.removeItem("is_logged_in");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_profile");
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/login`;
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/search/${e.target.value}`
      e.preventDefault();
    }
  };
  const handleSearch = (e) => {
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/search/${e}`
  };

  return (
    <>
      {/* <!-- Header Starts here --> */}
      <header className="container-fluid pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-6 col-xs-6 pb-2 d-flex justify-content-start hl section-logo">
              <Link href="/" className="navbar-brand">
                <Image
                  className="img-fluid"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo.svg`}
                  alt="icon"
                  height={30}
                  width={100}
                />
              </Link>
              {/* <span>For Business</span> */}
            </div>
            <div className="col-md-8 col-sm-12 section-navbar">
              <div className="row">
                <form className="search-form">
                  <div className="row">
                    {/* <div className="col-4 location-input"> */}
                    {/* <input type="text" className="form-control" placeholder="Current location" /> */}
                    {/* <div className="input-group">
                        <span className="search-icon-wrapper">
                            <img
                              src="/images/places-outline.svg"
                              alt="ico"
                            />
                        </span>
                        <input type="text" className="form-control" placeholder="Current Location" />
                        <span className="search-icon-wrapper">
                              <img
                                src="/images/chevron-down.svg"
                                alt="ico"
                              />
                        </span>
                      </div> */}
                    {/* </div> */}
                    {/* <div className="col-4">
                      <div className="input-group location-dd">
                        <span className="search-icon-wrapper">
                          <img className="ico" src="/images/map-pin-ico.svg"/>
                        </span>
                        <input type="text" className="form-control" placeholder="Current Location"/>
                      </div>
                    </div> */}
                    <div className="col-8 search-input">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Eat, Buy, EcoTribe "
                          value={searchKey}
                          onKeyDown={(e) => handleSearchEnter(e)}
                          onChange={(e)=>setSearchKey(e.target.value)}
                        />
                        <span className="search-icon-wrapper" onClick={()=>handleSearch(searchKey)}>
                          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/search-ico.svg`} alt="ico" />
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row mt-1 mt-md-2">
                <Navbar />
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-6 pb-2 d-flex justify-content-end section-profile">
              {/* <div className="dropdown profile flag me-md-4 me-3"> */}
              {/* <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="avatar-img">
                    <img src="/images/sg-flag.png" alt="image" />
                  </div>
                  <span>EN</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#!">
                      EN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      SG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      MY
                    </a>
                  </li>
                </ul>
              </div> */}
              {!isLoggedIn && (
                <div className="login-button">
                  <button
                    className="btn"
                    onClick={() => {
                      window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH}/login`;
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
              {isLoggedIn && (
                <div className="dropdown profile">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="avatar-img">
                      <img src={`https://meeko-cms.thewandergroup.com.sg/uploads/HHWT_Logo_8a98c382ea.svg`} alt="image"/>
                    </div>
                    <span>{isLoggedIn ? userName : ""}</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    {/* <li>
                      <a className="dropdown-item" href="#!">
                        <img
                          className="ico"
                          src={`${
                            !userProfile ? userProfile : `${process.env.NEXT_PUBLIC_BASE_PATH}/images/user-ico.svg`
                          }`}
                          alt="ico"
                        />
                        Profile
                      </a>
                    </li> */}
                    <li>
                      <a className="dropdown-item" href="#!">
                        <img
                          className="ico"
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/settings-ico.svg`}
                          alt="ico"
                        />
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="dropdown-item" onClick={logoutUser}>
                          <img
                            className="ico"
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logout-ico.svg`}
                            alt="ico"
                          />
                          Sign Out
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header Ends here -->    */}
    </>
  );
};

export default Header;
