import React from 'react'
import IPAMLogo from '../../assets/ipam.png'
import Image1 from '../../assets/amazonia1.jpg'
import Image2 from '../../assets/amazonia2.jpg'
import Image3 from '../../assets/amazonia3.jpg'
import { ImgIPAM, Title, Text, DivText, TitleDiv } from './style'
import './styles.css'

export default function Introduction() {
    return (
        <section id='teste'>
            <div className='container'>
                <div className='row' data-aos="fade-down" data-aos-duration='1000'>
                    <TitleDiv className='col mt-5'>
                        <ImgIPAM className='col-4' src={IPAMLogo} alt='ipam-logo' />
                        <Title className='col text-center mt-5'>CONHEÇA A IPAM AMAZÔNIA</Title>
                    </TitleDiv>

                </div>
                <div className='row mt-5 justify-content-end'>
                    
                    <DivText className='col col-lg-12 mb-4' data-aos="fade-right" data-aos-duration='1000'>
                        <Text>O Instituto de Pesquisa Ambiental da Amazônia é uma organização científica, não-governamental e sem fins lucrativos estabelecida em Belém do Pará, Brasil, no ano de 1995. O IPAM trabalha para promover ciência, educação e inovação para uma Amazônia ambientalmente saudável, economicamente próspera e socialmente justa.</Text>
                        <Text>
                            Com o apoio de cerca de cem colaboradores distribuídos em oito escritórios/unidades de pesquisa, o instituto trabalha gerando informações e fomentando iniciativas para subsidiar políticas públicas, iniciativas locais e acordos internacionais. Atividades estas realizadas com a participação de agricultores familiares, produtores rurais, povos indígenas, comunidades tradicionais e diferentes setores do governo. As pesquisas e a atuação do IPAM são conduzidas por pesquisadores com excelência acadêmica nacional e internacional.
                        </Text>
                    </DivText>
                </div>
            </div>
        </section>
    )
}