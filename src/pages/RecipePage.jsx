import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react'

function RecipePage() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeButton, setActiveButton] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);

    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return <DetailWrapper>
    <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
    </div>
    <Info>
        <Button className={activeButton=== 'instructions' ? 'active' : ''} onClick={() => setActiveButton('instructions')}>Instructions</Button>
        <Button className={activeButton=== 'ingredients' ? 'active' : ''} onClick={() => setActiveButton('ingredients')}>Ingredients</Button>
        
        {activeButton === 'instructions' && (
            <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
        )}
        
        {activeButton === 'ingredients' && (
            <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        )}
        
    </Info>

  </DetailWrapper>
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        max-width: 300px;
    }
    img{
        width: 300px; 
        height: auto; 
        border-radius: 15px; 
    }
    h2{
        margin-bottom: 2rem;
        max-width: 300px;
        word-wrap: break-word;
    }
    h3{
        max-width: 300px;
        word-wrap: break-word;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
        max-width: 300px;
        word-wrap: break-word;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    white-space: nowrap;
    max-width: 300px;
`;

const Info = styled.div`
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

export default RecipePage