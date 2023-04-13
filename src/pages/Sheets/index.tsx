import { Button } from '../../components/Button'
import { CheckBox } from '../../components/Checkbox'
import { MultiSelect } from '../../components/MultiSelect'
import { Select } from '../../components/Select'
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
  LineCheckItem,
  LabelText,
  LineFormItem,
  LineMultiSelect,
  LineTextArea,
  SelectItem,
} from './styles'
import { Controller, useForm } from 'react-hook-form'

const options = [
  { label: 'D2C', value: 'D2C' },
  { label: 'BF', value: 'BF' },
]

export const Sheets = () => {
  const {
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      monthSelect: '',
      projectionmonth: '',
      target: '',
      diarization: '',
      reservations: [],
      fullreservations: false,
      disponibility: false,
      supply1: false,
      supply2: false,
    },
  })

  const getValues = (data: any) => {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading>Stock Light Year</Heading>
        <SubTitle>
          Aqui você irá parametrizar dados para o cálculo de reserva.
        </SubTitle>
      </Header>

      <FormContainer onSubmit={handleSubmit(getValues)}>
        <LineFormItem>
          <ItemFormContainer>
            <LabelText htmlFor="select">MÊS DE PROJEÇÃO</LabelText>
            <SelectItem>
              <Controller
                name="monthSelect"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} id="select" />
                )}
              />
            </SelectItem>
          </ItemFormContainer>
          <ItemFormContainer>
            <LabelText htmlFor="select1">TARGET PARA RESERVA</LabelText>
            <SelectItem id="select1">
              <Controller
                name="target"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} id="select1" />
                )}
              />
            </SelectItem>
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <ItemFormContainer>
            <LabelText htmlFor="select2">DIARIZAÇÃO</LabelText>
            <SelectItem id="select2">
              <Controller
                name="diarization"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} id="select2" />
                )}
              />
            </SelectItem>
          </ItemFormContainer>
        </LineFormItem>
        <LineFormItem>
          <CheckboxContainer>
            <LabelText>RESERVA PRÉ DEFINIDA</LabelText>
            <LineCheckItem>
              <CheckboxItem>
                <Controller
                  name="fullreservations"
                  control={control}
                  render={({ field }) => (
                    <CheckBox onValueChange={field.onChange} id="c1" />
                  )}
                />
                <CheckText htmlFor="c1">Reservas Consideradas Full</CheckText>
              </CheckboxItem>
              <CheckboxItem>
                <Controller
                  name="disponibility"
                  control={control}
                  render={({ field }) => (
                    <CheckBox onValueChange={field.onChange} id="c2" />
                  )}
                />
                <CheckText htmlFor="c2">
                  Gds BF Oferta Disponibilidade
                </CheckText>
              </CheckboxItem>
            </LineCheckItem>
          </CheckboxContainer>
        </LineFormItem>
        <LineFormItem>
          <LineMultiSelect>
            <LabelText htmlFor="rsvt">RESERVAS CONSIDERADAS</LabelText>
            <Controller
              name="reservations"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  options={options}
                  onChange={field.onChange}
                  id="rsvt"
                />
              )}
            />
          </LineMultiSelect>
        </LineFormItem>
        <LineFormItem>
          <CheckboxContainer>
            <LabelText>PROJEÇÕES EXTRAS</LabelText>
            <LineCheckItem>
              <CheckboxItem>
                <Controller
                  name="supply1"
                  control={control}
                  render={({ field }) => (
                    <CheckBox onValueChange={field.onChange} id="c3" />
                  )}
                />
                <CheckText htmlFor="c3">Projetar abastecimento BF</CheckText>
              </CheckboxItem>
              <CheckboxItem>
                <Controller
                  name="supply2"
                  control={control}
                  render={({ field }) => (
                    <CheckBox onValueChange={field.onChange} id="c4" />
                  )}
                />
                <CheckText htmlFor="c4">Projetar abastecimento BF</CheckText>
              </CheckboxItem>
            </LineCheckItem>
          </CheckboxContainer>
        </LineFormItem>
        <LineFormItem>
          <LineTextArea>
            <LabelText htmlFor="teste">MÊS DE PROJEÇÃO</LabelText>
            <Controller
              name="projectionmonth"
              control={control}
              render={({ field }) => (
                <MyTextarea onValueChange={field.onChange} id="teste" />
              )}
            />
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
