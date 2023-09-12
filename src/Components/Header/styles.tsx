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
`

export const HeaderLinkWrap = styled.div`
    
    
`

export const HeaderLink = styled(Link)`
    box-sizing: border-box;
	display: block;
	margin: 0 auto;
	text-align: center;
    font-size: 1.125rem;
    line-height: 1.32;
`