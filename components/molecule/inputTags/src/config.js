import AtomTag from '@s-ui/react-atom-tag'

export const BASE_CLASS = 'sui-AtomInput'
export const CLASS_TAGS = `${BASE_CLASS}--withTags`
export const CLASS_TAGS_FOCUS = `${CLASS_TAGS}--focus`
export const CLASS_TAGS_ERROR = `${CLASS_TAGS}--error`
export const CLASS_TAGS_SUCCESS = `${CLASS_TAGS}--success`
export const CLASS_TAGS_DISABLED = `${CLASS_TAGS}--disabled`

export const isDuplicate = (values, newValue) => {
  const upperTags = values.map(val =>
    typeof val === 'object' ? val.label.toUpperCase() : val.toUpperCase()
  )
  return upperTags.includes(newValue.toUpperCase())
}

// eslint-disable-next-line react/prop-types
export const AtomTagItem = ({onClose = () => {}, id, ...restProps}) => {
  const handleClose = e => onClose(e, {id})

  return <AtomTag onClose={handleClose} {...restProps} />
}
