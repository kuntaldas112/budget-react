import React from 'react'
import { Grid, GridColumn, Icon, Segment } from 'semantic-ui-react'

function EntryLine({description,value,isExpense}) {
  return (
    <Segment color={isExpense?'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={7} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3}>{value}</Grid.Column>
            <GridColumn width={6}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default EntryLine