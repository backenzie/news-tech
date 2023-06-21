import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import { Button } from "Components/Button";

export const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <Button>Ler</Button>
      </div>
    </Link>
  );
};
