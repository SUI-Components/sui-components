import {useState} from 'react'
import JSONView from 'react-json-view'

import PropTypes from 'prop-types'

import {Article, Button, Cell, Code, Grid, H2, H4, Input, Label, Paragraph} from '@s-ui/documentation-library'

import Accordion, {
  moleculeAccordionAnimationDuration,
  moleculeAccordionBehavior,
  MoleculeAccordionItem as AccordionItem
} from '../../src/index.js'
import HeaderCustom from './custom/HeaderCustom.js'
import PanelCustom from './custom/PanelCustom.js'

const ArticleCustom = ({className}) => {
  const [steps, setSteps] = useState([1])
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  })
  const setValue = event => setForm({...form, [event.target.name]: event.target.value})
  const onChange = (event, {values, value, isExpanded}) => {
    console.log('onChange', event, {values, value, isExpanded}) // eslint-disable-line no-console
  }
  const handleItemClick =
    item =>
    (event, {value, isExpanded, values}) =>
      console.log('onItemClick', item, event, {value, isExpanded, values}) // eslint-disable-line no-console

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(Array.from(formData.entries()))
    console.log(data) // eslint-disable-line no-console
    confirm(JSON.stringify(data, undefined, 2))
  }

  const handleCloseData = (event, data = {}, step) => {
    if (Object.keys(data).includes('address')) {
      setForm({
        ...form,
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      })
    } else {
      setForm({...form, ...data})
    }
    setSteps([step])
  }

  const {name, surname, email, username, address1, address2, city, state, zipcode, country} = form

  const address = `${address1}${address2 === '' ? '' : ` ${address2}`} ${city} ${state} ${zipcode} ${country}`

  return (
    <Article className={className}>
      <H2>Custom</H2>
      <Paragraph>
        You can use any of the existing Components provided (compound-components pattern) in order to create your
        desired custom design.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <Grid cols={1} gutter={[8, 0]}>
          <Cell>
            <Accordion
              onChange={onChange}
              values={steps}
              behavior={moleculeAccordionBehavior.MULTIPLE}
              animationDuration={moleculeAccordionAnimationDuration.SLOW}
            >
              <AccordionItem
                value={1}
                disabled={!steps.includes(1)}
                onClick={handleItemClick('header1')}
                label="Accordion Item Label 1"
                header={
                  <HeaderCustom
                    tags={{name, surname, email, username}}
                    title={<H4>Personal Contact</H4>}
                    onClose={handleCloseData}
                    step={1}
                  />
                }
              >
                <PanelCustom step={1} stepsNumber={3} onNext={() => setSteps([2])}>
                  <Grid cols={2} gutter={[8, 0]}>
                    <Cell>
                      <Label htmlFor="name">Name</Label>
                    </Cell>
                    <Cell>
                      <Label htmlFor="surname">Surname</Label>
                    </Cell>
                    <Cell>
                      <Input id="name" type="text" placeholder="John" name="name" value={name} onChange={setValue} />
                    </Cell>
                    <Cell>
                      <Input
                        id="surname"
                        type="text"
                        placeholder="Doe"
                        name="surname"
                        value={surname}
                        onChange={setValue}
                      />
                    </Cell>
                    <Cell>
                      <Label>e-mail</Label>
                    </Cell>
                    <Cell>
                      <Label>username</Label>
                    </Cell>
                    <Cell>
                      <Input
                        id="email"
                        type="email"
                        placeholder="fake@ma.il"
                        name="email"
                        value={email}
                        onChange={setValue}
                      />
                    </Cell>
                    <Cell>
                      <Input
                        id="username"
                        type="text"
                        placeholder="username"
                        name="username"
                        value={username}
                        onChange={setValue}
                      />
                    </Cell>
                  </Grid>
                </PanelCustom>
              </AccordionItem>
              <AccordionItem
                value={2}
                disabled={!steps.includes(2)}
                onClick={handleItemClick('header2')}
                label="Accordion Item Header 2"
                header={
                  <HeaderCustom
                    tags={{...(address.trim() !== '' && {address})}}
                    title={<H4>Address</H4>}
                    onClose={handleCloseData}
                    step={2}
                  />
                }
              >
                <PanelCustom step={2} stepsNumber={3} onPrevious={() => setSteps([1])} onNext={() => setSteps([3])}>
                  <Grid cols={2} gutter={[8, 8]}>
                    <Cell span={2}>
                      <Label htmlFor="address">Address line 1</Label>
                    </Cell>
                    <Cell span={2}>
                      <Input
                        id="address1"
                        type="text"
                        placeholder="Fake Street 123"
                        name="address1"
                        value={address1}
                        onChange={setValue}
                        fullWidth
                      />
                    </Cell>
                    <Cell span={2}>
                      <Label htmlFor="address">Address line 2</Label>
                    </Cell>
                    <Cell span={2}>
                      <Input
                        id="address2"
                        type="text"
                        placeholder=""
                        name="address2"
                        value={address2}
                        onChange={setValue}
                        fullWidth
                      />
                    </Cell>
                    <Cell>
                      <Label>Postal / Zip code</Label>
                    </Cell>
                    <Cell>
                      <Label>Country</Label>
                    </Cell>
                    <Cell>
                      <Input
                        id="zipcode"
                        type="text"
                        placeholder=""
                        name="zipcode"
                        value={zipcode}
                        onChange={setValue}
                        fullWidth
                      />
                    </Cell>
                    <Cell>
                      <Input
                        id="country"
                        type="text"
                        placeholder=""
                        name="country"
                        value={country}
                        onChange={setValue}
                        fullWidth
                      />
                    </Cell>
                    <Cell>
                      <Label>city</Label>
                    </Cell>
                    <Cell>
                      <Label>state</Label>
                    </Cell>
                    <Cell>
                      <Input
                        id="city"
                        type="text"
                        placeholder=""
                        name="city"
                        value={city}
                        onChange={setValue}
                        fullWidth
                      />
                    </Cell>
                    <Cell>
                      <Input
                        id="state"
                        type="text"
                        placeholder=""
                        name="state"
                        value={state}
                        onChange={setValue}
                        fullWidth
                      />
                    </Cell>
                  </Grid>
                </PanelCustom>
              </AccordionItem>
              <AccordionItem
                value={3}
                disabled={!steps.includes(3)}
                onClick={handleItemClick('header3')}
                label="Accordion Item Label 3"
                header={<HeaderCustom title={<H4>Resume</H4>} step={3} />}
              >
                <PanelCustom step={3} stepsNumber={3}>
                  <Grid cols={2} gutter={[8, 8]}>
                    <Cell>
                      <Label>Name:</Label> <Code>{name}</Code>
                    </Cell>
                    <Cell>
                      <Label>Surname:</Label> <Code>{surname}</Code>
                    </Cell>
                    <Cell>
                      <Label>e-mail:</Label> <Code>{email}</Code>
                    </Cell>
                    <Cell>
                      <Label>username:</Label> <Code>{username}</Code>
                    </Cell>
                    <Cell span={2}>
                      <Label>address:</Label> <Code>{address}</Code>
                    </Cell>
                    <Cell>
                      <Button type="submit">Submit</Button>
                    </Cell>
                  </Grid>
                </PanelCustom>
              </AccordionItem>
            </Accordion>
          </Cell>
          <Cell>
            <JSONView
              name="form"
              src={form}
              iconStyle="circle"
              displayDataTypes={false}
              displayObjectSize={false}
              enableClipboard={false}
              indentWidth={2}
            />
          </Cell>
        </Grid>
      </form>
    </Article>
  )
}

ArticleCustom.displayName = 'ArticleCustom'

ArticleCustom.propTypes = {
  className: PropTypes.string
}

export default ArticleCustom
