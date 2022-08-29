import styled from "styled-components"
import { mobile, midsize, mobtel } from '../../responsive'


const Box = styled.div`
`
const Container = styled.div`
    display: flex;
    background: #FFC090;
    color: #A62349;
    position: relative;

    
    ${mobtel({flexDirection: 'column'})}
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    justify-content: center;
    align-items: center;
    
    ${midsize({display: 'none'})}
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

`
const Logo = styled.h1`
    cursor: default;
`
const Description = styled.p`
    margin: 20px 0;
    cursor: default;
    
    ${mobile({fontSize: '14px'})}
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    justify-content: center;
    align-items: center;
    
`
const ContactItem = styled.a`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #A62349;
    cursor: pointer;
    
    ${mobile({fontSize: '14px'})}

    &:hover{
        color: #D07000;
        transition: 0.5s;
    }
`
const Rights = styled.div`
    height: 60px;
    background-color: #FDEEDC;
    color: #A62349;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    
    ${mobile({fontSize: '14px'})}
`
export{
    Box,
Container,
Left,
Logo,
Description,
SocialContainer,
SocialIcon,
Title,
Right,
ContactItem,
Rights,
Center,
}