import { PostModel } from "Components/PostModelo";
import styles from "./AboutMe.module.css";
import fotoCapa from "assets/about_me.png";
import myPhoto from "assets/my_photo.png";

export const AboutMe = () => {
  return (
    <PostModel fotoCapa={fotoCapa} titulo="About Me">
      <h3 className={styles.subtitulo}>Hellow, I'm Breno</h3>
      <img src={myPhoto} alt="minha foto" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>Hellow, how are you?</p>
      <p className={styles.paragrafo}>Well, iam start a tell about me!! </p>
      <p className={styles.paragrafo}>
        My career in the world of technology started about 1.5 years ago at
        kenzie academy Brazil
      </p>
      <p className={styles.paragrafo}>
        where I participated in 4 large team projects, and more than 30 smaller
        and individual projects...
      </p>
      <p className={styles.paragrafo}>
        among the technologies that I have mastery and knowledge of area,
        React.js , Node.js, Python, django rest framework, Adonis.js, several
        databases and agile methodologies, including several soft skills
      </p>
      <p className={styles.paragrafo}>
        outside the kenzie academy i participated in the backend of a private
        app, made for the city hall of são jose dos pinhais, the More culture
        project was my first private project, and although challenging, it
        contributed a lot to my personal growth, and i am looking for new
        challenges and opportunities.
      </p>
    </PostModel>
  );
};
