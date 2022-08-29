import React, { Component } from 'react';
import {Container,Wrapper,Left,Language,Center,Logo,Right,MenuItem, Dropdown, DropText, MenuIcon, Icon} from './style'

export default class Header extends Component
{
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render(){
        return (
          <Container>
              <Wrapper>
                   <Left>
                   <Language href='/#naslovna'>Nikola NIkolic</Language>
                   <Language href='/#naslovna'>POCETNA STRANICA</Language>
                   </Left>
                   <Center><a href='/#naslovna' style={{textDecoration: 'none' }}><Logo>KNJIGE</Logo></a></Center>
                   <Right>
                   <MenuItem href='/#dugovanje'>DUGOVANJA</MenuItem>
                   <MenuItem href='/#zaduzenje'>ZADUZENJA</MenuItem>
                   <MenuItem href='/#zahtev'>PREDLOG</MenuItem>
                   <MenuItem href='/#poruci' target="_blank" rel="noopener noreferrer">PORUČI</MenuItem>
                   <MenuItem href='/#zaduzenje'>IZLOGUJ</MenuItem>
                        <MenuIcon onClick={this.handleClick}>
                            <Icon className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></Icon>
                        </MenuIcon>
                   </Right>
              </Wrapper>
              <Dropdown style={this.state.clicked ? {display: 'flex'} : {display: 'none'}}>
              <DropText href='/#dugovanje' onClick={this.handleClick}>DUGOVANJA</DropText>
              <DropText href='/#zaduzenje' onClick={this.handleClick}>ZADUZENJA</DropText>              
              <DropText href='/#zahtev' onClick={this.handleClick}>PREDLOG</DropText>
              <DropText  href='/#poruci' target="_blank" rel="noopener noreferrer" onClick={this.handleClick}>PORUČI</DropText>
              <DropText href='/#zaduzenje' onClick={this.handleClick}>IZLOGUJ</DropText>
              </Dropdown>
          </Container>
        )
      }
      }

