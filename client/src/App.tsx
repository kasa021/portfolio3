/* eslint-disable sort-imports */
import "./App.css";

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DisplayBlog } from "./components/blog/DisplayBlog";
import { Footer } from "./components/templates/Footer";
import { Header } from "./components/templates/Header";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Helmet>
            <title>kAsA&apos;s portfolio</title> 
          </Helmet>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:filename" element={<DisplayBlog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
