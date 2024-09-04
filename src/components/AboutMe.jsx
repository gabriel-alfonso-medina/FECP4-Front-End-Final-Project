import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../assets/FECP-ProfilePicture.jpg';

function AboutMe() {
  return (
    <Container>
      <Image src={ProfileImage} alt="Gabriel Alfonso Voltaire J. Medina" />
      <Header>About Me</Header>
      <Paragraph>
      Hi, I’m Gabriel Alfonso Voltaire J. Medina, and welcome to Kusina ni Medina!
I have a deep passion for cooking and a desire to inspire others to join me in the kitchen.

This website is a personal project created as part of my Fintech Engineering Cadetship Program. It reflects my love for cooking by providing a collection of recipes for you to try at home.

I hope you enjoy exploring the site. If this project sparks your own culinary adventure, then I’ll consider it a success. Happy cooking!
      </Paragraph>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #494949;
  margin-bottom: 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 600px;
`;

export default AboutMe;
