import { Button } from '../../components/Button'
import { CheckBox } from '../../components/Checkbox'
import { MultiSelect } from '../../components/MultiSelect'
import { Select } from '../../components/Select'
import { Heading } from '../../components/Title'
import { SubTitle } from '../../components/SubTitle'
import {
  DownloadSimple,
  PlayCircle,
  Question,
  UploadSimple,
} from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
  FormLabelText,
  LineFormButton,
} from './styles'
import { Controller, useForm } from 'react-hook-form'
import { Text } from '../../components/Text'
import { useState } from 'react'

const options = [
  { label: 'D2C', value: 'D2C' },
  { label: 'BF', value: 'BF' },
]

const formValidationSchema = zod.object({
  monthSelect: zod.string().min(1, 'Selecione um mês de projeção'),
  projectionmonth: zod.string().min(1, 'Preencha o campo de mês de projeção'),
  target: zod.string().min(1, 'Selecione um target para reserva'),
  diarization: zod.string().min(1, 'Selecione uma diarização'),
  reservations: zod
    .array(
      zod.object({
        value: zod.string(),
        label: zod.string(),
      }),
    )
    .min(1, 'Selecione uma Reserva'),
  fullreservations: zod.boolean(),
  disponibility: zod.boolean(),
  supply1: zod.boolean(),
  supply2: zod.boolean(),
})
type CreateSimulationData = zod.infer<typeof formValidationSchema>

export const Simulations = () => {
  const [showSecond, setShowSecond] = useState(false)
  const [showMultiSelect, setshowMultiSelect] = useState(true)
  const { handleSubmit, formState, control } = useForm<CreateSimulationData>({
    resolver: zodResolver(formValidationSchema),
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

  console.log(formState.errors)

  const getValues = (data: any) => {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading>Outlook de Abastecimento da Reserva</Heading>
        <SubTitle>
          <Text css={{ marginTop: '-15px', marginBottom: '0px' }}>
            Aqui você irá parametrizar dados para Outlook de abastecimento da
            reserva.
          </Text>
        </SubTitle>
      </Header>

      <FormContainer onSubmit={handleSubmit(getValues)}>
        <LineFormItem>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="select">MÊS DE PROJEÇÃO </LabelText>
              <Question size={16} color="#999999" weight="bold" />
            </FormLabelText>
            <SelectItem>
              <Controller
                name="monthSelect"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value)
                      if (value === 'valor-desejado') {
                        setShowSecond(false)
                      } else {
                        setShowSecond(true)
                      }
                    }}
                    id="select"
                  />
                )}
              />
            </SelectItem>
          </ItemFormContainer>
          {showSecond && (
            <ItemFormContainer>
              <FormLabelText>
                <LabelText htmlFor="select1">TARGET PARA RESERVA</LabelText>
                <Question size={16} color="#999999" weight="bold" />
              </FormLabelText>
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
          )}
        </LineFormItem>
        <LineFormItem>
          <ItemFormContainer>
            <FormLabelText>
              <LabelText htmlFor="select2">DIARIZAÇÃO</LabelText>
              <Question size={16} color="#999999" weight="bold" />
            </FormLabelText>
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
                    <CheckBox
                      onValueChange={(value) => {
                        field.onChange(value)
                        setshowMultiSelect(!value)
                      }}
                      id="c1"
                    />
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
            </LineCheckItem>
          </CheckboxContainer>
        </LineFormItem>
        {showMultiSelect && (
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
        )}
        <LineFormItem>
          <LineTextArea>
            <LabelText htmlFor="teste">
              FORÇAR ABASTECIMENTO IMEDIATO (GD-SKU)
            </LabelText>
            <LineFormButton>
              <Button css={{ width: '135px' }}>
                Download
                <DownloadSimple size={22} weight="bold" />
              </Button>
              <Button css={{}}>
                Upload
                <UploadSimple size={22} weight="bold" />
              </Button>
            </LineFormButton>
          </LineTextArea>
        </LineFormItem>
        <Button css={{ alignSelf: 'end', marginTop: '-5px' }}>
          <PlayCircle size={22} weight="bold" />
          Executar
        </Button>
      </FormContainer>
    </Container>
  )
}
