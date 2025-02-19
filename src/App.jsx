import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./components/context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
