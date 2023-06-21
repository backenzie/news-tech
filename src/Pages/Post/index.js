import "./Post.css";
import posts from "json/posts.json";
import { useParams, Routes, Route } from "react-router-dom";
import { PostModel } from "Components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { NotFound } from "Pages/NotFound";
import { PaginaPadrao } from "Components/PaginaPadrao";

export const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModel
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModel>
          }
        ></Route>
      </Route>
    </Routes>
  );
};
