/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {Code, H1, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleColorInheritance from './articles/ArticleColorInheritance.js'
import ArticleColorsAndSizes from './articles/ArticleColorsAndSizes.js'
import ArticleShapesAndSizes from './articles/ArticleShapesAndSizes.js'
import ArticleLazy from './articles/ArticleLazy.js'
import ArticlePolymorphic from './articles/ArticlePolymorphic.js'
import ArticleSpan from './articles/ArticleSpan.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

export default function () {
  return (
    <div className="sui-StudioPreview">
      <H1>Icon</H1>
      <Paragraph>
        Icons are small images or symbols used to represent an idea, function, or feature in a graphical user interface
        (GUI). They provide a quick, intuitive way to convey information without relying on text.
      </Paragraph>
      <Paragraph>They can represent:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Strong>Actions:</Strong> such as print, save, or delete
        </ListItem>
        <ListItem>
          <Strong>Objects:</Strong> such as files, folders, or applications
        </ListItem>
        <ListItem>
          <Strong>States:</Strong> such as on, off, or warning
        </ListItem>
        <ListItem>
          <Strong>Navigation:</Strong> such as back, forward, or home
        </ListItem>
      </UnorderedList>
      <Paragraph>
        <Code>&#60;AtomIcon&#62;</Code> wraps a <Code>&#60;svg&#62;</Code> that follows the rules defined on the UX
        Definition and give you some colors, sizes and interesting features like lazy-load rendering.
      </Paragraph>
      <ArticleColorsAndSizes className={CLASS_SECTION} />
      <br />
      <ArticleShapesAndSizes className={CLASS_SECTION} />
      <br />
      <ArticleColorInheritance className={CLASS_SECTION} />
      <br />
      <ArticlePolymorphic className={CLASS_SECTION} />
      <br />
      <ArticleLazy className={CLASS_SECTION} />
      <br />
      <ArticleSpan className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}
