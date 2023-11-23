/* eslint react/prop-types: 0 */
import {Anchor, Code, H1, ListItem, Paragraph, Text, UnorderedList} from '@s-ui/documentation-library'

import ArticleAnimation from './ArticleAnimation.js'
import ArticleCloseIcon from './ArticleCloseIcon.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleModal from './ArticleModal.js'
import ArticleSize from './ArticleSize.js'

const BASE_CLASS_DEMO = `DemoMoleculeModal`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Modal</H1>
      <Paragraph>
        Modal windows focus users' attention to inform them about a specific interaction. They may require users to make
        a decision or warn them when an error may have very significant consequences.
      </Paragraph>

      <Paragraph>The package also have:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Text>
            <Code>MoleculeModalWithAnimation</Code>
            (default)
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <Anchor href="#MoleculeModal">
              <Code>MoleculeModal</Code>
            </Anchor>{' '}
            (base)
          </Text>
        </ListItem>
        <ListItem>
          <Anchor href="#MoleculeModalWithoutAnimation">
            <Text>
              <Code>MoleculeModalWithoutAnimation</Code>
            </Text>
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#MoleculeModalWithURLState">
            <Text>
              <Code>MoleculeModalWithURLState</Code>
            </Text>
          </Anchor>
        </ListItem>
      </UnorderedList>
      <Paragraph>
        User can also compound <Code>MoleculeModal</Code> using:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>MoleculeModalContent</Code>
        </ListItem>
        <ListItem>
          <Code>MoleculeModalFooter</Code>
        </ListItem>
      </UnorderedList>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleCloseIcon className={CLASS_SECTION} />
      <br />
      <H1 id="MoleculeModal">MoleculeModal</H1>
      <Paragraph>Base component. Full customizable by props.</Paragraph>
      <ArticleModal className={CLASS_SECTION} />
      <H1 id="MoleculeModalWithoutAnimation">MoleculeModalWithoutAnimation</H1>
      <ArticleAnimation className={CLASS_SECTION} />
      {/* <H1 id="MoleculeModalWithURLState">MoleculeModalWithURLState</H1> */}
    </div>
  </div>
)

export default Demo
