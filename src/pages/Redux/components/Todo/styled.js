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
  display: flex;
  align-items: center;
  width: 700px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
`

export const InputText = styled(Input)`
  & + input {
    margin-left: 10px;
  }
`

export const Btn = styled(Button)`
  border: 1px solid;
  margin-left: 10px;
`

export const CardWrap = styled.div`
  width: 100px;
  max-height: 900px;
  background-color: #ddd;
  padding: 20px 5px;
`
