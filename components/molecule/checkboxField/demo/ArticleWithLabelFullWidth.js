import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import MoleculeCheckboxField from 'components/molecule/checkboxField/src'

const styleBorderedContainer = {
  display: 'flex',
  border: '1px dashed #000'
}

const styleCenteredText = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center'
}

export const ArticleWithLabelFullWidth = ({className}) => {
  return (
    <Article>
      <H2>With Html Label + fullWidth</H2>
      <Paragraph>
        For this demo we need to set the prop <Code>fullWidth</Code> to true.
      </Paragraph>
      <MoleculeCheckboxField
        id="info-help-text"
        fullWidth
        nodeLabel={
          <div style={styleBorderedContainer}>
            <div style={styleCenteredText}>I'm full width</div>
            <button>Action</button>
          </div>
        }
        // eslint-disable-next-line no-console
        onChange={(e, {name, value}) => console.log({[name]: value})}
      />
    </Article>
  )
}

ArticleWithLabelFullWidth.propTypes = {
  className: PropTypes.string
}

export default ArticleWithLabelFullWidth
