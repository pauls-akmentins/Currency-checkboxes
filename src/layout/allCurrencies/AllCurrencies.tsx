import React from "react";
import styles from "./AllCurrencies.module.css";

const AllCurrencies: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.allCurrenciesContainer}>{children}</div>;
};

export default AllCurrencies;
