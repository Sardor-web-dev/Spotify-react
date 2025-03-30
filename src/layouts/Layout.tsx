import { Outlet } from "react-router-dom";
import Header from "../components/custom/Header";
import Player from "../components/custom/Player";

const Layout = () => {
    return (
        <>
        <div>
            <Header />
            <Outlet />
            <Player />
        </div>
        </>
    );
}
 
export default Layout;