import React from 'react';
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import {Box,Container,Left,Logo,Description,SocialContainer,SocialIcon,Title,Right,ContactItem,Rights, Center} from './style'


const Footer = () => {
  return (
      <Box id="kontakt">
    <Container>
        <Left>
            <Title>KORISNI LINKOVI</Title>
            <ContactItem href="https://www.adoc-pharma.com" target="_blank" rel="noopener noreferrer">Besne knjige</ContactItem>
            <ContactItem href="https://www.oliva.rs/product/nuronorm-tbl-20-adoc" target="_blank" rel="noopener noreferrer">knjige</ContactItem>
            <ContactItem href="/politika-privatnosti">Politika privatnosti</ContactItem>
        </Left>
        <Center>
            <Logo>KNJIGE</Logo>
            <Description>Ovlašćeni predstavnik/distributer Besne knjige Beograd</Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Center>
        <Right>
            <Title>KONTAKT</Title>
            <ContactItem href="tel:+3810113051512"><Phone style={{marginRight:'10px'}}/>tel</ContactItem>
            <ContactItem href="mailto:office@adocpharma.com"><MailOutline style={{marginRight:'10px'}}/>mail</ContactItem>
            <ContactItem href="" target="_blank" rel="noopener noreferrer"><Room style={{marginRight:'10px'}}/>adresa</ContactItem>
        </Right>
    </Container>
    <Rights>© 2022 Besne knjige Beograd. All rights reserved.</Rights>
    </Box>
  )
}

export default Footer