import React from 'react'
import styled from 'styled-components'


const Login = () => {

  const Container = styled.div`
    display: flex;
    flex: 1;
  `

  const Form = styled.form`
    background:rgba(#13232f,.9);
    padding: 40px;
    max-width:600px;
    margin:40px auto;
    border-radius:4px;
    box-shadow:0 4px 10px 4px rgba(#13232f,.3);
  `

  const Link = styled.a`
  font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    color: #A62349;
    text-decoration: none;
    padding-right: 20px;

    &:hover{
        color: #D07000;
        transition: 0.5s;
    }
  `

  const Tab = styled.ul`
    list-style:none;
    padding:0;
    margin:0 0 40px 0;

    &:after {
    content: "";
    display: table;
    clear: both;
  }
  `

  const ListLink = styled.a`
    display:block;
    text-decoration:none;
    padding: 15px;
    background: blue;
    color: gray;
    font-size:20px;
    float:left;
    width:50%;
    text-align:center;
    cursor:pointer;
    transition:.5s ease;

    &:hover {
      background: #002211;
      color: #fff;
    }
  `

  const Headline = styled.h1`
    text-align:center;
    color: #fff;
    font-weight:$thin;
    margin:0 0 40px;
  `

  const Label = styled.label`
    position:absolute;
    left:13px;
    color:rgba(#fff,.5);
    pointer-events: none;
    font-size:22px;
  `

  const Input = styled.input`
    font-size:22px;
    display:block;
    width:100%;
    height:100%;
    padding:5px 10px;
    background: none;
    background-image: none;
    border:1px solid gray;
    color:#fff;
    border-radius:0;
  `

   const Wrap = styled.div`
    position:relative;
    margin-bottom:40px;
   `

   const Button = styled.button`
    border:0;
    outline:none;
    border-radius:0;
    padding:15px 0;
    font-size:2rem;
    font-weight: bold;
    text-transform:uppercase;
    letter-spacing:.1em;
    background:#110000;
    color: #fff;
    transition:all.5s ease;
    -webkit-appearance: none;

  &:hover{
    background: #002211;
  }
   `

  return (
    <Container>
      <Form>
        <Tab>
          
        </Tab>
      </Form>

    
    
    
    </Container>
  )
}

export default Login