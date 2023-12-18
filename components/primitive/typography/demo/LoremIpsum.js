import {loremIpsum} from 'lorem-ipsum'
import PropTypes from 'prop-types'

export const useLorem = ({
  count,
  format,
  paragraphLowerBound,
  paragraphUpperBound,
  random,
  sentenceLowerBound,
  sentenceUpperBound,
  suffix,
  words,
  units
}) => {
  const text = loremIpsum({
    count,
    format,
    paragraphLowerBound,
    paragraphUpperBound,
    random,
    sentenceLowerBound,
    sentenceUpperBound,
    suffix,
    words,
    units
  })
  return format === 'html' ? <span dangerouslySetInnerHTML={{__html: text}} /> : text
}

/** See: https://www.npmjs.com/package/lorem-ipsum **/
const LoremIpsum = ({...props}) => {
  return useLorem(props)
}

LoremIpsum.propTypes = {
  // Number of "words", "sentences", or "paragraphs"
  count: PropTypes.number,
  // "plain" or "html"
  format: PropTypes.oneOf(['plain', 'html']),
  // Min. number of sentences per paragraph.
  paragraphLowerBound: PropTypes.number,
  // Max. number of sentences per paragarph.
  paragraphUpperBound: PropTypes.number,
  // A PRNG function
  random: PropTypes.func,
  // Min. number of words per sentence.
  sentenceLowerBound: PropTypes.number,
  // Max. number of words per sentence.
  sentenceUpperBound: PropTypes.number,
  // Line ending, defaults to "\n" or "\r\n" (win32)
  suffix: PropTypes.string,
  // paragraph(s), "sentence(s)", or "word(s)"
  units: PropTypes.oneOf(['paragraph', 'sentence', 'word']),
  // Array of words to draw from
  words: PropTypes.arrayOf(PropTypes.string)
}

export default LoremIpsum
