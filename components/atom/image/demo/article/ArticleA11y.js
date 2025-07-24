import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Bold,
  Box,
  Code,
  H2,
  H3,
  ListItem,
  Paragraph,
  Strong,
  UnorderedList
} from '@s-ui/documentation-library'

const ArticleA11y = ({className}) => {
  return (
    <>
      <Article className={className}>
        <H2>
          Accessibility –{' '}
          <Anchor href="https://github.com/SUI-Components/sui-components/blob/master/contributor-docs/Accessibility%20Standards.md">
            <Strong>Guidelines</Strong>
          </Anchor>
        </H2>
        <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
          <Paragraph>
            <Strong>Ensure decorative images are hidden from assistive technology.</Strong>
          </Paragraph>
        </Box>
      </Article>
      <br />
      <Article className={className}>
        <H2>Use descriptive alternative text</H2>
        <Paragraph>
          The <code>alt</code> attribute should be used to provide a text alternative for images that conveys the same
          meaning or purpose as the image. This is especially important for users with visual impairments who rely on
          screen readers.
        </Paragraph>
        <UnorderedList>
          <ListItem>Provide meaningful alt text that describes the purpose of the image.</ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Caption and Context</H2>
        <Paragraph>
          Provide captions or context for images when necessary. This helps users understand the relevance of the image
          within the content.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Use a caption (<Code>&#60;figcaption&#62;</Code>) or a nearby text to describe what the image explains in
            more detail.
          </ListItem>
          <ListItem>
            Make sure it is programmatically associated (e.g., wrapped in a <Code>&#60;figure&#62;</Code> tag).
          </ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Don't rely on color alone</H2>
        <Paragraph>
          Ensure that information conveyed by color is also available through other means, such as text labels or
          patterns. This is crucial for users with color vision deficiencies.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Avoid using only color to convey information (e.g., green = selected). Add icons, text, or patterns for
            redundancy.
          </ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Ensure enough contrast</H2>
        <Paragraph>
          Ensure that images have sufficient contrast against their background to be easily distinguishable by users
          with low vision.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Use tools to check contrast ratios between images and their backgrounds, ensuring they meet WCAG
            recommendations.
          </ListItem>
          <ListItem>
            Text and interactive elements shown in the image must meet{' '}
            <Anchor href="https://www.w3.org/WAI/tutorials/images/">WCAG contrast standards</Anchor>:
            <UnorderedList>
              <ListItem>
                <Bold>4.5:1</Bold> for normal text
              </ListItem>
              <ListItem>
                <Bold>3:1</Bold> for large text.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Decorative images should not interfere with the contrast of important content. If an image is purely
            decorative and does not provide any meaningful information, it should be marked as decorative using the{' '}
            <Code>alt=""</Code> attribute. This will ensure that screen readers ignore the image, preventing it from
            interfering with the reading experience.
          </ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Focus management</H2>
        <UnorderedList>
          <ListItem>There is no focus on the image; it is highlighted only for TalkBack.</ListItem>
        </UnorderedList>
        <Paragraph>
          When images are used as interactive elements (e.g., buttons or links), ensure that they are focusable and
          accessible via keyboard navigation.
        </Paragraph>
      </Article>
      <br />
      <Article className={className}>
        <H2>Responsive and scalable</H2>
        <Paragraph>
          Ensure that images are responsive and can scale appropriately on different devices and screen sizes. This
          helps users with low vision to zoom in without losing content or context.
        </Paragraph>
        <UnorderedList>
          <ListItem>The image should be high enough resolution for zooming without blurring.</ListItem>
          <ListItem>Ensure it remains legible on smaller screens and doesn't distort layout.</ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Zoom 200%</H2>
        <Paragraph>
          Ensure that the image maintains its clarity and usability when zoomed in to 200%. This is important for users
          with low vision who may need to enlarge content to read it comfortably.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            When a user zooms an image to 200%, the enlargement must maintain optimal quality and remain navigable using
            touch gestures or assistive tools.
          </ListItem>
          <ListItem>Ensure that the image does not cause layout issues or overflow when zoomed in.</ListItem>
          <ListItem>
            Zoom capabilities depend on the device's hardware. Some devices may not support high zoom levels without
            quality loss (pixelation or blurriness).
          </ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Screen reader considerations</H2>
        <Paragraph>
          Ensure that images are properly announced by screen readers, providing users with the necessary context and
          information.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            When using a mobile screen-reader (Talkback, VoiceOver) AND swiping to focus on an meaningful image.
          </ListItem>
          <ListItem>Hear a concise & sort Alt Description that conveys the content of the image.</ListItem>
          <ListItem>
            If the guideline applies to different platforms (desktop, mobile), the image should clarify differences or
            note them in accompanying text.
          </ListItem>
          <ListItem>
            If the image is decorative and does not convey any meaningful information, it should be marked as such
            (e.g., using <Code>alt=""</Code>), so that screen readers can skip it.
          </ListItem>
          <ListItem>Include notes if an image is relevant for screen reader expectations.</ListItem>
        </UnorderedList>
        <H3>
          <Bold>Informative image</Bold>
        </H3>
        <UnorderedList>
          <ListItem>Informative image : should be read by the screen reader</ListItem>
          <ListItem>An informative image vehicles an information.</ListItem>
        </UnorderedList>
        <H3>
          <Bold>Decorative image</Bold>
        </H3>
        <Paragraph>Should be skipped by the screen reader</Paragraph>
        <UnorderedList>
          <ListItem>If there is a visible alternative text next to it.</ListItem>
          <ListItem>They don't add an information to the text already present</ListItem>
          <ListItem>Ex : illustrations, icons (if there is a label)</ListItem>
        </UnorderedList>
        <H3>
          <Bold>Complex image</Bold>
        </H3>
        <Paragraph>
          If an image contains complex information (e.g., charts, graphs, maps with Point of interest), provide a
          detailed description or summary that conveys the key points.
        </Paragraph>
        <Paragraph>There should be a structured detailed description</Paragraph>
        <UnorderedList>
          <ListItem>Table, paragraph, list</ListItem>
          <ListItem>
            should be accessible even for people who don't use a screen-reader right next to the image
            <UnorderedList>
              <ListItem>display it next to the image,</ListItem>
              <ListItem>use an accordion,</ListItem>
              <ListItem>have a link toward the page</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Article>
      <br />
      <Article className={className}>
        <H2>Keyboard and focus indicator</H2>
        <Paragraph>
          Ensure that images used as interactive elements (e.g., buttons, links) are focusable and have a visible focus
          indicator when navigated using the keyboard.
        </Paragraph>
        <UnorderedList>
          <ListItem>When using the tab key to move focus to an meaningful Image</ListItem>
          <ListItem>
            The focus indicator should be clearly visible and distinguishable from the surrounding content.
            <UnorderedList>
              <ListItem>Include visual focus indicators (like outlines or highlights).</ListItem>
              <ListItem>Use arrows, labels, or callouts to indicate navigation flows.</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Article>
    </>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
