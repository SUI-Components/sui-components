import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCheckboxField, {moleculeCheckboxFieldSizes} from '../src/index.js'

export const ArticleSize = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>Size</H2>
      <Paragraph>
        Use the <Code>size</Code>(enum) prop provided by <Code>moleculeCheckboxFieldSizes</Code> to change between
        different checkbox sizes.
      </Paragraph>
      <Grid cols={Object.values(moleculeCheckboxFieldSizes).length} gutter={[8, 8]}>
        <Cell>
          <MoleculeCheckboxField
            id="success-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            size={moleculeCheckboxFieldSizes.SMALL}
            // eslint-disable-next-line no-console
            onChange={
              (e, {name, value, ...props}) => console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked={false}
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="error-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            size={moleculeCheckboxFieldSizes.SMALL}
            // eslint-disable-next-line no-console
            onChange={
              (e, {name, value, ...props}) => console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="success-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            size={moleculeCheckboxFieldSizes.MEDIUM}
            // eslint-disable-next-line no-console
            onChange={
              (e, {name, value, ...props}) => console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked={false}
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="error-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            size={moleculeCheckboxFieldSizes.MEDIUM}
            // eslint-disable-next-line no-console
            onChange={
              (e, {name, value, ...props}) => console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
