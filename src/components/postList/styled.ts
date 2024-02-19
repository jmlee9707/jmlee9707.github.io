import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Wrapper = styled.div`
    width : 100%;
    /* background-color: blue; */
    display:  flex;
    text-align: center;
    justify-content: center;
    padding : 10px 0;
    display: flex;
    justify-content: space-between;
    gap : 16px;
    height : 100%;

`


export const Sidebar = styled.div`
    /* background-color: red; */
    width : 20%;
    display: flex;
    flex-direction: column;
    justify-content : start;
    align-items: start;
    gap : 12px;
    padding : 40px 0;
    border-top : 1px solid #dbdbdb;
    border-bottom : 1px solid #dbdbdb;
    
`
export const Chip  = styled(Link)<{selected : boolean}>`
    font-size: 14px;
    font-family: ${({selected})=> selected ? "GmarketSansMedium" : "GmarketSansLight"};

    color: ${({ theme }) => theme.color.gray_text};

    &:hover{
        cursor: pointer;
    }
`

export const Articles = styled.div`
    padding : 20px 0;
    width : 75%;
    display: flex;
    flex-direction: column;
    justify-content : start;
    align-items: start;
    gap : 20px;
    background-color: red;
    height : 100%;
`
