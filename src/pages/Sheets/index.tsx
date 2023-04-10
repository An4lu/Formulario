import { Button } from '../../components/Button'
import { CheckBox } from '../../components/Checkbox'
import { MultiSelect } from '../../components/MultiSelect'
import { SubTitle } from '../../components/SubTitle'
import MyTextarea from '../../components/TextArea'
import { Heading } from '../../components/Title'
import { PlayCircle } from '@phosphor-icons/react'
import {
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
  {
    value: 'agua',
    label: 'agua',
  },
  {
    value: 'terra',
    label: 'terra',
  },
  {
    value: 'fogo',
    label: 'fogo',
  },
  {
    value: 'ar',
    label: 'ar',
  },
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
            <SelectItem id="select">
              <option>M1</option>
              <option>M1</option>
            </SelectItem>
          </ItemFormContainer>
          <ItemFormContainer>
            <LabelText htmlFor="select1">MÊS DE PROJEÇÃO</LabelText>
            <SelectItem id="select1">
              <option>GMR M+1 | Plano Tático M+1</option>
              <option>M1</option>
            </SelectItem>
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemFormContainer>
            <LabelText htmlFor="select2">DIARIZAÇÃO</LabelText>
            <SelectItem id="select2">
              <option>OTL</option>
              <option>OTL</option>
            </SelectItem>
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <CheckboxContainer>
            <LabelText>RESERVA PRÉ DEFINIDA</LabelText>
            <CheckboxItem>
              <CheckBox>Reservas Consideradas Full</CheckBox>
              <CheckBox>Reservas Consideradas Full</CheckBox>
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
              <CheckBox>Projetar abastecimento BF</CheckBox>
              <CheckBox>Projetar abastecimento BF</CheckBox>
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
