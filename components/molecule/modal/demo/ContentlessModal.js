/* eslint react/prop-types: 0 */
/* eslint no-console: 0 */
import {useState, useMemo} from 'react'
import PropTypes from 'prop-types'
import {loremIpsum} from 'lorem-ipsum'
import MoleculeModal from 'components/molecule/modal/src'
import {IconClose} from './helperComponents'

/** See: https://www.npmjs.com/package/lorem-ipsum **/
const Lorem = ({
  count,
  format,
  paragraphLowerBound,
  paragraphUpperBound,
  random,
  sentenceLowerBound,
  sentenceUpperBound,
  suffix,
  words,
  units = 'paragraph'
}) => {
  const lorem = useMemo(
    () =>
      loremIpsum({
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
      }),
    [
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
    ]
  )
  return lorem
}

Lorem.propTypes = {
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

const ContentlessModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Open modal
      </button>
      <MoleculeModal
        isOpen={isOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        iconClose={<IconClose />}
        header="Title"
        onClose={handleClose}
        isContentless
        fitContent
      >
        <MoleculeModal.Content>
          <Lorem count={30} />
        </MoleculeModal.Content>

        <MoleculeModal.Footer>Footer</MoleculeModal.Footer>
      </MoleculeModal>
    </>
  )
}

export default ContentlessModal
