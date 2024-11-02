import { useContext } from "react";
import Header from "../../components/Header/intex";
import Summary from "../../components/Summary/intex";
import SearchForm from "./components/SearchForm/intex";
import { 
    PriceHighLight, 
    TransactionsConteiner, 
    TransactionsTable 
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dataFormatter, priceFormatter } from "../../utils/Formatter";

export default function Transactions() {

    const { transactions } = useContext(TransactionsContext);

    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsConteiner>
                <SearchForm/>

                <TransactionsTable>
                    <tbody>
                        {transactions.map(transactions => {
                            return (
                                <tr key={transactions.id}>
                                    <td width="40%">{transactions.description}</td>
                                    <td>
                                        <PriceHighLight varient={transactions.type}>
                                            {transactions.type === 'outcome' && '- ' }
                                            {priceFormatter.format(transactions.price)}    
                                        </PriceHighLight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{dataFormatter.format(new Date(transactions.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsConteiner>
        </div>
    );
}