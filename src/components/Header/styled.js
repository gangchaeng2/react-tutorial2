import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  line-height: 70px;
  background-color: #20232a;
  text-align: right;
  
  > a {
    color: #fff;
    
    & + a {
      margin-left: 20px;
    }
  }
`