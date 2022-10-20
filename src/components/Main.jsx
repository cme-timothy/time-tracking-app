import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Timer from "../pages/Timer";
import Calender from "../pages/Calender";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/Timer" element={<Timer />} />
      <Route path="/Calender" element={<Calender />} />
    </Routes>
  );
}

export default Main;
