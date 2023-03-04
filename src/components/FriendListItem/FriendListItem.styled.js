import styled from 'styled-components';
export const StyledLi = styled.li`
display: flex;
align-items: center;
/* justify-content: center; */
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
border: 1px solid #e9eef3;
border-radius: 0px 0px 4px 4px;
max-width: 300px;
width: 100%;
padding: 10px;
&:not(:last-child) {
 margin-bottom: 10px;
}
img {
    margin-right: 15px;

}

`
export const StyledSpan = styled.span`
margin-right: 10px;
border-radius: 50%;
width: 15px;
height: 15px;
background: ${props => props.isOnline ? "green" : "red"};
`