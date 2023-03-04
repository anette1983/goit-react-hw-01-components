import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomColor.js';

export const StyledLi = styled.li`
/* background-color: rgb(83, 71, 125);  */
background-color: ${getRandomHexColor};
/* тут фкция */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
color: #dddddd;
/* як зарендерити колір тексту по умові в залежності від кольору бг? */
padding-top: 20px;
padding-bottom: 20px;
`