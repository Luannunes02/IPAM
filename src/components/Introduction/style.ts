import styled from 'styled-components'

export const TitleDiv = styled.div`
    border: 5px double #005d17;
    border-radius: 200px 95px 152px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const Title = styled.h1`    
    color: #000;
    font-size: 4em;
    font-weight: bold;    
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    text-shadow: 3px 3px 5px rgba(0,85,11,0.6);

    @media screen and (min-width: 1554px) and (max-width: 1628px) {
        & {
            font-size: 3.5em;
        }          
    }

    @media screen and (min-width: 1097px) and (max-width: 1554px) {
        & {            
            font-size: 3.5em;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 1096px) {
        & {
            font-size: 3.0em;
        }
    }

    @media screen and (min-width: 498px) and (max-width: 769px) {
        & {
            font-size: 2.5em;
        }
    }

    @media screen and (min-width: 373px) and (max-width: 497px) {
        & {
            font-size: 1.4em;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 372px) {
        & {
            font-size: 0.8em;
        }
    }
`

export const ImgIPAM = styled.img`
    margin-left: 40px;
    width: 140px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Text = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    text-shadow: 3px 3px 0px rgba(0,8,11,1);

    @media screen and (min-width: 1554px) and (max-width: 1628px) {
        & {
            font-size: 1.3em;
        }          
    }

    @media screen and (min-width: 1097px) and (max-width: 1554px) {
        & {            
            font-size: 1.3em;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 1096px) {
        & {
            font-size: 1.2em;
        }
    }

    @media screen and (min-width: 498px) and (max-width: 769px) {
        & {
            font-size: 1.1em;
        }
    }

    @media screen and (min-width: 373px) and (max-width: 497px) {
        & {
            font-size: 1.0em;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 372px) {
        & {
            font-size: 0.8em;
        }
    }
`

export const DivText = styled.div`
    background-color: rgba(0,0,0,0.2);
    border-radius: 11px 20px 132px 6px;
`
