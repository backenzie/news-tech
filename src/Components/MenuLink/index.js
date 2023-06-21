import { useLocation, Link } from "react-router-dom";
import styles from "./MenuLink.module.css";

export const MenuLink = ({ children, to }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`${styles.link} ${
        location.pathname === to ? styles.link : styles.linkDestacado
      }`}
    >
      {children}
    </Link>
  );
};
