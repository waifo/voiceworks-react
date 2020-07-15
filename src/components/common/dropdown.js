import React, { useState } from "react";
import styled from "styled-components";

import Colors from "./colors";

const Select = styled.select`
  padding: 5px 10px;
  margin: 10px 0px;
  border: none;
  border-bottom: 2px solid ${Colors.GREY};
  opacity: 0.6;
  &:focus {
    border: none;
    border-bottom: 2px solid ${Colors.GREY};
    outline: none;
  }
`;

const Option = styled.option`
  padding: 5px;
  border: none;
`;

const defaulItem = ["loading"];
const Dropdown = ({ items = defaulItem, label, onChange }) => {
  return (
    <Select onChange={onChange}>
      <Option selected disabled>
        Select {label}
      </Option>
      {items.map((item) => {
        return (
          <Option key={item} data-value={item} data-key={label}>
            {item}
          </Option>
        );
      })}
    </Select>
  );
};

export default Dropdown;
