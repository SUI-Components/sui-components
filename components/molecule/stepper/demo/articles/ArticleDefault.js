import PropTypes from 'prop-types'

import {
  H2,
  Article,
  Paragraph,
  UnorderedList,
  ListItem,
  Code
} from '@s-ui/documentation-library'

import MoleculeStepper from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'

const steps = 5
const step = Math.ceil(steps / 2)
const labels = Array(steps)
  .fill()
  .map((v, index) => <LoremIpsum units="words" count={2} format="plain" />)

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        There are only 3 minimum props required to create a simple stepper:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Paragraph>
            <Code>steps</Code> (number): The total number of steps of the
            process. It must be a value higher than 0.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Code>step</Code> (number): The current step of the process. It must
            be a value higher than 0.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <Code>labels</Code> (array of strings): labels to specify a hint of
            each process. The labels number provided must be equivalent to the
            number of given steps.
          </Paragraph>
        </ListItem>
      </UnorderedList>
      <MoleculeStepper steps={steps} step={step} labels={labels} />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
