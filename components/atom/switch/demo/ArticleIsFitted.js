import {
  Article,
  H2,
  Code,
  Grid,
  Cell,
  Paragraph
} from '@s-ui/documentation-library'
import AtomSwitch from 'components/atom/switch/src'

const BASE_CLASS_DEMO = `DemoAtomSwitch`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const ArticleIsFitted = () => (
  <Article className={CLASS_SECTION}>
    <H2>IsFitted</H2>
    <Paragraph>
      <Code>isFitted</Code> prop remove all spacing rules of arround the
      component in order to move this responsibility to parent component. As you
      can see at the default demo, the current spacing is causing a misalignment
      with label. This prop fixes this.
    </Paragraph>
    <Grid cols={2} style={{width: 400}}>
      <Cell style={flexCenteredStyle}>
        <AtomSwitch label="default" />
      </Cell>
      <Cell style={flexCenteredStyle}>
        <AtomSwitch isFitted label="isFitted" />
      </Cell>
    </Grid>
  </Article>
)

export default ArticleIsFitted
