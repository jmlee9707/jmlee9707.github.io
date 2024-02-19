import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Wrapper = styled.div`
    width : 100%;
    display:  flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

`
export const SelectedSection = styled.div`

    padding : 30px 0;
    width : 100%;
    color: ${({ theme }) => theme.color.black};
    
    div{
        &:first-child{
            font-size : 22px;
            font-weight: 700;
            padding-bottom: 12px;
        }
        &:nth-child(2){
            font-size : 18px;
            font-family: GmarketSansLight;
            font-weight: 400;
        }
    }

`


export const MainSection = styled.div`
    width : 100%;
    padding : 10px 0;
    display: flex;
    justify-content: space-between;
    gap : 16px;

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
`
