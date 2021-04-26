import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  H4,
  Paragraph,
  RadioButtonGroup,
  RadioButton,
  Grid,
  Cell,
  Code,
  Separator,
  Bold
} from '@s-ui/documentation-library'
import AtomPopover from '../../../../components/atom/popover/src'
import ReMountDebounced from './ReMountDebounced'

const PopIt = ({
  isVisible,
  defaultIsVisible,
  children,
  content,
  onClose,
  onOpen
}) => {
  return (
    <AtomPopover
      isVisible={isVisible}
      defaultIsVisible={defaultIsVisible}
      content={content}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Bold onClick={onOpen}>{children}</Bold>
    </AtomPopover>
  )
}

PopIt.propTypes = {
  isVisible: PropTypes.bool,
  defaultIsVisible: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.node,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}

const ArticleDefault = ({className, content: Content}) => {
  const [isVisible, setIsVisible] = useState(undefined)
  const [defaultIsVisible, setDefaultIsVisible] = useState(undefined)
  const possibleProps = {
    uncontrolled: {
      defaultIsVisible: defaultIsVisible,
      content: <Content />
    },
    controlled: {
      isVisible: isVisible,
      content: <Content />,
      onOpen: () => setIsVisible(true),
      onClose: () => setIsVisible(false)
    }
  }

  return (
    <Article className={className}>
      <H2>Default</H2>

      <Grid cols={6} gutter={[8, 8]}>
        <Cell span={3}>
          <H4>Uncontrolled component</H4>
          <Paragraph>
            The Popover is normally used as uncontrolled component. User can use
            it wrapping the component desired to be targeted and deciding the
            default onLoading configuration of the element under the{' '}
            <Code>defaultIsVisible</Code> prop. By default it is false.
          </Paragraph>
          <Paragraph>
            If the Popover is not visible and the use clicks on the target area,
            the popover will toggle its internal visible state showing an
            element positioned on top of the other elements of the document.
          </Paragraph>
          <Paragraph>
            When the popover is visible, it there is any click or tap event on
            any part of the document not contained in the popover content, it
            will immediately toggle its inner visible state becoming invisible.
          </Paragraph>
        </Cell>

        <Cell span={3}>
          <H4>Controlled component</H4>
          <Paragraph>
            The popover can be controlled using the <Code>isVisible</Code> prop.
            It is a boolean prop and its value is undefined.
          </Paragraph>
          <Paragraph>
            Acting as a controlled component, the behavior of its visibility
            state might be fully controlled by an outer component defining its
            function handler (<Code>onClose</Code>, <Code>onOpen</Code>) props.
          </Paragraph>
        </Cell>
        <Cell span={3}>
          <Separator style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>defaultIsVisible</span>
            <span>Uncontrolled</span>
          </Separator>
        </Cell>
        <Cell span={3}>
          <Separator style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Controlled</span>
            <span>isVisible</span>
          </Separator>
        </Cell>
        <Cell>
          <Paragraph>{`${defaultIsVisible}`}</Paragraph>
        </Cell>
        <Cell span={2}>
          <Paragraph>
            <ReMountDebounced
              observe={[defaultIsVisible]}
              fallback={
                <>
                  Lorem ipsum dolor sit <Bold>amet</Bold>, consectetur
                  adipiscing elit. Sed volutpat facilisis lectus, eu posuere
                  arcu fermentum ut. Duis vel gravida enim. Etiam{' '}
                  <Bold>lobortis</Bold> sapien elit, non facilisis velit
                  vulputate non. Aenean nec iaculis <Bold>lacus</Bold>. Ut
                  ultrices risus velit, vel tempor felis pulvinar convallis. In
                  volutpat leo in risus ultrices <Bold>consectetur</Bold>. Ut ac
                  tortor vel lacus pretium dapibus. Nam ullamcorper nulla a
                  ornare pellentesque. <Bold>Suspendisse</Bold> placerat
                  accumsan consectetur. Curabitur vitae ligula fermentum,
                  imperdiet ante malesuada, <Bold>ullamcorper</Bold> enim. Nam
                  ac nulla eu dui sagittis facilisis. Phasellus porta porttitor
                  sapien ut <Bold>consectetur</Bold>. Maecenas in{' '}
                  <Bold>congue</Bold> sem. Integer sed urna vitae erat{' '}
                  <Bold>laoreet</Bold> laoreet sed in turpis.
                </>
              }
            >
              Lorem ipsum dolor sit{' '}
              <PopIt {...possibleProps.uncontrolled}>amet</PopIt>, consectetur
              adipiscing elit. Sed volutpat facilisis lectus, eu posuere arcu
              fermentum ut. Duis vel gravida enim. Etiam{' '}
              <PopIt {...possibleProps.uncontrolled}>lobortis</PopIt> sapien
              elit, non facilisis velit vulputate non. Aenean nec iaculis{' '}
              <PopIt {...possibleProps.uncontrolled}>lacus</PopIt>. Ut ultrices
              risus velit, vel tempor felis pulvinar convallis. In volutpat leo
              in risus ultrices{' '}
              <PopIt {...possibleProps.uncontrolled}>consectetur</PopIt>. Ut ac
              tortor vel lacus pretium dapibus. Nam ullamcorper nulla a ornare
              pellentesque.{' '}
              <PopIt {...possibleProps.uncontrolled}>Suspendisse</PopIt>{' '}
              placerat accumsan consectetur. Curabitur vitae ligula fermentum,
              imperdiet ante malesuada,{' '}
              <PopIt {...possibleProps.uncontrolled}>ullamcorper</PopIt> enim.
              Nam ac nulla eu dui sagittis facilisis. Phasellus porta porttitor
              sapien ut{' '}
              <PopIt {...possibleProps.uncontrolled}>consectetur</PopIt>.
              Maecenas in <PopIt {...possibleProps.uncontrolled}>congue</PopIt>{' '}
              sem. Integer sed urna vitae erat{' '}
              <PopIt {...possibleProps.uncontrolled}>laoreet</PopIt> laoreet sed
              in turpis.
            </ReMountDebounced>
          </Paragraph>
        </Cell>
        <Cell span={2}>
          <Paragraph>
            Lorem ipsum dolor sit{' '}
            <PopIt {...possibleProps.controlled}>amet</PopIt>, consectetur
            adipiscing elit. Sed volutpat facilisis lectus, eu posuere arcu
            fermentum ut. Duis vel gravida enim. Etiam{' '}
            <PopIt {...possibleProps.controlled}>lobortis</PopIt> sapien elit,
            non facilisis velit vulputate non. Aenean nec iaculis{' '}
            <PopIt {...possibleProps.controlled}>lacus</PopIt>. Ut ultrices
            risus velit, vel tempor felis pulvinar convallis. In volutpat leo in
            risus ultrices{' '}
            <PopIt {...possibleProps.controlled}>consectetur</PopIt>. Ut ac
            tortor vel lacus pretium dapibus. Nam ullamcorper nulla a ornare
            pellentesque.{' '}
            <PopIt {...possibleProps.controlled}>Suspendisse</PopIt> placerat
            accumsan consectetur. Curabitur vitae ligula fermentum, imperdiet
            ante malesuada,{' '}
            <PopIt {...possibleProps.controlled}>ullamcorper</PopIt> enim. Nam
            ac nulla eu dui sagittis facilisis. Phasellus porta porttitor sapien
            ut <PopIt {...possibleProps.controlled}>consectetur</PopIt>.
            Maecenas in <PopIt {...possibleProps.controlled}>congue</PopIt> sem.
            Integer sed urna vitae erat{' '}
            <PopIt {...possibleProps.controlled}>laoreet</PopIt> laoreet sed in
            turpis.
          </Paragraph>
        </Cell>
        <Cell>
          <Paragraph style={{textAlign: 'right'}}>{`${isVisible}`}</Paragraph>
        </Cell>
        <Cell span={3}>
          <RadioButtonGroup
            value={`${defaultIsVisible}`}
            fullWidth
            onChange={value => {
              switch (value) {
                case 'true':
                  setDefaultIsVisible(true)
                  break
                case 'false':
                  setDefaultIsVisible(false)
                  break
                case 'undefined':
                default:
                  setDefaultIsVisible(undefined)
                  break
              }
            }}
          >
            {[undefined, false, true].map((possibleValue, index) => (
              <RadioButton
                key={index}
                value={`${possibleValue}`}
                label={`${possibleValue}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell span={3}>
          <RadioButtonGroup
            value={`${isVisible}`}
            fullWidth
            onChange={value => {
              switch (value) {
                case 'true':
                  setIsVisible(true)
                  break
                case 'false':
                  setIsVisible(false)
                  break
                case 'undefined':
                default:
                  setIsVisible(undefined)
                  break
              }
            }}
          >
            {[undefined, false, true].map((possibleValue, index) => (
              <RadioButton
                key={index}
                value={`${possibleValue}`}
                label={`${possibleValue}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'
ArticleDefault.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleDefault
