import {
  Article,
  Code,
  H2,
  Paragraph,
  UnorderedList,
  ListItem
} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import PrimitiveTypography, {
  primitiveTypographyFontSize,
  primitiveTypographyFontFamily,
  primitiveTypographyFontWeight,
  primitiveTypographyFontStyle,
  primitiveTypographyFontStretch,
  primitiveTypographyLetterSpacing,
  primitiveTypographyLineHeight,
  primitiveTypographyTextDecoration
} from '../../src/index.js'

const ArticleStyles = ({className, lorem}) => {
  return (
    <Article className={className}>
      <H2>Styles</H2>
      <Paragraph>
        The <Code>PrimitiveTypography</Code> can customize lots of text styles
        by props in order to override the predefined design-variant pari given.
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>fontSize</Code>: The css rule for font-size
          <UnorderedList>
            {Object.entries(primitiveTypographyFontSize).map(([key, value]) => (
              <ListItem key={key}>
                <Code>primitiveTypographyFontSize.{key}</Code>:{' '}
                <Code>"{value}"</Code>
                <br />
                <PrimitiveTypography fontSize={value}>
                  {lorem}
                </PrimitiveTypography>
              </ListItem>
            ))}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>fontFamily</Code>: The css rule for font-family
          <UnorderedList>
            {Object.entries(primitiveTypographyFontFamily).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyFontFamily.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography fontFamily={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>fontWeight</Code>: The css rule for font-weight
          <UnorderedList>
            {Object.entries(primitiveTypographyFontWeight).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyFontWeight.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography fontWeight={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>fontStyle</Code>: The css rule for font-style
          <UnorderedList>
            {Object.entries(primitiveTypographyFontStyle).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyFontStyle.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography fontStyle={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>fontStretch</Code>: The css rule for font-stretch. (it only
          works if the font has width-variant faces)
          <UnorderedList>
            {Object.entries(primitiveTypographyFontStretch).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyFontStretch.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography fontStretch={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>letterSpacing</Code>: The css rule for letter-spacing
          <UnorderedList>
            {Object.entries(primitiveTypographyLetterSpacing).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyLetterSpacing.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography letterSpacing={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>lineHeight</Code>: The css rule for line-height
          <UnorderedList>
            {Object.entries(primitiveTypographyLineHeight).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyLineHeight.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography lineHeight={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Code>textDecorationLine</Code>: The css rule for text-decoration-line
          <UnorderedList>
            {Object.entries(primitiveTypographyTextDecoration).map(
              ([key, value]) => (
                <ListItem key={key}>
                  <Code>primitiveTypographyTextDecoration.{key}</Code>:{' '}
                  <Code>"{value}"</Code>
                  <br />
                  <PrimitiveTypography textDecorationLine={value}>
                    {lorem}
                  </PrimitiveTypography>
                </ListItem>
              )
            )}
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleStyles.propTypes = {
  className: PropTypes.string,
  lorem: PropTypes.node
}

export default ArticleStyles
