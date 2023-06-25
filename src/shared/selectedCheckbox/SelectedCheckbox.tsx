import styles from "./SelectedCheckbox.module.css";

interface SelectedCurrencyProps {
  selectedCurrency: string;
  onRemove?: () => void;
}

const SelectedCurrency: React.FC<SelectedCurrencyProps> = ({
  selectedCurrency,
  onRemove,
}) => {
  return (
    <div className={styles.outerContainer} data-testid="selected-checkbox">
      <div className={styles.selectedCheckboxContainer}>
        <div
          className={styles.nameContainer}
          data-testid="selected-checkbox-content"
        >
          {selectedCurrency}
        </div>
      </div>
      <div className={styles.removeButtonContainer} onClick={onRemove}>
        <div className={styles.innerButtonContainer}>X</div>
      </div>
    </div>
  );
};

export default SelectedCurrency;
