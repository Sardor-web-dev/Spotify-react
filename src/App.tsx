import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Layout from "./layouts/Layout";

function App() {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />} >
                <Route index element={<Layout />} />
            </Route>

            <Route path="/me" element={<layout />}>
            </Route>

            <Route path="/login" element={<Auth />} />
        </Routes>
    );
}


export default App;
