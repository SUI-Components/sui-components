import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import PrimitiveTypography, {
  PrimitiveTypographyBody1,
  PrimitiveTypographyBody2,
  PrimitiveTypographyCallout,
  PrimitiveTypographyCaption,
  primitiveTypographyDesign,
  PrimitiveTypographyDisplay1,
  PrimitiveTypographyDisplay2,
  PrimitiveTypographyDisplay3,
  PrimitiveTypographyHeadline1,
  PrimitiveTypographyHeadline2,
  PrimitiveTypographySmall,
  PrimitiveTypographySubHead
} from '../../src/index.js'

const ArticleDesign = ({className, lorem}) => {
  return (
    <Article className={className}>
      <H2>Design</H2>
      <Paragraph>
        Depending on the <Code>design</Code> given it will provide the related defined styles applied to that kind of
        element.
      </Paragraph>
      <Paragraph>There are extra Typography Components exported directly with the desired design applied:</Paragraph>
      <UnorderedList>
        {Object.entries({
          PrimitiveTypographyDisplay1: {
            value: <PrimitiveTypographyDisplay1>{lorem}</PrimitiveTypographyDisplay1>,
            meaning: 'primitiveTypographyDesign.DISPLAY_1'
          },
          PrimitiveTypographyDisplay2: {
            value: <PrimitiveTypographyDisplay2>{lorem}</PrimitiveTypographyDisplay2>,
            meaning: 'primitiveTypographyDesign.DISPLAY_2'
          },
          PrimitiveTypographyDisplay3: {
            value: <PrimitiveTypographyDisplay3>{lorem}</PrimitiveTypographyDisplay3>,
            meaning: 'primitiveTypographyDesign.DISPLAY_3'
          },
          PrimitiveTypographyHeadline1: {
            value: <PrimitiveTypographyHeadline1>{lorem}</PrimitiveTypographyHeadline1>,
            meaning: 'primitiveTypographyDesign.HEADLINE_1'
          },
          PrimitiveTypographyHeadline2: {
            value: <PrimitiveTypographyHeadline2>{lorem}</PrimitiveTypographyHeadline2>,
            meaning: 'primitiveTypographyDesign.HEADLINE_2'
          },
          PrimitiveTypographySubHead: {
            value: <PrimitiveTypographySubHead>{lorem}</PrimitiveTypographySubHead>,
            meaning: 'primitiveTypographyDesign.SUBHEAD'
          },
          PrimitiveTypographyBody1: {
            value: <PrimitiveTypographyBody1>{lorem}</PrimitiveTypographyBody1>,
            meaning: 'primitiveTypographyDesign.BODY_1'
          },
          PrimitiveTypographyBody2: {
            value: <PrimitiveTypographyBody2>{lorem}</PrimitiveTypographyBody2>,
            meaning: 'primitiveTypographyDesign.BODY_2'
          },
          PrimitiveTypographyCaption: {
            value: <PrimitiveTypographyCaption>{lorem}</PrimitiveTypographyCaption>,
            meaning: 'primitiveTypographyDesign.CAPTION'
          },
          PrimitiveTypographySmall: {
            value: <PrimitiveTypographySmall>{lorem}</PrimitiveTypographySmall>,
            meaning: 'primitiveTypographyDesign.SMALL'
          },
          PrimitiveTypographyCallout: {
            value: <PrimitiveTypographyCallout>{lorem}</PrimitiveTypographyCallout>,
            meaning: 'primitiveTypographyDesign.CALLOUT'
          }
        }).map(([key, {value, meaning}]) => (
          <ListItem key={key}>
            <Code>{key}</Code>: <Code>{'<' + `PrimitiveTypography design={${meaning}}` + '/>'}</Code>
            <br />
            {value}
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={1} gutter={[36, 8]}>
        <Cell>
          <Paragraph>There are 3 different styles for displaying big elements</Paragraph>
        </Cell>
        {Object.entries({
          DISPLAY_1: primitiveTypographyDesign.DISPLAY_1,
          DISPLAY_2: primitiveTypographyDesign.DISPLAY_2,
          DISPLAY_3: primitiveTypographyDesign.DISPLAY_3
        }).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Code>primitiveTypographyDesign.{designKey}</Code>
            <br />
            <PrimitiveTypography design={designValue}>{lorem}</PrimitiveTypography>
          </Cell>
        ))}
        <Cell>
          <Paragraph>There are 2 different styles for displaying headings</Paragraph>
        </Cell>
        {Object.entries({
          HEADLINE_1: primitiveTypographyDesign.HEADLINE_1,
          HEADLINE_2: primitiveTypographyDesign.HEADLINE_2
        }).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Code>primitiveTypographyDesign.{designKey}</Code>
            <br />
            <PrimitiveTypography design={designValue}>{lorem}</PrimitiveTypography>
          </Cell>
        ))}
        <Cell>
          <Paragraph>Also 1 for subtitles</Paragraph>
        </Cell>
        {Object.entries({
          SUBHEAD: primitiveTypographyDesign.SUBHEAD
        }).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Code>primitiveTypographyDesign.{designKey}</Code>
            <br />
            <PrimitiveTypography design={designValue}>{lorem}</PrimitiveTypography>
          </Cell>
        ))}
        <Cell>
          <Paragraph>PrimitiveTypography provide 2 different body body styles</Paragraph>
        </Cell>
        {Object.entries({
          BODY_1: primitiveTypographyDesign.BODY_1,
          BODY_2: primitiveTypographyDesign.BODY_2
        }).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Code>primitiveTypographyDesign.{designKey}</Code>
            <br />
            <PrimitiveTypography design={designValue}>{lorem}</PrimitiveTypography>
          </Cell>
        ))}
        <Cell>
          <Paragraph>2 extra special sized for extra elements</Paragraph>
        </Cell>
        {Object.entries({
          CAPTION: primitiveTypographyDesign.CAPTION,
          SMALL: primitiveTypographyDesign.SMALL
        }).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Code>primitiveTypographyDesign.{designKey}</Code>
            <br />
            <PrimitiveTypography design={designValue}>{lorem}</PrimitiveTypography>
          </Cell>
        ))}
        <Cell>
          <Paragraph>And at the end, 1 extra special sized for callouts</Paragraph>
        </Cell>
        {Object.entries({
          CALLOUT: primitiveTypographyDesign.CALLOUT
        }).map(([designKey, designValue]) => (
          <Cell key={designKey}>
            <Code>primitiveTypographyDesign.{designKey}</Code>
            <br />
            <PrimitiveTypography design={designValue}>{lorem}</PrimitiveTypography>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleDesign.propTypes = {
  className: PropTypes.string,
  lorem: PropTypes.node
}

export default ArticleDesign
