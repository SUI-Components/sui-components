const handlersFactory = ({
  disabled = false,
  onSelect,
  selectKey = 'Enter',
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
    const isStringSelectKey = typeof selectKey === 'string'
    const isPressedSelectKey = isStringSelectKey
      ? key === selectKey
      : selectKey.includes(key)
    if (isPressedSelectKey && !disabled) {
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
