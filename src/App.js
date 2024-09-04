import Pages from "./pages/Pages";
import styled from "styled-components";
import CuisineButton from "./components/CuisineButton";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { MdOutlineFoodBank } from "react-icons/md";


function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      <Nav>
        <MdOutlineFoodBank />
        <Logo to={"/"}>Kusina ni Medina</Logo>
        <AboutButton to="/about">About Me</AboutButton>
      </Nav>
        <Search />
        <Pages />
        <CuisineButton />
      </BrowserRouter>
    </AppContainer>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #C89768;

  svg {
    font-size: 2rem;
  }
`;

const AppContainer = styled.div`
  border: 3rem solid #e6e6fa;
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 1rem;
`;

const AboutButton = styled(Link)`
  padding: 0.5rem 1rem;
  background: linear-gradient(35deg, #0F1931, #2D4159);
  color: white;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(35deg, #0F1931, #2D4159);
  }
`;


export default App;
