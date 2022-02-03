
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (

    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <main className="container mx-auto">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router >
    </GithubProvider>
  );
}

export default App;
