import styled from 'styled-components';

export const StyledTable = styled.table`
max-width: 768px;
width: 100%;
margin: 50px auto;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;
thead {
    background-color: #47bcbc;
    color: #fff;
    height: 40px;
}
tr {
    height: 30px;
    text-align: center;
    &:nth-child(2n) {
    background-color: #e9f2f4;
}
}

`
