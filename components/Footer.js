// import { getDealsData, homePageSectionsApi } from "../store/actions/home/home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDealsData());
  //   dispatch(homePageSectionsApi());
  // }, []);

  const handleLocate = (i) => {
    window.open(i);
  };
  const dealsPage = useSelector((state) => state.commonReducer?.dealsPage);

  const homePageSections = useSelector(
    (state) => state.homeReducer?.homePageSections
  );

  return (
    <footer className="container-fluid pb-5">
      <div className="container">
        <div className="footer bg-white">
          <div className="row row-cols-3 row-cols-md-6 justify-content-between">
            <div className="col col-12 mt-4 mt-md-5">
              <div className="px-2">
                <h5>
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/eats`}
                  >
                    Eat
                  </a>
                </h5>
                <nav className="nav flex-column">
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Online business`}
                  >
                    Online business
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Restaurants`}
                  >
                    Restaurants
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Cafe`}
                  >
                    Cafe
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Desserts`}
                  >
                    Desserts
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Bakeries`}
                  >
                    Bakeries
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Hawker`}
                  >
                    Hawker
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Food Court`}
                  >
                    Food Court
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Caterings`}
                  >
                    Caterings
                  </a>
                  <a
                    className="nav-link"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-categories/sub_category_3=Take Away`}
                  >
                    Take Away
                  </a>
                </nav>
              </div>
            </div>
            {dealsPage?.length > 0 && (
              <div className="col col-6 mt-4 mt-md-5">
                <div className="px-2">
                  <h5>
                    <a
                      style={{ color: "inherit", textDecoration: "none" }}
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/deals`}
                    >
                      Exclusive Deals For You
                    </a>
                  </h5>
                </div>
              </div>
            )}
            {homePageSections?.map(
              (i, k) =>
                i.themebrand?.length === 0 &&
                i.themeproducts?.length > 0 && (
                  <div className="col col-6 mt-4 mt-md-5">
                    <div className="px-2">
                      <h5>
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          key={k}
                          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/eat/${i.slug}`}
                        >
                          {i.title}
                        </a>
                      </h5>
                    </div>
                  </div>
                )
            )}
            {homePageSections?.map(
              (i, k) =>
                i.themebrand?.length > 0 && (
                  <div className="col col-6 mt-4 mt-md-5">
                    <div className="px-2">
                      <h5>
                        <a
                          style={{ color: "inherit", textDecoration: "none" }}
                          key={k}
                          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/eat/brand/${i.slug}`}
                        >
                          {i.title}
                        </a>
                      </h5>
                    </div>
                  </div>
                )
            )}
            <div className="col col-12 mt-4 mt-md-5">
              <div className="px-2">
                <h5>Follow Us</h5>
                <nav className="nav d-flex flex-row">
                  <a
                    className="nav-link pe-3"
                    onClick={() =>
                      handleLocate(
                        "https://www.facebook.com/havehalalwilltravel"
                      )
                    }
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/facebook.svg`}
                      alt="facebook-icon"
                    />
                  </a>
                  <a
                    className="nav-link pe-3"
                    onClick={() =>
                      handleLocate("https://twitter.com/tweethhwt")
                    }
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/twitter.svg`}
                      alt="facebook-icon"
                    />
                  </a>
                  <a
                    className="nav-link pe-3"
                    onClick={() =>
                      handleLocate(
                        "https://www.instagram.com/havehalalwilltravel/"
                      )
                    }
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/instagram.svg`}
                      alt="facebook-icon"
                    />
                  </a>
                  {/* <a className="nav-link pe-3" href="#">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/youtube.svg`} alt="facebook-icon" />
                </a> */}
                </nav>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {/* <div className="col px-2">
                        <h6>2021. All Rights Reserved</h6>
                    </div>
                    <div className="col px-2">
                        <h6>Privacy policy</h6>
                    </div>
                    <div className="col px-2">
                        <h6>Need help. <a>Contact Us</a></h6>
                    </div> */}
          </div>
        </div>
        <div className="row">
          <span className="copyright-txt col-8">
            &copy; 2021 Hello Travel Pte Ltd.All Rights Reserved.{" "}
            <span className="link-encl">
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://profile.havehalalwilltravel.com/page/end-user-license-agreement"
                  )
                }
              >
                End User License Agreement
              </a>{" "}
              |{" "}
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://profile.havehalalwilltravel.com/page/privacy-policy"
                  )
                }
              >
                Privacy Policy
              </a>
            </span>
          </span>
          <span className="copyright-txt col-4 text-end">
            Need a help,{" "}
            <a
              href="mailto:tribes@havehalalwilltravel.com"
              className="text-link"
            >
              Contact Us
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
