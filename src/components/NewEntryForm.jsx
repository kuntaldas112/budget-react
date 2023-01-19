import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
  return (
    <Form unstackable>
        <Form.Group>
          <Form.Input
            width={12}
            icon="tag"
            label="Description"
            placeholder="New Shinny Things"
          />
          <Form.Input
            width={4}
            label="value"
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'
          ></Form.Input>
        </Form.Group>
        <ButtonSaveOrCancel/>
      </Form>
  )
}

export default NewEntryForm