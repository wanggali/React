import './App.css';
import {NavLink,useRoutes} from "react-router-dom";
import Routes from "./components/router/index";

function App() {
    const routes = useRoutes(Routes)
    return (
        <>
            <h1>路由6</h1>
            <NavLink to={"/about"} className={({isActive}) => {
                return isActive ? 'gali' : ''
            }}>About</NavLink><br/>
            <NavLink to={"/home"}>Home</NavLink>

            {routes}
        </>
    );
}


export default App;
