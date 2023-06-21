import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import { PostCard } from "Components/PostCard";

export const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <PostCard post={post} key={post.id}>
            {post.titulo}
          </PostCard>
        );
      })}
    </ul>
  );
};
