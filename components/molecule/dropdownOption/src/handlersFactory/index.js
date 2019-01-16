const handlersFactory = ({
  disabled = false,
  onSelectKey = 'Enter',
  value,
  onSelect
}) => {
  const handleClick = ev => {
    if (!disabled) onSelect(ev, {value})
  }

  const handleKeyDown = ev => {
    const {key} = ev
    const isStringOnSelectKey = typeof onSelectKey === 'string'
    const isPressedOnSelectKey = isStringOnSelectKey
      ? key === onSelectKey
      : onSelectKey.includes(key)

    if (isPressedOnSelectKey && !disabled) {
      ev.preventDefault()
      onSelect(ev, {value})
    }
  }

  const handleFocus = ev => {
    ev.preventDefault()
    ev.stopPropagation()
  }

  return {handleClick, handleKeyDown, handleFocus}
}

export default handlersFactory
