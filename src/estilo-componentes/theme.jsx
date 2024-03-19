import styled from "styled-components";

export const colors={
    primary: 'blue',
    seconday: 'darkgray',
    danger: 'red',
    warning: 'yellow',
    morado:'#920892'
};

export const theme ={
    fg:'white',
    bg: '#F7418F'
};

export const invertThem = ({fg,bg}) => ({
    fg: bg,
    bg: fg
});

export const Button = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1.1em;
    margin: 10x;
    padding: 1em ;
    border-radius: 12px;
    cursor: pointer;
    text-align: center;

    width: 200px; 
    height:65px; 
    margin-left: 700px; 
    margin-right: 100px; 
`;