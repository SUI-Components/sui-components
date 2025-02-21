import {Anchor, Box, H1, H2, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'

import ArticleColor from './articles/ArticleColor.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDesign from './articles/ArticleDesign.js'
import ArticleDisabled from './articles/ArticleDisabled.js'
import ArticleIcons from './articles/ArticleIcons.js'
import ArticleKind from './articles/ArticleKind.js'
import ArticlePressed from './articles/ArticlePressed.js'
import ArticleReadOnly from './articles/ArticleReadOnly.js'
import ArticleResponsive from './articles/ArticleResponsive.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleTypes from './articles/ArticleTypes.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

export default () => (
  <div className="sui-StudioPreview">
    <H1>Tag</H1>
    <Paragraph>
      We use tags to visually emphasise features of the UI and make recognition and interaction easier.
    </Paragraph>
    <Paragraph>Help people enter information, make selections, filter content, or trigger actions.</Paragraph>
    <H2>Tags aren’t buttons</H2>
    <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
      <Paragraph>
        <Strong>Tags</Strong> and{' '}
        <Anchor href="/workbench/atom/button">
          <Strong>Buttons</Strong>
        </Anchor>{' '}
        are similar in that they both provide visual cues to prompt users to take actions and make selections. However,
        there are important distinctions to be aware of.
      </Paragraph>
    </Box>
    <br />
    <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
      <Paragraph>
        Multiple Tags should appear together in a group, whereas there should be no more than 3 buttons in a single
        arrangement.
      </Paragraph>
    </Box>
    <br />
    <Paragraph>
      <Strong>Tags</Strong> are <Strong>reactive</Strong> and <Strong>contextual</Strong>, whereas{' '}
      <Strong>buttons</Strong> are <Strong>static</Strong> and <Strong>predetermined</Strong>. A Tag should offer a
      different action depending on the nature of the content it supports, whereas a button should be a persistent
      fixture of a layout. From a user-flow perspective, Tags represent forking paths in an experience while Buttons
      represents a linear step along a flow.
    </Paragraph>
    <br />
    <H2>Tags aren't input fields</H2>
    <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
      <Paragraph>
        Interactive Tags represent Call to Action elements and should never be placed inside forms rolled as checkboxes
        or radio buttons
      </Paragraph>
    </Box>
    <Paragraph>Tags handle 4 different features:</Paragraph>
    <UnorderedList>
      <ListItem>
        <Strong>Display</Strong> data
      </ListItem>
      <ListItem>
        Fire <Strong>Actions</Strong> (button role)
      </ListItem>
      <ListItem>
        Handle <Strong>Selections</Strong> (button role selected)
      </ListItem>
      <ListItem>
        Manage <Strong>Deletions</Strong> (clear button)
      </ListItem>
    </UnorderedList>
    <Paragraph>Combining those features tags give 4 different usages:</Paragraph>
    <UnorderedList>
      <ListItem style={{margin: '16px 0'}}>
        <Anchor href="#assist" style={{padding: '16px 0'}}>
          Assist
        </Anchor>
      </ListItem>
      <ListItem style={{margin: '16px 0'}}>
        <Anchor href="#filter" style={{padding: '16px 0'}}>
          Filter
        </Anchor>
      </ListItem>
      <ListItem style={{margin: '16px 0'}}>
        <Anchor href="#input" style={{padding: '16px 0'}}>
          Input
        </Anchor>
      </ListItem>
      <ListItem style={{margin: '16px 0'}}>
        <Anchor href="#suggestion" style={{padding: '16px 0'}}>
          Suggestion
        </Anchor>
      </ListItem>
    </UnorderedList>
    <ArticleDefault className={CLASS_SECTION} />
    <br />
    <ArticleKind className={CLASS_SECTION} />
    <br />
    <ArticleColor className={CLASS_SECTION} />
    <br />
    <ArticleDesign className={CLASS_SECTION} />
    <br />
    <ArticleSize className={CLASS_SECTION} />
    <br />
    <ArticlePressed className={CLASS_SECTION} />
    <br />
    <ArticleIcons className={CLASS_SECTION} />
    <br />
    <ArticleDisabled className={CLASS_SECTION} />
    <br />
    <ArticleReadOnly className={CLASS_SECTION} />
    <br />
    <ArticleTypes className={CLASS_SECTION} />
    <br />
    <ArticleResponsive className={CLASS_SECTION} />
  </div>
)
