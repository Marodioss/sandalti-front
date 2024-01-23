import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./assets/styles/App.css";
import Home from "./screens/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="dark text-foreground bg-background">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
