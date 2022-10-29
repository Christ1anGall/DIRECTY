import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Table from "../pages/Table";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
};

export default RoutesMain;
