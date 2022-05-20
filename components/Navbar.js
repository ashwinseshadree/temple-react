import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const navItems = useSelector(
    (state) => state.commonReducer?.business_categories
  );

  return (
    <ul className="nav tab-nav justify-content-start">
      <li className="nav-item pe-4">
        <Link href="/">
          <a
            className={`nav-link ${ id === undefined ? "active" : ""}`}
            aria-current="page"
          >
            {" "}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/all-ico.svg`} /> All
          </a>
        </Link>
      </li>
      <li className="nav-item pe-4">
        <Link href={`/top-categories/eats`}>
          <a
            className={`nav-link ${id === "eats" ? "active" : ""}`}
            aria-current="page"
          >
            {" "}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/eat-ico.svg`} /> Eat
          </a>
        </Link>
      </li>
      {/* {navItems && navItems.map((i,k) => {
                    return <li className="nav-item" key={k}>
                        
                                <Link href={`/eats`}>   
                                    <a className="nav-link" aria-current="page"><img src={'/images/eat-ico.svg'} />  {i.category_name}</a>
                                </Link>
                           </li>
                })} */}
      {/* <li className="nav-item">
                    <Link href="">                   
                      <a className="nav-link">  <img src={'/images/buy-ico.svg'} /> Buy</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="">                   
                      <a className="nav-link">  <img src={'/images/eco-tribe-ico.svg'} /> Eco Tribe</a>
                    </Link>
                </li> */}
    </ul>
  );
};

export default Navbar;
