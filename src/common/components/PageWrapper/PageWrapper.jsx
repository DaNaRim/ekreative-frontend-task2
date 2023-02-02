import {Outlet} from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import styles from "./PageWrapper.module.scss";

const PageWrapper = () => (
  <div className={styles.page_wrapper}>
    <Header className={styles.main_header}/>
    <Outlet/>
    <Footer className={styles.main_footer}/>
  </div>
);

export default PageWrapper;