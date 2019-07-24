import styled from 'styled-components'

import { Button } from '../../../../components/Style'

export const Wrap = styled.div`
  width: 700px;
  padding: 10px;
  border: 1px solid #d1d1d1;
`

export const BtnWrap = styled.div`
  margin-top: 20px;
  text-align: center;
`

export const Btn = styled(Button)`
  font-size: 15px;

   &.Plus {
    &:hover {
      color: #fff;
      border: 1px solid green;
      background-color: green;
    }
  }

  &.Minus {
    &:hover {
      color: #fff;
      border: 1px solid red;
      background-color: red;
    }
  }

  & + button {
    margin-left: 10px;
  }
`

export const Number = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`
