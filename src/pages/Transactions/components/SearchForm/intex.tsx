import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConteiner } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export default function SearchForm() {

    const { register, handleSubmit, formState: { isSubmitted } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(data)
    }

    return(
        <SearchFormConteiner onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Buscar por transicoes"
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitted}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormConteiner>
    );
} 