import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Input, Label, Paragraph} from '@s-ui/documentation-library'

import MoleculeDropdownOption from '../src/index.js'
import {CLASS_DEMO_OPTION, OPTIONS_WITH_LEFT_ADDON} from './config.js'

const ArticleLeftAddonAndDescription = ({className}) => {
  const [singleData, setSingleData] = useState([])
  const [multipleData, setMultipleData] = useState([])

  const handleSelectSingle = (event, {value, selected}) => {
    setSingleData(selected ? [value] : [])
  }

  const handleSelectMultiple = (event, {value, selected}) => {
    setMultipleData(selected ? [...multipleData, value] : [...multipleData.filter(data => data !== value)])
  }

  return (
    <Article className={className}>
      <H2>LEFT ADDON AND DESCRIPTION</H2>
      <Paragraph>
        Each option can optionally include a left addon, specified using the <Code>leftAddon</Code> prop (React node),
        as well as a description provided via the <Code>description</Code> prop (string) to display additional
        information
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <Label>Single</Label>
        </Cell>
        <Cell>
          <Label>Multiple</Label>
        </Cell>
        <Cell className={CLASS_DEMO_OPTION}>
          {OPTIONS_WITH_LEFT_ADDON.map(({option, leftAddon}) => (
            <MoleculeDropdownOption
              key={option}
              value={option}
              leftAddon={leftAddon}
              description="description"
              onSelect={handleSelectSingle}
              selected={singleData.includes(option)}
            >
              {option}
            </MoleculeDropdownOption>
          ))}
        </Cell>
        <Cell className={CLASS_DEMO_OPTION}>
          {OPTIONS_WITH_LEFT_ADDON.map(({option, leftAddon}) => (
            <MoleculeDropdownOption
              key={option}
              value={option}
              leftAddon={leftAddon}
              textWrap={'noWrap'}
              description="description"
              onSelect={handleSelectMultiple}
              selected={multipleData.includes(option)}
            >
              {option}
            </MoleculeDropdownOption>
          ))}
        </Cell>
        <Cell>
          <Input readOnly disabled fullWidth value={JSON.stringify(singleData, null, 2)} />
        </Cell>
        <Cell>
          <Input readOnly disabled fullWidth value={JSON.stringify(multipleData, null, 2)} />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleLeftAddonAndDescription.displayName = 'ArticleLeftAddonAndDescription'

ArticleLeftAddonAndDescription.propTypes = {
  className: PropTypes.string
}

export default ArticleLeftAddonAndDescription
