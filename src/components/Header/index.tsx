import React from 'react';
import Logo from '../../assets/ipam-green.jpg'
import '../../styles/Header.css'
import styled from 'styled-components'

import { Navbar, ImgLogo } from './styles'

export default function Header() {
    return (
        <Navbar>
            <ImgLogo src={Logo} alt="IPAM-AMAZONIA-LOGO" className='logo container-fluid' />
        </Navbar>
    )
}