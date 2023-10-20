import { Outlet } from "react-router-dom";
import Header from "../Header/header.component";

import "./pagelayout.styles.scss";

const PageLayout = () => {
  return (
    <>
      <Header />
      <div className="wrapper-outlet">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
