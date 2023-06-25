import classNames from "classnames";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checkboxContent: string;
  onClick?: () => void;
  isChecked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checkboxContent,
  onClick,
  isChecked = false,
}) => {
  return (
    <div
      className={classNames(styles.checkboxContainer, {
        [styles.checkedContainer]: isChecked,
      })}
      onClick={onClick}
      data-testid="checkbox"
    >
      <div className={styles.checkbox} data-testid="checkbox-input">
        {isChecked ? "X" : ""}
      </div>
      <div className={styles.checkboxContent} data-testid="checkbox-content">
        {checkboxContent}
      </div>
    </div>
  );
};

export default Checkbox;
