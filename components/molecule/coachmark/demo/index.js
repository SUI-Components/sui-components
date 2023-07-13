import {
  Article,
  Cell,
  Grid,
  H1,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Coachmark</H1>
        <Paragraph>
          Wrapper of the react joyride library to make tours within the apps.
        </Paragraph>

        <Article className={`molecule-coachmark-section`}>
          <H2>Props</H2>
          <Paragraph>
            All the props received by the coachmark component are the same
            accepted by the react joyride library,{' '}
            <a href="https://docs.react-joyride.com/" target="_blank">
              please refer to the original documentation to get more details
            </a>
          </Paragraph>
        </Article>

        <Article>
          <H2>Default tooltip variants</H2>
          <Paragraph>
            The variants to set the configuration for the default tooltip
          </Paragraph>
          <Grid cols={6} gutter={[8, 8]}>
            <Cell>Hola</Cell>
          </Grid>
        </Article>
      </div>
    </div>
  )
}

export default Demo
