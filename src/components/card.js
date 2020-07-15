import React from "react";
import styled from "styled-components";

import { Colors } from "../components/common";
const Container = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 5px;
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
`;
const Name = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 5px;
`;
const Ammunition = styled.div`
  padding: 5px 10px;
  text-align: center;
  div {
    display: inline-block;
    padding: 5px;
    background-color: ${Colors.LIGHT_GREY};
    font-size: 12px;
    margin: 0px 10px;
  }
`;

const TypeCountry = styled.div`
  text-align: center;
  padding: 5px;
  font-weight: light;
  span {
    margin: 0px 10px;
  }
`;

const Item = styled.div`
  width: 100%;
`;

const Card = ({ item }) => {
  const { img, name, type, country, ammunition } = item;
  return (
    <Container data-test="component-card">
      <Item>
        <Image src={img} loading="lazy" />
        <Name>{name}</Name>
        <TypeCountry>
          <span>{type.toUpperCase()}</span>
          <span>{country}</span>
        </TypeCountry>

        <Ammunition>
          {ammunition.map((a, i) => (
            <div key={i}>{a}</div>
          ))}
        </Ammunition>
      </Item>
    </Container>
  );
};

export default Card;
