import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <div className="container mx-auto mb-4 relative">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
