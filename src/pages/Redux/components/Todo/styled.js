import styled from 'styled-components'

import { Input, Button } from '../../../../components/Style'

const Clearfix = `
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`

export const Wrap = styled.div`
  ${Clearfix};
  /* display: flex;
  align-items: center; */
  width: 700px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;

  button {
    float: right;
  }
`

export const InputText = styled(Input)``

export const Btn = styled(Button)`
  border: 1px solid;
  margin-left: 10px;
`

export const CardWrap = styled.ul`
  ${Clearfix};
  float: left;
  width: 250px;
  max-height: 900px;
  background-color: #ddd;
  padding: 10px 5px;

  & + & {
    margin-left: 5px;
  }
`

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`

export const TextArea = styled.textarea`
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  color: #444;
  font-size: 15px;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  background-color: ${props => props.value ? '#fff' : '#fbfbfb'};
  outline: none;
  box-sizing: border-box;
  resize: none;
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
`