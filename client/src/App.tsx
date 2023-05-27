import "./App.css";

import { Footer } from "./components/templates/Footer";
import { Header } from "./components/templates/Header";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
