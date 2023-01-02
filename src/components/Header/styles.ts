import styled from 'styled-components'

export const Navbar = styled.header`
    width: 100%;
    background-color: #28b37e;
    border-bottom: 4px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgLogo = styled.img`    
    width: 120px;
    height: 80px;
    cursor: pointer;
    transition: all .3s;
    margin: 0.7em 0;

   &:hover {
    filter: brightness(1.2);
   }
`;
