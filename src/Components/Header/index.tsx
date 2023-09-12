import HeaderButton from "../HeaderButton";
import SearchInput from "../SearchInput";
import { Container, HeaderLink, HeaderLinkWrap, HeaderWrap, LogoText, LogoWrap } from "./styles";

interface HeaderItem {
    name: string;
    url: string;
}

const HeaderList: HeaderItem[] = [
    {
        name: "중고거래",
        url: "/fleamarket"
    },
    {
        name: "동네가게",
        url: "/nearby-stores"
    },
    {
        name: "알바",
        url: "/jobs"
    }
]

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
                <SearchInput />
                <HeaderButton />
            </HeaderWrap>
        </Container>
    )
}

export default Header;