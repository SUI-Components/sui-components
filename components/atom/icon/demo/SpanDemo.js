import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import AtomIcon from '../src/index.js'
import {CLASS_SECTION} from './settings.js'

const SpanDemo = () => (
  <Article className={CLASS_SECTION}>
    <H2>Icons wrapped with span</H2>
    <Paragraph>
      Some icons could be wrapped on a <Code>span</Code> tag so they could be
      rendered by using setDangerouslySetInnerHTML for performance reasons. They
      should be shown centered anyway:
    </Paragraph>
    <AtomButton
      leftIcon={
        <AtomIcon>
          <span
            dangerouslySetInnerHTML={{
              __html: `<svg viewBox="0 0 24 24"><path d="m2.615.77-.774.774a6.285 6.285 0 0 0-.997 7.589l.155.253A50.69 50.69 0 0 0 14.62 23.011l.054.034c2.46 1.566 5.71 1.21 7.792-.873l.774-.774a2.596 2.596 0 0 0 0-3.669l-3.26-3.26a2.596 2.596 0 0 0-3.496-.158l-.15.135c-.23.23-.508.345-.798.345-.29 0-.568-.116-.773-.321L9.544 9.25a1.096 1.096 0 0 1-.067-1.474l.09-.098a2.57 2.57 0 0 0 .738-1.81c0-.688-.274-1.348-.761-1.835L6.284.77a2.596 2.596 0 0 0-3.669 0zm2.609 1.06 3.26 3.264a1.094 1.094 0 0 1 .082 1.455l-.22.241a2.603 2.603 0 0 0 .137 3.521l5.219 5.22a2.593 2.593 0 0 0 3.518.139l.25-.23c.407-.338 1.047-.31 1.449.09l3.26 3.26c.428.427.428 1.12 0 1.548l-.773.774a4.783 4.783 0 0 1-5.754.772l-.234-.142A49.147 49.147 0 0 1 2.655 9.148l-.416-.606a4.78 4.78 0 0 1 .662-5.938l.774-.774a1.096 1.096 0 0 1 1.549 0z"/></svg>`
            }}
          />
        </AtomIcon>
      }
    >
      Button with Icon WITH span wrapped
    </AtomButton>
    <br />
    <br />
    <AtomButton
      leftIcon={
        <AtomIcon>
          <svg viewBox="0 0 24 24">
            <path d="m2.615.77-.774.774a6.285 6.285 0 0 0-.997 7.589l.155.253A50.69 50.69 0 0 0 14.62 23.011l.054.034c2.46 1.566 5.71 1.21 7.792-.873l.774-.774a2.596 2.596 0 0 0 0-3.669l-3.26-3.26a2.596 2.596 0 0 0-3.496-.158l-.15.135c-.23.23-.508.345-.798.345-.29 0-.568-.116-.773-.321L9.544 9.25a1.096 1.096 0 0 1-.067-1.474l.09-.098a2.57 2.57 0 0 0 .738-1.81c0-.688-.274-1.348-.761-1.835L6.284.77a2.596 2.596 0 0 0-3.669 0zm2.609 1.06 3.26 3.264a1.094 1.094 0 0 1 .082 1.455l-.22.241a2.603 2.603 0 0 0 .137 3.521l5.219 5.22a2.593 2.593 0 0 0 3.518.139l.25-.23c.407-.338 1.047-.31 1.449.09l3.26 3.26c.428.427.428 1.12 0 1.548l-.773.774a4.783 4.783 0 0 1-5.754.772l-.234-.142A49.147 49.147 0 0 1 2.655 9.148l-.416-.606a4.78 4.78 0 0 1 .662-5.938l.774-.774a1.096 1.096 0 0 1 1.549 0z" />
          </svg>
        </AtomIcon>
      }
    >
      Button with Icon WITHOUT span wrapped
    </AtomButton>
  </Article>
)

export default SpanDemo
