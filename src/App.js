import m from './App.css';
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";
import { Info } from "./pages/info/Info";
import { Contacts } from "./pages/contacts/Contacts";
import { Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import { NotFound } from "./pages/notFound/NotFound";
import {HeaderFooter} from "./pages/headerFooter/HeaderFooter";



const App = (props) => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HeaderFooter/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'shop'} element={<Shop/>}/>
                    <Route path={'info'} element={<Info/>}/>
                    <Route path={'contacts'} element={<Contacts/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>

            </Routes>
        </div>

    );
}

export default App;
