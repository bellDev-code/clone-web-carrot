import { SearchForm, StyledInput } from "./styles";

const SearchInput = () => {
    return (
        <SearchForm>
            <StyledInput type='search' placeholder="물품이나 동네를 검색해보세요" />
        </SearchForm>
    )
}

export default SearchInput;