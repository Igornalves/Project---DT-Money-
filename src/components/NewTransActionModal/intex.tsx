import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import * as z from 'zod';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransActionModal() {

    const { createTransaction } = useContext(TransactionsContext)

    const { 
        control, 
        register, 
        handleSubmit, 
        formState: { isSubmitted },
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description,category,price,type } = data;

        createTransaction({
            description,
            category,
            price,
            type
        })

        reset()
    }

    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transacao</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type='text' 
                        placeholder='Descricao' 
                        required
                        {...register('description')}
                    />
                    <input 
                        type='number' 
                        placeholder='Preco' 
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input 
                        type='text' 
                        placeholder='Categoria' 
                        required
                        {...register('category')}
                    />

                    <Controller 
                        control={control}
                        name='type'
                        render={({ field }) => {
                            // console.log(field)
                            return(
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant='income' value='income'>
                                        <ArrowCircleUp size={24}/>
                                            Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24} />
                                            Saida 
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />
                    <button type='submit' disabled={ isSubmitted }>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    );
}