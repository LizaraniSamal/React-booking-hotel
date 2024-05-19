import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelDetails from "./pages/hotel-details/HotelDetails";
import HotelList from "./pages/hotel-list/HotelList";
import "./App.css";
import LoginForm from "./pages/form/LoginForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/auth" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
