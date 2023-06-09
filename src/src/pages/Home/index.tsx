import { ButtonLink } from '../../components/ButtonLink'
import {
  ItemFormConteiner,
  LineFormConteiner,
  StyledFlex,
  ImageContainer,
  TitleFormConteiner,
  CardFormContainer,
} from './styles'
import { SubTitle } from '../../components/SubTitle'
import Jira from '../../assets/img/Jira.svg'
import Bitbucket from '../../assets/img/BitBucket.svg'
import GCP from '../../assets/img/GCP.svg'
import ViaVarejo from '../../assets/img/ViaVarejo.svg'
import TaQi from '../../assets/img/TaQi.svg'
import Gazin from '../../assets/img/Gazin.svg'
import NovoMundo from '../../assets/img/NovoMundo.svg'
import foto from '../../assets/fototeste.png'
import { Text } from '../../components/Text'
import { Card } from '../../components/Card'
import { Heading } from '../../components/Title'

export function Home() {
  return (
    <StyledFlex>
      <Heading>Stock Light Year</Heading>
      <SubTitle>
        <Text>
          O projeto tem como objetivo criar um modelo de dados para a análise do
          nível de abastecimento dos nossos clientes, através da integração de
          dados de Estoque e Sell Out dos mesmos. Acesse nossos links:
          <a href=""> https://google.com</a> .
        </Text>
      </SubTitle>
      <LineFormConteiner>
        <ItemFormConteiner>
          <ButtonLink css={{}}>
            <img src={Jira} alt="" />
            <span>Acessar Jira</span>
          </ButtonLink>
          <ButtonLink>
            <img src={Bitbucket} alt="" />
            <span>Acessar Bitbucket</span>
          </ButtonLink>
          <ButtonLink>
            <img src={GCP} alt="" />
            <span>Acessar GCP</span>
          </ButtonLink>
        </ItemFormConteiner>
      </LineFormConteiner>
      <TitleFormConteiner>
        <SubTitle css={{ fontSize: '30px', marginBottom: '-25px' }}>
          Automatizando Clientes
        </SubTitle>
        <Text css={{ marginBottom: '32px' }}>
          O processo manual atualmente realizado parao Magalu será automatizado
          fornecendo sugestões de pedidos, posicionamento de carteira e um
          Dashboard com indicadores da operação do ABI, até o momento será
          escalonado para 4 clientes que são eles:
        </Text>
      </TitleFormConteiner>
      <ImageContainer>
        <img src={ViaVarejo} alt="" />
        <img src={TaQi} alt="" />
        <img src={Gazin} alt="" />
        <img src={NovoMundo} alt="" />
      </ImageContainer>
      <TitleFormConteiner css={{ marginTop: '50px' }}>
        <SubTitle css={{ fontSize: '30px' }}>
          Equipe de Desenvolvimento
        </SubTitle>
        <Text css={{ marginTop: '2px', marginBottom: '0px' }}>
          Nossa equipe de desenvolvimento é formado por dois setores, que são
          eles Business e Technical:
        </Text>
        <SubTitle css={{ fontSize: '24px' }}>Business:</SubTitle>
      </TitleFormConteiner>
      <CardFormContainer>
        <Card pictureSrc={foto} name="John Freyts" job="Frontend Developer" />
        <Card pictureSrc={foto} name="Joao Freitas" job="Frontend Developer" />
        <Card pictureSrc={foto} name="John Doe" job="Frontend Developer" />
        <Card pictureSrc={foto} name="John Doe" job="Frontend Developer" />
      </CardFormContainer>
    </StyledFlex>
  )
}
