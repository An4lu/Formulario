import styled from 'styled-components'

interface ContainerProps {
  backgroundColor: string
  hoverColor: string
}

export const Container = styled.button<ContainerProps>`
  width: 80px;
  height: 30px;
  border-style: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`
