import { SubTitle } from '../../components/SubTitle'
import { Heading } from '../../components/Title'
import { Text } from '../../components/Text'
import { StyledFlex, TitleFlexConteiner } from './styles'

export function Sheets() {
  return (
    <StyledFlex>
      <TitleFlexConteiner>
        <Heading css={{ marginBottom: '-40px' }}>Sheets</Heading>
        <SubTitle>
          <Text>
            Nessa parte do processo será requisitado todas as métricas
            necessárias para o cálculo do robô.
          </Text>
        </SubTitle>
      </TitleFlexConteiner>
      {/* user &amp;rm=minimal top hide sheets options */}
      <iframe
        title="Planilha do Google"
        src="https://docs.google.com/spreadsheets/d/1xHwDFGfQQ06JLHmBgK7nV-a6oHblCJWRqmzekf_-gME/edit?usp=sharing"
        height="800"
        width="100%"
      ></iframe>
    </StyledFlex>
  )
}
