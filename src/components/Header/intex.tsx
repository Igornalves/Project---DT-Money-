import { DivTitule, HeaderConteiner, HeaderContent, Text, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Ignite simbol.svg'
import NewTransActionModal from "../NewTransActionModal/intex";

export default function Header() {
    return(
        <HeaderConteiner>
            <HeaderContent>
                <DivTitule>
                    <img src={logoImg} alt="logo" />
                    <Text>DT Money</Text>
                </DivTitule>
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