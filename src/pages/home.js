import React, { useState, useEffect, useMemo } from "react";
import styled, { css } from "styled-components";

import { Card } from "../components";
import { Dropdown, MediaQuery } from "../components/common";
import { testApi } from "../api";
import { filterData, groupKeys } from "../utils";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  ${MediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
  grid-gap: 20px;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 40px 0px;
`;

const H3 = styled.h3`
  text-align: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${MediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
  grid-gap: 10px;
`;

const FilterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${MediaQuery.mobile(css`
    justify-content: center;
  `)}
`;

const Box = styled.div`
  background-color: black;
  padding: 2px 5px;
  margin: 5px;
  color: white;
`;
const Remove = styled.div`
  display: inline-block;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
`;

const Home = () => {
  const [data, setData] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});

  useEffect(() => {
    testApi.fetchData((error, data) => {
      setData(data);
    });
  }, []);
  const filteredData =
    useMemo(() => filterData(data, activeFilters), [data, activeFilters]) || [];
  const keyData = useMemo(() => groupKeys(filteredData), [filteredData]) || [];

  const onDropdownSelect = (event) => {
    let key = event.target.options[event.target.selectedIndex].dataset.key;
    let value = event.target.options[event.target.selectedIndex].dataset.value;

    setActiveFilters({ ...activeFilters, [key]: value });
  };

  const removeFilter = (event, key) => {
    const filters = { ...activeFilters };
    delete filters[key];
    setActiveFilters(filters);
  };

  return (
    <>
      <H1>Tankomania</H1>
      <Container>
        <Left>
          {Object.keys(keyData).map((k) => (
            <Dropdown
              items={keyData[k]}
              label={k}
              key={k}
              onChange={onDropdownSelect}
            />
          ))}
          {Object.keys(activeFilters).length ? <H3>Filters</H3> : null}
          <FilterDiv>
            {Object.keys(activeFilters).map((key, i) => (
              <Box key={i}>
                {activeFilters[key]}
                <Remove onClick={(event) => removeFilter(event, key)}>
                  &#10006;
                </Remove>
              </Box>
            ))}
          </FilterDiv>
        </Left>
        <Right>
          {filteredData.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </Right>
      </Container>
    </>
  );
};

export default Home;
