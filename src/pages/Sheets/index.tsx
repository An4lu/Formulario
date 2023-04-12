import { Button } from '../../components/Button'
import { CheckBox } from '../../components/Checkbox'
import { MultiSelect } from '../../components/MultiSelect'
import { mySelect } from '../../components/Select'
import MyTextarea from '../../components/TextArea'
import { Heading } from '../../components/Title'
import { SubTitle } from '../../components/SubTitle'
import { PlayCircle } from '@phosphor-icons/react'
import {
  CheckText,
  CheckboxContainer,
  CheckboxItem,
  Container,
  FormContainer,
  Header,
  ItemFormContainer,
  LabelText,
  LineFormItem,
  LineMultiSelect,
  LineTextArea,
  SelectItem,
} from './styles'

const options = [
  { label: 'D2C', value: 'D2C' },
  { label: 'BF', value: 'BF' },
]

export const Sheets = () => {
  return (
    <Container>
      <Header>
        <Heading>Stock Light Year</Heading>
        <SubTitle>
          Aqui você irá parametrizar dados para o cálculo de reserva.
        </SubTitle>
      </Header>

      <FormContainer>
        <LineFormItem>
          <ItemFormContainer>
            <LabelText htmlFor="select">MÊS DE PROJEÇÃO</LabelText>
            <SelectItem id="select">{mySelect()}</SelectItem>
          </ItemFormContainer>
          <ItemFormContainer>
            <LabelText htmlFor="select1">TARGET PARA RESERVA</LabelText>
            <SelectItem id="select1">{mySelect()}</SelectItem>
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemFormContainer>
            <LabelText htmlFor="select2">DIARIZAÇÃO</LabelText>
            <SelectItem id="select2">{mySelect()}</SelectItem>
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <CheckboxContainer>
            <LabelText>RESERVA PRÉ DEFINIDA</LabelText>
            <CheckboxItem>
              <CheckBox>
                <CheckText>Reservas Consideradas Full</CheckText>
              </CheckBox>
              <CheckBox>
                <CheckText>Gds BF Oferta Disponibilidade</CheckText>
              </CheckBox>
            </CheckboxItem>
          </CheckboxContainer>
        </LineFormItem>
        <LineFormItem>
          <LineMultiSelect>
            <LabelText>RESERVAS CONSIDERADAS</LabelText>
            <MultiSelect options={options} />
          </LineMultiSelect>
        </LineFormItem>
        <LineFormItem>
          <CheckboxContainer>
            <LabelText>PROJEÇÕES EXTRAS</LabelText>
            <CheckboxItem>
              <CheckBox>
                <CheckText>Projetar abastecimento BF</CheckText>
              </CheckBox>
              <CheckBox>
                <CheckText>Projetar abastecimento BF</CheckText>
              </CheckBox>
            </CheckboxItem>
          </CheckboxContainer>
        </LineFormItem>
        <LineFormItem>
          <LineTextArea>
            <LabelText>MÊS DE PROJEÇÃO</LabelText>
            <MyTextarea></MyTextarea>
          </LineTextArea>
        </LineFormItem>
        <Button css={{ alignSelf: 'end' }}>
          <PlayCircle size={22} weight="bold" />
          Executar
        </Button>
      </FormContainer>
    </Container>
  )
}
