import styled from 'styled-components';


export const StyledUl = styled.ul`
/* display: flex;
align-items: center;
justify-content: center;
background-color: pink;
border-top: 1px solid red; */
align-items: center;
/* background-color: #e9eef3; */
background-color: #e2c9c9;
border-top: 1px solid #ddd;
display: flex;
justify-content: space-evenly;
width: 100%;
`
export const StyledLi = styled.li`
/* display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
width: 100px; */
align-items: center;
/* border-right: 1px solid #ddd; */
display: flex;
flex-direction: column;
/* padding: 15px; */
padding-top: 15px;
padding-bottom: 15px;
width: 100px;

&:not(:last-child){
border-right: 1px solid #ddd;
}
span:first-child{
    color: grey;
    font-size: 12px;
    margin-bottom: 5px
}
`
