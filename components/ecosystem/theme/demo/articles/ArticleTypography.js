import {sentenceCase} from 'change-case'
import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Cell,
  Grid,
  H2,
  H3,
  Paragraph
} from '@s-ui/documentation-library'

import {useTheme} from '../../src/index.js'
import {useLoremIpsum} from '../LoremIpsum.js'

const ArticleTypography = ({className}) => {
  const {
    typography: {
      fontFamily: {primary, accent},
      fontSize: {
        xxs: xxsFontSize,
        xs: xsFontSize,
        s: sFontSize,
        m: mFontSize,
        l: lFontSize,
        xl: xlFontSize,
        xxl: xxlFontSize,
        xxxl: xxxlFontSize,
        giant: giantFontSize
      },
      fontWeight: {light, regular, semiBold, bold},
      lineHeight: {
        xxs: xxsLineHeight,
        xs: xsLineHeight,
        s: sLineHeight,
        m: mLineHeight,
        l: lLineHeight,
        xl: xlLineHeight,
        xxl: xxlLineHeight,
        xxxl: xxxlLineHeight,
        giant: giantLineHeight
      }
    }
  } = useTheme()
  const lorem6Words = useLoremIpsum({units: 'words', count: 6, format: 'plain'})
  const lorem200Words = useLoremIpsum({
    units: 'words',
    count: 200,
    format: 'plain'
  })
  return (
    <Article className={className}>
      <H2>Typography</H2>
      <Paragraph>typography</Paragraph>
      <H3>Font family</H3>
      <Paragraph>
        The design system provides 2 different font families.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        {[primary, accent].map(fontFamily => (
          <Cell>
            <Bold>{fontFamily}</Bold>
            <Paragraph style={{fontFamily, fontSize: '3em'}}>
              {sentenceCase(lorem6Words)}
            </Paragraph>
            <Paragraph style={{fontFamily, fontSize: '1em'}}>
              {sentenceCase(lorem200Words)}
            </Paragraph>
          </Cell>
        ))}
      </Grid>
      <H3>Font size</H3>
      <Paragraph>The design system provides 9 different font sizes.</Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        {[
          xxsFontSize,
          xsFontSize,
          sFontSize,
          mFontSize,
          lFontSize,
          xlFontSize,
          xxlFontSize,
          xxxlFontSize,
          giantFontSize
        ].map(fontSize => (
          <Cell>
            <Bold>{fontSize}</Bold>
            <Paragraph style={{fontSize}}>
              {sentenceCase(lorem6Words)}
            </Paragraph>
          </Cell>
        ))}
      </Grid>
      <H3>Font weight</H3>
      <Paragraph>
        The design system provides 4 different font weights.
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        {[light, regular, semiBold, bold].map(fontWeight => (
          <Cell>
            <Bold>{fontWeight}</Bold>
            <Paragraph style={{fontWeight}}>
              {sentenceCase(lorem200Words)}
            </Paragraph>
          </Cell>
        ))}
      </Grid>
      <H3>Line height</H3>
      <Paragraph>The design system provides 9 different line height.</Paragraph>
      <Grid cols={9} gutter={[8, 8]}>
        {[
          xxsLineHeight,
          xsLineHeight,
          sLineHeight,
          mLineHeight,
          lLineHeight,
          xlLineHeight,
          xxlLineHeight,
          xxxlLineHeight,
          giantLineHeight
        ].map(lineHeight => (
          <Cell>
            <Bold>{lineHeight}</Bold>
            <Paragraph style={{lineHeight}}>
              {sentenceCase(lorem200Words)}
            </Paragraph>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleTypography.propTypes = {
  className: PropTypes.string
}

export default ArticleTypography
