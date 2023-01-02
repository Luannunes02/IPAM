import styled from 'styled-components'

export const DonationSection = styled.section`
    margin-top: 2%;
    padding: 5rem 0;
    border-radius: 15rem;
    background-color: #14591d;
    border: 20px groove #cbffe0;
    height: 35em;

    @media screen and (min-width: 0px) and (max-width: 1628px) {
        & {
            padding: 1rem 0;
        }
}

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CityInformation = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Title = styled.h1`
    margin-top: 40px;
    text-shadow: 4px 1px 0px rgba(0,0,0,0.6);

    @media screen and (min-width: 1554px) and (max-width: 1628px) {
        & {
            font-size: 1.5em;
        }          
    }

    @media screen and (min-width: 1097px) and (max-width: 1554px) {
        & {
            margin-top: 70px;
            font-size: 1.3em;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1096px) {
        & {
            margin-top: 80px;
            font-size: 1.2em;
        }
    }

    @media screen and (min-width: 490px) and (max-width: 769px) {
        & {
            margin-top: 80px;
            font-size: 1.2em;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 489px) {
        & {
            margin-top: 80px;
            font-size: 1.2em;
        }
    }
`

export const Text = styled.p`
    text-shadow: 4px 3px 0px rgba(0,0,0,0.6);

    @media screen and (min-width: 1000px) and (max-width: 1310px) {
        & {
            font-size: 0.8em;
        }          
    }

    @media screen and (min-width: 1097px) and (max-width: 1200px) {
        & {
            
        }
    }

    @media screen and (min-width: 489px) and (max-width: 1097px) {
        & {
            font-size: 0.7em;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 488px) {
        & {
            font-size: 0.8em;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 437px) {
        & {
            font-size: 0.7em;
        }
    }
`

export const TitleDonationInfoSpan = styled.h5`
    font-size: 1.3em;
    font-weight: bolder;
    text-shadow: 4px 3px 0px rgba(0,0,0,0.6);
    margin-bottom: 0;
    color: #00ff80;
`

export const TitleDonationInfo = styled.h5`
    margin-top: 0;
    padding-bottom: 0;
    font-size: 1.3em;
    font-weight: bolder;
    text-shadow: 4px 3px 0px rgba(0,0,0,0.6);
    border-bottom: 3px solid #00ff80;
`

export const TextCardDonationInfo = styled.p`
    color: #00ff80;
    font-weight: bold;
    text-shadow: 4px 3px 0px rgba(0,0,0,0.6);
`

export const SpanCardDonationInfo = styled.span`
    text-shadow: 4px 3px 0px rgba(0,0,0,0.6);
    color: white;
`

export const CloseBtn = styled.p`       
    text-align: right;
    color: #00ff80;
    text-shadow: 0px -1px 50px rgba(0,0,47,1);
    font-weight: bolder;
    transition: all .3s;
    cursor: pointer;    

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

&:hover, &:focus, &:active {
  -webkit-transform: rotate(4deg);
  transform: rotate(4deg);
}
`

export const SaveEarthSVG = styled.img`
    width: 210px;

    @media screen and (min-width: 1200px) and (max-width: 1628px) {
        & {
            width: 210px;
        }          
    }

    @media screen and (min-width: 1097px) and (max-width: 1200px) {
        & {
            width: 190px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1097px) {
        & {
            width: 150px;
        }
    }

    @media screen and (min-width: 438px) and (max-width: 991px) {
        & {
            width: 230px;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 437px) {
        & {
            width: 180px;
        }
    }
`

/*
.inputBox {
    position: relative;
}

.inputUser {
    background: rgb(53, 50, 50);
    border: none;
    border-bottom: 1px solid white;
    font-size: 17px;
    height: 100%;
    width: 100%;
}

.labelin {
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
}

.inputUser:focus~.labelin,
.inputUser:valid~.labelin {
    top: -20px;
    font-size: 12px;
    color: rgb(255, 71, 71);
}

*/