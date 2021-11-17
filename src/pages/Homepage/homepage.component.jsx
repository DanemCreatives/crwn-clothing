import "./homepage.styles.scss";
import Directory from "../../components/Directory/directory.components";
import Hats from "../Hats/hats.component";
import { Routes, Route } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/hats" exact element={<Hats />} />
        <Route path="/" exact element={<Directory />} />
      </Routes>
    </div>
  );
}

export default Homepage;
