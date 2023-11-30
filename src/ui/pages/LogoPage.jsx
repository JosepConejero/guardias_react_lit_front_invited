//import { Link } from "react-router-dom";
import "../../components_lit/logo_page/logo-page-background";

export const LogoPage = () => {
  return (
    <>
      <logo-page-background>
        <a href="/login">
          <img src="/assets/logo.png" alt="logo de MPE"></img>
        </a>
      </logo-page-background>
    </>
  );
};
// {/* <div className="logo-container animate__animated animate__fadeIn animate__faster"> */}
//   {/* <Link to="/login"> */}
//   {/* </Link> */}
// {/* </div> */}
