const handlersFactory = ({
  disabled = false,
  onSelect,
  onSelectKey = 'Enter',
  selected,
  setInnerSelected,
  value
}) => {
  const handleClick = ev => {
    if (!disabled) {
      onSelect(ev, {value, selected: !selected})
      setInnerSelected(!selected)
    }
  }
  const handleKeyDown = ev => {
    const {key} = ev
    const isStringOnSelectKey = typeof onSelectKey === 'string'
    const isPressedOnSelectKey = isStringOnSelectKey
      ? key === onSelectKey
      : onSelectKey.includes(key)
    if (isPressedOnSelectKey && !disabled) {
      ev.preventDefault()
      onSelect(ev, {value, selected: !selected})
      setInnerSelected(!selected)
    }
  }
  const handleFocus = ev => {
    ev.preventDefault()
    ev.stopPropagation()
  }
  return {handleClick, handleKeyDown, handleFocus}
}
export default handlersFactory
