import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./theme";


 /*export const Button = styled.button`
     background: #EE99C2;
     border-radius: 3px;
     border: 2px solid #F7418F;
     color: ${colors.morado};
     font-size: 0.9em;
     margin: 0;
     padding: 0.25em 1em;
     cursor: pointer;
`;*/

export const Header = styled.header`
    display: flex;
    background-color:#FFE4C9;
    color: black;
    flex-direction: row;
    align-content: center;
    padding: 5px;
    justify-content: space-between;
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
  
`;

export const BtnLink = styled.button`
    background-color: white;
    padding: 0%.5em;
    border-radius: 1px;
    border: 0px;
    cursor: pointer;
    margin-bottom: 0.7em;
`;

export const DetailsCont = styled.div`
    background-color: aliceblue;
    padding: 0.5em;
    border-radius: 15px;
    margin-top: 1em;
    width: 500px; 
    height: 200px; 
    margin-left: auto; 
    margin-right: auto; 
    h3,h4{
        color: black;
        
    };
`

