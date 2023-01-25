import React from 'react'
import { useState } from 'react'
import { Grid, GridColumn, Icon, Segment } from 'semantic-ui-react'
import ModalEdit from './ModalEdit'

function EntryLine({entry:{id,description,value,isExpense},deleteEntries,editEntry}) {
  
  return (
    <>
    <Segment color={isExpense?'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={7} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3}>{value}</Grid.Column>
            <GridColumn width={6}>
              <Icon name='edit' bordered onClick={()=>editEntry(id)}></Icon>
              <Icon name='trash' onClick={()=>deleteEntries(id)} bordered></Icon>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
      
      </>
  )
}

export default EntryLine