import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {

    const [popular, setPopular] = useState([]);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(()=> {
        getPopular();
    },[])

    const getPopular = async () => {
        const api = await fetch (
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
        const data = await api.json();
        setPopular(data.recipes);
        
    };

  return (
        <div>
            <Wrapper>
                <h3>Community Popular Picks</h3>
                <Splide options={{
                    perPage:4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem',
                }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card key={recipe.id}>
                                <Link to={"/recipe/" + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                {/* <Gradient /> */}
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
                </Splide>
            </Wrapper>
            {!hasInteracted && <SlideText>Slide left for more options</SlideText>}
        </div>
    );
}

const Wrapper = styled.div`
    margin: 1rem 1rem;
    

    .splide__track {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .splide__list {
        display: flex;
        flex-wrap: nowrap;
    }
`;

const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 10%; 
        transform: translate(-50%, 0); 
        color: white;
        width: calc(100% - 2rem); 
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        padding: 0.5rem; 
        background: rgba(0, 0, 0, 0.5); 
        border-radius: 2rem;
        height: auto; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const SlideText = styled.p`
    text-align: center;
    font-size: 1rem;
    color: #555;
`; 

export default Popular