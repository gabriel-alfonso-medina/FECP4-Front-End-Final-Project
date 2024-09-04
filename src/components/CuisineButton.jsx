import {FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function CuisineButton() {
  return (
    <List>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Asian'}>
            <GiChopsticks/>
            <h4>Asian</h4>
        </SLink>
        <SLink to={'/cuisine/Indian'}>
            <PiCookingPotFill/>
            <h4>Indian</h4>
        </SLink>
        <SLink to={'/cuisine/Vietnamese'}>
            <GiNoodles/>
            <h4>Vietnamese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #0F1931, #2D4159);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    transition: background-color 0.3s ease;

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &:hover {
        background: linear-gradient(35deg, #0F1931, #2D4159);
    }

    &.active{
        background: linear-gradient(35deg, #0F1931, #2D4159);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }
`;


export default CuisineButton