import React, { useState, useEffect, ChangeEvent } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { updateUf, updateCity } from '../../store/slices/localizationSlice'
import { store } from '../../store';

import './inputStyles.css'
import Earth from '../../assets/save-earth.svg'
import { DonationSection, Form, CityInformation, Title, Text, TitleDonationInfo, TextCardDonationInfo, SpanCardDonationInfo, SaveEarthSVG, TitleDonationInfoSpan, CloseBtn } from './styles';

import AprovedBtn from '../common/AprovedBtn';

type IBGEUFResponse = {
    id: number;
    sigla: string;
    nome: string;
}

type IBGECityResponse = {
    id: number;
    nome: string;
}

export default function Donation() {

    const dispatch = useDispatch();
    const ufSelector = useSelector((state: any) => state.uf);
    const citySelector = useSelector((state: any) => state.city);

    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECityResponse[]>([]);
    const [localInformation, setLocalInformation] = useState<any>({});
    const [showLocalInformation, setShowLocalInformation] = useState(false);
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const $inputValueDonatin = document.getElementById('inputValueDonation') as HTMLInputElement;
    const $inputName = document.getElementById('inputName') as HTMLInputElement;

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setUfs(response.data);
            })
    }, [])

    useEffect(() => {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                setCities(response.data);
            })
    }, [selectedUf])

    useEffect(() => {

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const city: any = response.data;
                city.map((city: any) => {
                    if (city.nome === selectedCity) {
                        setLocalInformation(city);
                    }
                })
                setCities(response.data);
            })
    }, [selectedCity])

    function handleShowDonationContainer() {
        const $valueDonation = document.getElementById('inputValueDonation') as HTMLInputElement;
        const $name = document.getElementById('inputName') as HTMLInputElement;
        const $selectUf = document.getElementById('selectUf') as HTMLSelectElement;

        $valueDonation.value = '';
        $name.value = '';
                
        setSelectedUf('0');
        $selectUf.value = '0';
        setShowLocalInformation(false);
    }

    function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        dispatch(updateUf(uf))
        setSelectedUf(uf)
    }

    function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        dispatch(updateCity(city));       
        setSelectedCity(city);
    }

    function handleShowDonationInfo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const $valueDonation = document.getElementById('inputValueDonation') as HTMLInputElement;
        const $name = document.getElementById('inputName') as HTMLInputElement;
        const $selectUf = document.getElementById('selectUf') as HTMLInputElement;
        const $selectCity = document.getElementById('selectCity') as HTMLInputElement;

        if ($selectCity.value === '0' || $selectUf.value === '0' || $name.value === '' || $valueDonation.value === '') {
            toast.warn("Preencha todos os campos por gentileza!");
            return
        }

        toast.success("Doação feita com sucesso, obrigado!")
        setTimeout(() => {
            setShowLocalInformation(true);
        }, 10);                     
    }

    return (
        <DonationSection className='container col col-lg-5'>
            <div style={!showLocalInformation ? { display: 'block' } : { display: 'none' }} data-aos="flip-left" data-aos-duration="1500" >
                <div className='row text-center'>
                    <Title>
                        Faça uma doação para nós ajudar
                    </Title>
                </div>
                <div className='row text-center'>
                    <Text>
                        Sua doação vai nos ajudar a investir ainda mais em pesquisas
                    </Text>
                </div>
                <Form className='row'>
                    <div className='inputContainer col-6'>
                        <input
                            className='inputUser'
                            id='inputValueDonation'
                            type="number"
                            name="nome"
                            required
                            autoComplete="off"
                        />
                        <label
                            className='label-in'
                            htmlFor="nome"
                        >
                            <span className='input-span gx-0 mx-0 px-0'>
                                Valor da doação
                            </span>
                        </label>
                    </div>
                    <div className='inputContainer col-6'>
                        <input
                            className='inputUser'
                            id='inputName'
                            type="text"
                            name="nome"
                            required
                            autoComplete="off"
                        />
                        <label
                            className='label-in'
                            htmlFor="nome"
                        >
                            <span className='input-span gx-0 mx-0 px-0'>
                                Seu nome
                            </span>
                        </label>
                    </div>
                    <div className='selectContainer Container col-10 text-center'>
                        <Text className='mt-4'>Só para sabermos informe de que estado e cidade você é:</Text>
                        <select
                            className='selectUser me-4'
                            name='city'
                            id='selectUf'
                            onChange={handleSelectedUf}
                            required
                        >
                            <option value="0">Selecione a UF</option>
                            {ufs.map((uf) => (
                                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                            ))}
                        </select>
                        <select
                            className='selectUser'
                            name='city'
                            id='selectCity'
                            onChange={handleSelectedCity}
                            disabled={selectedUf === '0' ? true : false}
                            required
                        >
                            <option value="0">Selecione a cidade</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.nome}>{city.nome}</option>
                            ))}
                        </select>
                        <div className='text-center mt-4'>
                            <AprovedBtn text={'Doar'} action={handleShowDonationInfo} />
                        </div>
                    </div>
                </Form>
            </div>


            {showLocalInformation ?
                <CityInformation data-aos="-right" data-aos-duration="1500" className='row' >
                    <div className='d-flex justify-content-center mb-0 pb-0'>
                    <TitleDonationInfoSpan className='text-center col-5'>Obrigado por sua doação</TitleDonationInfoSpan>
                    <CloseBtn className='' onClick={handleShowDonationContainer}>X</CloseBtn>
                    </div>                    
                    <TitleDonationInfo className='text-center col-5'>
                        Informações sobre sua doação:
                    </TitleDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        Doador:
                        <SpanCardDonationInfo className='ms-2'>
                            {$inputName.value}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        Valor:
                        <SpanCardDonationInfo className='ms-2'>
                            {`${$inputValueDonatin.value} R$`}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        Microrregião:
                        <SpanCardDonationInfo className='ms-2'>
                            {localInformation.microrregiao.nome}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        Mesorregiao:
                        <SpanCardDonationInfo className='ms-2'>
                            {localInformation.microrregiao.mesorregiao.nome}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        Município:
                        <SpanCardDonationInfo className='ms-2'>
                            {citySelector}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        UF:
                        <SpanCardDonationInfo className='ms-2'>
                            {ufSelector}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <TextCardDonationInfo className='ms-4 mb-0 col col-lg-6'>
                        Região do municipio:
                        <SpanCardDonationInfo className='ms-2'>
                            {localInformation.microrregiao.mesorregiao.UF.regiao.nome + ' - ' + localInformation.microrregiao.mesorregiao.UF.regiao.sigla}
                        </SpanCardDonationInfo>
                    </TextCardDonationInfo>
                    <SaveEarthSVG src={Earth} alt='save-earth' />
                </CityInformation>

                :

                <div></div>}

        </DonationSection >
    )
}