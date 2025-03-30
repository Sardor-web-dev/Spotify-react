import { Outlet } from "react-router-dom";
import Header from "../components/custom/Header";

const Layout = () => {
    return (
        <>
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
        </>
    );
}
 
export default Layout;