import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  height: 8vh;
  border-radius: 0px;
  
`;

const DropDownContainer = styled("div")`
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.2rem;
  color: #101D69;
  border-radius: 5px;
  border-left: 10px;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10%;
  
  
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000000;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 5px;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;


export default function MyDropdown({options, type, itemval}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    itemval(value);
    setIsOpen(false);
    console.log(value);

  };

  return (
    <Main className = "rowC">
      <h3>{type}</h3>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Select Option"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
    
  );
}