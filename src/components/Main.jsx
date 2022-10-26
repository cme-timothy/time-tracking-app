import { Routes, Route } from "react-router-dom";
import Overview from "../pages/overview/Overview";
import Timer from "../pages/timer/Timer";
import History from "../pages/history/History";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/Timer" element={<Timer />} />
      <Route path="/History" element={<History />} />
    </Routes>
  );
}

export default Main;
