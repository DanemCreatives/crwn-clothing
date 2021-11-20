import "./App.scss";
import Header from "./components/Header/header.component";
import HomePage from "./pages/Homepage/homepage.component";
import Hats from "./pages/Hats/hats.component";
import Shop from "./pages/Shop/shop.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
