import { Routes ,Route } from "react-router-dom";
import Transactions from "../pages/Transactions/intex";
import { TransactionsProvider } from "../contexts/TransactionsContext";

export default function Router () {
    return (
        <Routes>
            <Route path="/" element={
                <TransactionsProvider>
                    <Transactions/>
                </TransactionsProvider>
            }/>
        </Routes>
    );
}