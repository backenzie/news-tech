import { Inicio } from "./Pages/Inicio";
import { AboutMe } from "./Pages/AboutMe";

const page = window.location.pathname === "/" ? <Inicio /> : <AboutMe />;

function App() {
  return page;
}

export default App;
