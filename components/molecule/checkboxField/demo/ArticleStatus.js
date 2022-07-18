import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

import MoleculeCheckboxField, {
  moleculeCheckboxFieldStatus
} from '../src/index.js'

export const ArticleStatus = ({className}) => {
  return (
    <Article className={`${className}-section`}>
      <H2>Semantic Status</H2>
      <Paragraph>
        To provide teh semantic status on a checkboxField use the{' '}
        <Code>moleculeCheckboxFieldStatus</Code> enum on <Code>status</Code>{' '}
        prop combined with <Code>successText</Code>, <Code>errorText</Code> or{' '}
        <Code>alertText</Code>(string) props.
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <MoleculeCheckboxField
            id="success-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            status={moleculeCheckboxFieldStatus.SUCCESS}
            successText="Everything ok!"
            onChange={
              (e, {name, value, ...props}) =>
                console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked={false}
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="error-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            status={moleculeCheckboxFieldStatus.ERROR}
            errorText="All wrong!"
            onChange={
              (e, {name, value, ...props}) =>
                console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked={false}
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="alert-help-text"
            label="Description"
            value="In some place of La Mancha which name..."
            status={moleculeCheckboxFieldStatus.ALERT}
            alertText="Something meh..."
            onChange={
              (e, {name, value, ...props}) =>
                console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked={false}
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="success-help-text-checked"
            label="Description"
            value="In some place of La Mancha which name..."
            status={moleculeCheckboxFieldStatus.SUCCESS}
            successText="Everything ok!"
            onChange={
              (e, {name, value, ...props}) =>
                console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="error-help-text-checked"
            label="Description"
            value="In some place of La Mancha which name..."
            status={moleculeCheckboxFieldStatus.ERROR}
            errorText="All wrong!"
            onChange={
              (e, {name, value, ...props}) =>
                console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked
          />
        </Cell>
        <Cell>
          <MoleculeCheckboxField
            id="alert-help-text-checked"
            label="Description"
            value="In some place of La Mancha which name..."
            status={moleculeCheckboxFieldStatus.ALERT}
            alertText="Something meh..."
            onChange={
              (e, {name, value, ...props}) =>
                console.log({[name]: value, ...props}) // eslint-disable-line no-console
            }
            checked
          />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleStatus.propTypes = {
  className: PropTypes.string
}

export default ArticleStatus
