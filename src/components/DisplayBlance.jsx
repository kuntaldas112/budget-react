import React from 'react'
import { Statistic, StatisticLabel } from 'semantic-ui-react'

function DisplayBlance({size,label,value,color}) {
  return (
    <Statistic size={size} color={color}>
    <StatisticLabel>{label}</StatisticLabel>
    <Statistic.Value>{value}</Statistic.Value>
  </Statistic>
  )
}

export default DisplayBlance