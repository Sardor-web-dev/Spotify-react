import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
