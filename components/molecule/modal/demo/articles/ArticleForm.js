import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Bold, Cell, Grid, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import Modal from '../../src/index.js'

const useFormSetter = initialValue => {
  const [state, setter] = useState(JSON.stringify(initialValue === undefined ? {} : initialValue))
  return [
    JSON.parse(state),
    event => {
      event.preventDefault()
      const data = new FormData(event.target)
      setter(JSON.stringify(Object.fromEntries(data)))
    }
  ]
}

const ArticleForm = ({className}) => {
  const [form, setForm] = useFormSetter()
  const {modalFormName, modalFormSurname} = form
  return (
    <Article className={className}>
      <H2>Form</H2>
      <Paragraph>
        When sending a form inside of a modal, the focus tab navigation should be placed within the modal until it get
        closed and then return the focus to the trigger element opener of the modal.
      </Paragraph>
      <Modal>
        <Grid cols={2} gutter={[8, 0]}>
          <Cell>
            <Label>name</Label>
          </Cell>
          <Cell>
            <Label>surname</Label>
          </Cell>
          <Cell>
            <Bold>{modalFormName || 'EMPTY NAME'}</Bold>
          </Cell>
          <Cell>
            <Bold>{modalFormSurname || 'EMPTY SURNAME'}</Bold>
          </Cell>
          <Cell span={2}>
            <Modal.OpenTrigger>
              <AtomButton>Edit</AtomButton>
            </Modal.OpenTrigger>
          </Cell>
        </Grid>
        <Modal.Overlay />
        <Modal.Content>
          <form onSubmit={setForm}>
            <Modal.Header>
              <Modal.Title>Edit the user</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{gap: 16}}>
              <Modal.ScrollArea>
                <Modal.Description as="div" style={{display: 'grid', flexFlow: 'column nowrap', gap: 16}}>
                  <Grid cols={2} gutter={[8, 0]}>
                    <Cell>
                      <Label htmlFor="modalFormName">name</Label>
                    </Cell>
                    <Cell>
                      <Label htmlFor="modalFormSurname">surname</Label>
                    </Cell>
                    <Cell>
                      <Input id="modalFormName" name="modalFormName" placeholder="John" defaultValue={modalFormName} />
                    </Cell>
                    <Cell>
                      <Input
                        id="modalFormSurname"
                        name="modalFormSurname"
                        placeholder="Doe"
                        defaultValue={modalFormSurname}
                      />
                    </Cell>
                  </Grid>
                </Modal.Description>
              </Modal.ScrollArea>
            </Modal.Body>
            <Modal.Footer>
              <Modal.CloseTrigger>
                <AtomButton type="submit">Save</AtomButton>
              </Modal.CloseTrigger>
            </Modal.Footer>
            <Modal.CloseTrigger>
              <Modal.CloseIconButton ariaLabel="close the modal" />
            </Modal.CloseTrigger>
          </form>
        </Modal.Content>
      </Modal>
    </Article>
  )
}

ArticleForm.propTypes = {
  className: PropTypes.string
}

export default ArticleForm
