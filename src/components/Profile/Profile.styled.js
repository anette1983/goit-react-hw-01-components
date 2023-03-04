import styled from 'styled-components';


export const StyledDiv = styled.div`
max-width: 300px;

margin: 40px auto 0;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
border: 1px solid #e9eef3;
border-radius: 0px 0px 4px 4px;

/* display: flex;
align-items: center;
justify-content: center;
border: 1px solid grey;
border-radius: 4px;
max-width: 300px;
width: 100%;
margin-bottom: 10px;
padding: 10px; */

`

export const StyledDescrDiv = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
padding-bottom: 32px;
background-color: pink;
color: #000;

img {
border-radius: 50%;
border: 5px solid #e2c9c9;
background-color: white;
max-width: 100px;
margin-bottom: 30px;
margin-top: 30px;
}

`

export const StyledUsernameP = styled.p`
font-weight: 900;
margin-bottom: 16px;
`

export const StyledTagP = styled.p`
  color: grey;
  margin-bottom: 16px;
`
