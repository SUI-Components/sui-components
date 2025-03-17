/* eslint react/prop-types: 0 */
import {forwardRef} from 'react'
import {Anchor, Button, Code, H1, ListItem, Paragraph, Text, UnorderedList} from '@s-ui/documentation-library'

// import ArticleAnimation from './ArticleAnimation.js'
// import ArticleCloseIcon from './ArticleCloseIcon.js'
// import ArticleDefault from './ArticleDefault.js'
// import ArticleModal from './ArticleModal.js'
// import ArticleSize from './ArticleSize.js'

// import {CLASS_SECTION} from './config.js'

import Modal from '../src/index.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Modal</H1>
    <Paragraph>
      Modal windows focus users' attention to inform them about a specific interaction. They may require users to make a
      decision or warn them when an error may have very significant consequences.
    </Paragraph>

    <Modal>
      <Modal.Trigger
        as={forwardRef(({...props}, forwardedRef) => (
          <Button ref={forwardedRef} {...props}>
            Open Modal
          </Button>
        ))}
      />
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>header</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Description>body</Modal.Description>
          </Modal.Body>
          <Modal.Footer>footer</Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal>

    {/*<Modal.Root>*/}
    {/*  <Modal.Trigger />*/}
    {/*  <Modal.Portal>*/}
    {/*    <Modal.Overlay />*/}
    {/*    <Modal.Content>*/}
    {/*      <Modal.Title />*/}
    {/*      <Modal.Description />*/}
    {/*    </Modal.Content>*/}
    {/*  </Modal.Portal>*/}
    {/*</Modal.Root>*/}

    {/*<Paragraph>The package also have:</Paragraph>*/}
    {/*<UnorderedList>*/}
    {/*  <ListItem>*/}
    {/*    <Text>*/}
    {/*      <Code>MoleculeModalWithAnimation</Code>*/}
    {/*      (default)*/}
    {/*    </Text>*/}
    {/*  </ListItem>*/}
    {/*  <ListItem>*/}
    {/*    <Text>*/}
    {/*      <Anchor href="#MoleculeModal">*/}
    {/*        <Code>MoleculeModal</Code>*/}
    {/*      </Anchor>{' '}*/}
    {/*      (base)*/}
    {/*    </Text>*/}
    {/*  </ListItem>*/}
    {/*  <ListItem>*/}
    {/*    <Anchor href="#MoleculeModalWithoutAnimation">*/}
    {/*      <Text>*/}
    {/*        <Code>MoleculeModalWithoutAnimation</Code>*/}
    {/*      </Text>*/}
    {/*    </Anchor>*/}
    {/*  </ListItem>*/}
    {/*  <ListItem>*/}
    {/*    <Anchor href="#MoleculeModalWithURLState">*/}
    {/*      <Text>*/}
    {/*        <Code>MoleculeModalWithURLState</Code>*/}
    {/*      </Text>*/}
    {/*    </Anchor>*/}
    {/*  </ListItem>*/}
    {/*</UnorderedList>*/}
    {/*<Paragraph>*/}
    {/*  User can also compound <Code>MoleculeModal</Code> using:*/}
    {/*</Paragraph>*/}
    {/*<UnorderedList>*/}
    {/*  <ListItem>*/}
    {/*    <Code>MoleculeModalContent</Code>*/}
    {/*  </ListItem>*/}
    {/*  <ListItem>*/}
    {/*    <Code>MoleculeModalFooter</Code>*/}
    {/*  </ListItem>*/}
    {/*</UnorderedList>*/}
    {/*<ArticleDefault className={CLASS_SECTION} />*/}
    {/*<br />*/}
    {/*<ArticleSize className={CLASS_SECTION} />*/}
    {/*<br />*/}
    {/*<ArticleCloseIcon className={CLASS_SECTION} />*/}
    {/*<br />*/}
    {/*<H1 id="MoleculeModal">MoleculeModal</H1>*/}
    {/*<Paragraph>Base component. Full customizable by props.</Paragraph>*/}
    {/*<ArticleModal className={CLASS_SECTION} />*/}
    {/*<H1 id="MoleculeModalWithoutAnimation">MoleculeModalWithoutAnimation</H1>*/}
    {/*<ArticleAnimation className={CLASS_SECTION} />*/}
    {/* <H1 id="MoleculeModalWithURLState">MoleculeModalWithURLState</H1> */}
  </div>
)

export default Demo
