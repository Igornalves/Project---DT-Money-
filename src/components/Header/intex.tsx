import { HeaderConteiner, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/Ignite simbol.svg'

export default function Header() {
    return(
        <HeaderConteiner>
            <HeaderContent>
                <img src={logoImg} alt="logo" />
                                
                <NewTransactionButton>Nova Transacao</NewTransactionButton>
            </HeaderContent>
        </HeaderConteiner>
    );
}