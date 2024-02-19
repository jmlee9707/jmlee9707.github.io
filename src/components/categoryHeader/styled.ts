
import styled from "@emotion/styled";


export const Wrapper = styled.div`
    padding : 30px 0;
    width : 100%;
    display:  flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
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

