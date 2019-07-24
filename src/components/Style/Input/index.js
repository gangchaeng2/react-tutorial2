import styled from 'styled-components'

const Input = styled.input.attrs({
  autoComplete: 'off'
})`
  height: 46px;
  padding: 0 15px;
  color: #444;
  font-size: 15px;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  background-color: ${props => props.value ? '#fff' : '#fbfbfb'};
  outline: none;
  box-sizing: border-box;
  -webkit-appearance: none;

  &:focus {
    border-color: #326cf9;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(42, 144, 255, 0.15);
  }

  &:disabled,
  &:read-only {
    color: #888;
    background-color: #fafafa;
  }

  &::-webkit-input-placeholder {
    color: #888;
  }
  &:-ms-input-placeholder {
    color: #888;
  }
  &::placeholder {
    color: #888;
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`

export default Input
