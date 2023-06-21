import "./Post.css";
import posts from "json/posts.json";
import { useParams } from "react-router-dom";
import { PostModel } from "Components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <h1>Post não encontrado!!!</h1>;
  }

  return (
    <PostModel
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModel>
  );
};
