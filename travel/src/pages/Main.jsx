import React from "react";

import styled from "styled-components";

import Header from "../components/Header";

import { Link } from "react-router-dom";

const Main = () => {

  return (
    <>
      <Header />
      <HomeBody>
        <Link to='/PostAdd'>
          <WriteButton>
            <LogoImg src="/logo_1.png" />
          </WriteButton>
        </Link>

      </HomeBody>
    </>
  );
};

const HomeBody = styled.div`
  width: 1000px;
  margin: 90px auto;
   
`;
const WriteButton = styled.button`
  background: none;
  border: none;
  cursor:pointer;
  `;

const LogoImg = styled.img`
width: 130px;
height: 130px;
border-radius: 130px;
border: 3px solid #b2e1f4;
background: white;
`;


export default Main;