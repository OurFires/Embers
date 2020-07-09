import React from 'react';
import styled from 'styled-components'

const Button = ({ buttonData: { goo } }) => {
  return (
    <ButtonWrapper className="button">
      <input type="text" value={goo} readOnly={true} />
    </ButtonWrapper>
  );
 }
export default Button


const ButtonWrapper = styled.div`
background-color:blue;
`;