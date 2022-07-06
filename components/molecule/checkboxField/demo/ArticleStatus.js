import MoleculeCheckboxField, {
  moleculeCheckboxFieldStatus
} from '../src/index.js'
import PropTypes from 'prop-types'

import {
  Article,
  Code,
  H2,
  Paragraph,
  Grid,
  Cell
} from '@s-ui/documentation-library'

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
            // eslint-disable-next-line no-console
            onChange={(e, {name, value, ...props}) =>
              console.log({[name]: value, ...props})
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
            // eslint-disable-next-line no-console
            onChange={(e, {name, value, ...props}) =>
              console.log({[name]: value, ...props})
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
            // eslint-disable-next-line no-console
            onChange={(e, {name, value, ...props}) =>
              console.log({[name]: value, ...props})
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
            // eslint-disable-next-line no-console
            onChange={(e, {name, value, ...props}) =>
              console.log({[name]: value, ...props})
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
            // eslint-disable-next-line no-console
            onChange={(e, {name, value, ...props}) =>
              console.log({[name]: value, ...props})
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
            // eslint-disable-next-line no-console
            onChange={(e, {name, value, ...props}) =>
              console.log({[name]: value, ...props})
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
