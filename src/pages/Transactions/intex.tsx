import Header from "../../components/Header/intex";
import Summary from "../../components/Summary/intex";
import { 
    PriceHighLight, 
    TransactionsConteiner, 
    TransactionsTable 
} from "./styles";

export default function Transactions() {
    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsConteiner>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="40%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight varient="income">
                                    R$ 12.000,00    
                                </PriceHighLight>
                            </td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="40%">Hamburguer</td>
                            <td>
                                <PriceHighLight varient="outcome">
                                    - R$ 20,00
                                </PriceHighLight>
                            </td>
                            <td>Compras</td>
                            <td>24/02/2022</td>
                        </tr>
                        <tr>
                            <td width="40%">Alimentacao</td>
                            <td>
                                <PriceHighLight varient="income">
                                    R$ 56,00
                                </PriceHighLight>
                            </td>
                            <td>Vendas</td>
                            <td>23/05/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsConteiner>
        </div>
    );
}