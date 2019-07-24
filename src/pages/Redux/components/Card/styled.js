import styled from 'styled-components'

// const Clearfix = `
//   &::after {
//     display: block;
//     content: "";
//     clear: both;
//   }
// `

export const Li = styled.li`
  float: left;
  width: 240px;
  padding: 5px;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  & + li {
    margin-top: 10px;
  }
`