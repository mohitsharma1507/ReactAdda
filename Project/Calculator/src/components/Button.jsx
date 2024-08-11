import styles from "../App.module.css";

const Button = ({ onbuttonclick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonNames) => (
        <button
          className={styles.buttons}
          onClick={() => onbuttonclick(buttonNames)}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};
export default Button;
