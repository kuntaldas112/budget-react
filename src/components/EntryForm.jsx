import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description,value,isExpense,setDescription,setValue,setIsExpense}) {
  return (
    <>
    <Form.Group>
    <Form.Input
      width={12}
      icon="tag"
      label="Description"
      placeholder="New Shinny Things"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
    />
    <Form.Input
      width={4}
      label="value"
      placeholder='100.00'
      icon='dollar'
      iconPosition='left'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
    ></Form.Input>
  </Form.Group>
  <Segment compact>
    <Checkbox label='is expense'
     toggle 
     checked={isExpense}
     onChange={()=>setIsExpense(oldState=>!oldState)}
     ></Checkbox>
  </Segment>
  </>
  )
}

export default EntryForm