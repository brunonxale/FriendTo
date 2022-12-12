import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home"
import "../src/assets/css/index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="contain">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
