import styled from 'styled-components'

export const Button = styled.button`
  width: ${props => props.width ? props.width : 100}px;
  height: 46px;
  border-radius: 3px;
  border: none;
  background-color: #326cf9;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 8px 19px 0 rgba(39, 103, 207, 0.24);
  outline: none;
  cursor: pointer;
`