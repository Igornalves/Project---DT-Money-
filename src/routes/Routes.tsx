import { Routes ,Route } from "react-router-dom";
import Transactions from "../pages/Transactions/intex";

export default function Router () {
    return (
        <Routes>
            <Route path="/" element={<Transactions/>}/>
        </Routes>
    );
}