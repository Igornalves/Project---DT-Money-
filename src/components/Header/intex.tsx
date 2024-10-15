import { HeaderConteiner, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Ignite simbol.svg'
import NewTransActionModal from "../NewTransActionModal/intex";

export default function Header() {
    return(
        <HeaderConteiner>
            <HeaderContent>
                <img src={logoImg} alt="logo" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transacao</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransActionModal/>
                    {/* <NewTransactionButton>Nova Transacao</NewTransactionButton> */}
                </Dialog.Root>
            </HeaderContent>
        </HeaderConteiner>
    );
}