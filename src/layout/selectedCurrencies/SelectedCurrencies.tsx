import React from "react";
import styles from "./SelectedCurrencies.module.css";

const SelectedCurrencies: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className={styles.selectedCurrenciesContainer}>{children}</div>;

export default SelectedCurrencies;
