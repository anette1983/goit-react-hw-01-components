import styled from 'styled-components';
export const StyledLi = styled.li`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid grey;
border-radius: 4px;
max-width: 300px;
width: 100%;
margin-bottom: 10px;
padding: 10px;

`
export const StyledSpan = styled.span`
border-radius: 50%;
width: 40px;
height: 40px;
background: ${props => props.isOnline ? "green" : "red"};
`