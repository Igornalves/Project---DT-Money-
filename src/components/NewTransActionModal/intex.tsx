import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export default function NewTransActionModal() {
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transacao</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action=''>
                    <input type='text' placeholder='Descricao' required/>
                    <input type='number' placeholder='Preco' required/>
                    <input type='text' placeholder='Categoria' required/>

                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saida 
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    );
}