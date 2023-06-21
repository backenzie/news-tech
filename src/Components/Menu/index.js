import styles from "./Menu.module.css";
import { MenuLink } from "../MenuLink";

export const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="aboutme">About Me</MenuLink>
      </nav>
    </header>
  );
};
