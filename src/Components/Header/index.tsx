import HeaderButton from "../HeaderButton";
import SearchInput from "../SearchInput";
import { HeaderList } from "./static";
import { Container, HeaderLink, HeaderLinkWrap, HeaderWrap, LogoText, LogoWrap, SearchWrap } from "./styles";

const Header = () => {
    return (
        <Container>
            <HeaderWrap>
                <LogoWrap>
                    <LogoText>당근</LogoText>
                </LogoWrap>
                {HeaderList.map((item, index) => (
                    <HeaderLinkWrap key={index}>
                        <HeaderLink to={item.url}>{item.name}</HeaderLink>
                    </HeaderLinkWrap>
                ))}
                <SearchWrap>
                    <SearchInput />
                    <HeaderButton />
                </SearchWrap>
            </HeaderWrap>
        </Container>
    )
}

export default Header;