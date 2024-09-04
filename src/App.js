import Pages from "./pages/Pages";
import styled from "styled-components";
import CuisineButton from "./components/CuisineButton";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import { MdOutlineFoodBank } from "react-icons/md";


function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      <Nav>
        <MdOutlineFoodBank />
        <Logo to={"/"}>Kusina ni Medina</Logo>
      </Nav>
        <Search />
        <CuisineButton />
        <Pages />
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
  align-item: center;
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


export default App;
