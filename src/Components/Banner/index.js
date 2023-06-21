import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import myPhoto from "assets/my_photo.png";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Hellow Word!</h1>
        <p className={styles.paragrafo}>
          Hellow, My name is Breno, i have 27 years old, and i live in Campo
          grande - MS, I am searchin for a job, so please help me!!!
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="apenas uma imagem"
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={myPhoto}
          alt="apenas + uma imagem"
        />
      </div>
    </div>
  );
};
