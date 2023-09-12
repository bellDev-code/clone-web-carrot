import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.section`
    max-width: 75rem;
    height: 4rem;
`

export const HeaderWrap = styled.div`
    display: flex;
    padding: 0.75rem 1.25rem;
    height: 3.5rem;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    position: relative;
`

export const LogoWrap = styled.div`
    
`

export const LogoText = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0;
    color: #fe6f0f;
`

export const HeaderLinkWrap = styled.div`
    
    
`

export const HeaderLink = styled(Link)`
    box-sizing: border-box;
	display: block;
	margin: 0 auto;
	text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.32;

    > a:hover {
    text-decoration: none;
    color: #fe6f0f;
    cursor: pointer;
}
`