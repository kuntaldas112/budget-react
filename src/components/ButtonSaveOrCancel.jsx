import React from 'react'
import { Button, Form } from 'semantic-ui-react'

function ButtonSaveOrCancel() {
  return (
    <Form.Group>
          <Button.Group style={{ marginTop: 10 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
        </Form.Group>
  )
}

export default ButtonSaveOrCancel