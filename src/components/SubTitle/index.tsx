import { ReactNode } from 'react'
import { StyledSubTitle } from './styles'

interface SubTitleProps {
  children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return <StyledSubTitle>{children}</StyledSubTitle>
}
