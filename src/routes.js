import { Inicio } from "./Pages/Inicio";
import { AboutMe } from "./Pages/AboutMe";
import { Menu } from "./Components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rodape } from "Components/Rodape";
import { PaginaPadrao } from "Components/PaginaPadrao";
import { Post } from "Pages/Post";
import { NotFound } from "Pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
