import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  AntDesignIcon,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H4,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeDataCounter from '../../src/index.js'
import {propsMessages} from '../settings.js'

const addIcons = {
  AiFillCaretUp: <AntDesignIcon icon="AiFillCaretUp" />,
  AiOutlineArrowUp: <AntDesignIcon icon="AiOutlineArrowUp" />,
  AiOutlinePlus: <AntDesignIcon icon="AiOutlinePlus" />,
  AiOutlineUp: <AntDesignIcon icon="AiOutlineUp" />,
  AiOutlineVerticalAlignTop: <AntDesignIcon icon="AiOutlineVerticalAlignTop" />
}

const substractIcons = {
  AiFillCaretDown: <AntDesignIcon icon="AiFillCaretDown" />,
  AiOutlineArrowDown: <AntDesignIcon icon="AiOutlineArrowDown" />,
  AiOutlineLine: <AntDesignIcon icon="AiOutlineLine" />,
  AiOutlineDown: <AntDesignIcon icon="AiOutlineDown" />,
  AiOutlineVerticalAlignBottom: (
    <AntDesignIcon icon="AiOutlineVerticalAlignBottom" />
  )
}

const ArticleIcons = ({className}) => {
  const [iconSubstract, setIconSubstract] = useState(
    Object.keys(substractIcons)[0]
  )
  const [iconAdd, setIconAdd] = useState(Object.keys(addIcons)[0])
  return (
    <Article className={className}>
      <H2>Icons</H2>
      <Paragraph>
        Button Icons can be customized using <Code>addIcon</Code> and{' '}
        <Code>substractIcon</Code> (react-node) props. fired.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <H4>substractIcon</H4>
        </Cell>
        <Cell>
          <H4>addIcon</H4>
        </Cell>
        <Cell>
          <RadioButtonGroup
            onChange={(event, value) => {
              setIconSubstract(value !== undefined ? value : iconSubstract)
            }}
            defaultValue="icon"
          >
            {Object.entries(substractIcons).map(([key, value]) => (
              <RadioButton
                key={key}
                label={value}
                value={key}
                checked={iconSubstract === key}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            onChange={(event, value) => {
              setIconAdd(value !== undefined ? value : iconAdd)
            }}
            defaultValue="icon"
          >
            {Object.entries(addIcons).map(([key, value]) => (
              <RadioButton
                key={key}
                label={value}
                value={key}
                checked={iconAdd === key}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell span={2}>
          <MoleculeDataCounter
            substractIcon={<AntDesignIcon icon={iconSubstract} />}
            addIcon={<AntDesignIcon icon={iconAdd} />}
            {...propsMessages}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleIcons.displayName = 'ArticleIcons'

ArticleIcons.propTypes = {
  className: PropTypes.string
}

export default ArticleIcons
