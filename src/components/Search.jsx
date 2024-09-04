import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input 
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            value={input}
            placeholder="Search" 
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 2rem 20rem;
  
  div {
    position: relative;
    width: 100%;
    max-width: 100rem; 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border: none;
    background: #0F1931;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 1.5rem 1rem 3rem; 
    border-radius: 1rem;
    outline: none;
    width: 100% !important; 
    max-width: 100%;
    box-sizing: border-box; 
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem; 
    transform: translateY(-50%); 
    color: white;
    font-size: 1.5rem; 
  }
`;

export default Search;
