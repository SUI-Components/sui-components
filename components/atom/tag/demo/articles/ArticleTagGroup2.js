import {useState} from 'react'

import AtomTag, {atomTagDesigns} from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

const options = [
  {id: 0, value: 'Autónomo'},
  {id: 1, value: 'De duración determinada'},
  {id: 2, value: 'De relevo'},
  {id: 3, value: 'Fijo discontinuo'},
  {id: 4, value: 'Formativo'},
  {id: 5, value: 'Indefinido'},
  {id: 6, value: 'A tiempo parcial'},
  {id: 7, value: 'Otros contratos'}
]

const ArticleTagGroup2 = ({className}) => {
  const [values, setValues] = useState([])
  const handleClick = (ev, {value}) => {
    const selectedValues = new Set(values)
    selectedValues.has(value)
      ? selectedValues.delete(value)
      : selectedValues.add(value)
    setValues(Array.from(selectedValues))
  }
  return (
    <Article className={className}>
      <H2>TagGroup 2</H2>
      <Paragraph>Actionable tags can be used as selectable tags.</Paragraph>
      <br />
      <Paragraph>
        Substitutes SOLID design for 'special' tag type to mark a tag as
        selected and vice versa to unselect a tag.
      </Paragraph>
      <br />
      <div style={{width: '500px'}}>
        {options?.map((opt, pos) => (
          <AtomTag
            key={opt.key || pos}
            label={opt.value}
            value={opt.id}
            design={!values?.includes(opt.id) ? atomTagDesigns.OUTLINE : null}
            type={values?.includes(opt.id) ? 'special' : null}
            onClick={(ev, {value}) => handleClick(ev, {value})}
          />
        ))}
      </div>
      <Paragraph>–––––</Paragraph>
    </Article>
  )
}

ArticleTagGroup2.displayName = 'ArticleTagGroup'

ArticleTagGroup2.propTypes = {
  className: PropTypes.string
}

export default ArticleTagGroup2
