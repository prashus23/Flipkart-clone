import "./main.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/Navbar";
import MainHomepage from "./HomePage/mainHomepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from "../Components/Details";

function Main() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/" element={<MainHomepage />} />
          <Route path="/productData/:id" element={<DetailView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Main;


