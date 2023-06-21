import styles from "./Button.module.css";

export const Button = ({ children, tamanho }) => {
  return (
    <button className={`${styles.mainButton} ${styles[tamanho]}`}>
      {children}
    </button>
  );
};
