import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConteiner } from "./styles";

export default function SearchForm() {
    return(
        <SearchFormConteiner>
            <input type="text" placeholder="Buscar por transicoes "/>
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormConteiner>
    );
} 