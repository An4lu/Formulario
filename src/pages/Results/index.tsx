import { Title } from '../../components/Title/styles'
import {
  Container,
  GridConteiner,
  LineFormConteiner,
  TitleFormConteiner,
} from './styles'
import { ArrowCounterClockwise } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { CardStatus } from '../../components/CardStatus'
import { useEffect, useState } from 'react'
import { Text } from '../../components/Text'

export function Results() {
  const [statusProgress, setStatusProgress] = useState({})
  const pipelineStatusData = [
    {
      id: '2023-04-19T12:37:07.445600Z',
      is_done: true,
      has_failed: false,
      step_name: '',
      step_number: [0, 0],
    },
    {
      id: '2023-04-19T12:37:07.445600Z',
      is_done: false,
      has_failed: true,
      step_name: '',
      step_number: [0, 0],
    },
    {
      id: '2023-04-19T12:37:07.445600Z',
      is_done: false,
      has_failed: false,
      step_name: 'agua',
      step_number: [10, 0],
    },
  ]

  const QualidadedeDados = {
    tested_datasets: '96% (RECOMMENDED >80%)',
    number_of_failures: '22',
    tests: {
      analise_carteira_faturado: [
        "expect_column_values_to_be_between({'min_value': 0, 'columns': 'quantidade'}): FAILED - N\u00e3o deveria existir valores negativos para a coluna 'Prev_Fat_Mes_Atual' na base da an\u00e1lise carteira",
      ],
      de_para_phasein_phaseout: [
        "expect_column_value_lengths_to_be_between({'min_value': 5, 'max_value': 7, 'columns': 'sku7d_phaseout'}): FAILED - SKU PhaseOut deveria ter entre 5 e 7 caracteres",
      ],
      de_para_phasein_phaseout_enriched: [
        "expect_column_value_lengths_to_equal({'value': 7, 'columns': 'sku7d_phaseout'}): FAILED - sku7d_phaseout deveria ter exatamente 7 caracteres",
      ],
      sellout_enriched: [
        "expect_column_values_to_not_be_null({'columns': 'cd_cliente'}): FAILED - Existem valores nulos para cd_cliente. Issopode indicar problema no merge",
      ],
    },
  }

  useEffect(() => {
    async function getPipelineStatus() {
      const returnApi = ['filter_necessidades_nao_atendidas', ['75', '75']]

      const stateProgress = {
        id: returnApi[0],
        step: returnApi[1][0],
      }

      setStatusProgress(stateProgress)
    }

    getPipelineStatus()
  }, [])

  return (
    <Container>
      <TitleFormConteiner>
        <LineFormConteiner>
          <Title>Resultados</Title>
          <Button css={{ alignSelf: 'end', marginTop: '5px' }}>
            <span>Atualizar</span>
            <ArrowCounterClockwise size={22} />
          </Button>
        </LineFormConteiner>

        <Text css={{ marginTop: '3px' }}>
          Aqui você pode acompanhar os resultados que o robô trouxe dos
          cálculos.
        </Text>

        <GridConteiner>
          {pipelineStatusData.map((status, index) => (
            <CardStatus
              key={index}
              {...status}
              nextStep={statusProgress}
              dataQuality={QualidadedeDados}
            />
          ))}
        </GridConteiner>
      </TitleFormConteiner>
    </Container>
  )
}
