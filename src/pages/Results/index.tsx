import { Heading } from '../../components/Title'
import { StyledFlex, TitleFlexConteiner } from './styles'

export function Results() {
  return (
    <StyledFlex>
      <TitleFlexConteiner>
        <Heading css={{ marginBottom: '-40px', marginLeft: '-7px' }}>
          Resultados
        </Heading>
      </TitleFlexConteiner>
    </StyledFlex>
  )
}
