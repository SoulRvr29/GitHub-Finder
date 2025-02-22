import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
