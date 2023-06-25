import React from "react";
import styles from "./MainContainer.module.css";

const MainContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <div className={styles.mainContainer}>{children}</div>;

export default MainContainer;
