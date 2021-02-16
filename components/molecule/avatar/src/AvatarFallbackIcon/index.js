const MoleculeAvatarFallbackIcon = props => {
  const baseClassName = 'sui-MoleculeAvatarFallbackIcon'

  return (
    <svg viewBox="0 0 128 128" className={baseClassName} {...props}>
      <path d="M103,102 C93,111 79,118 64,118 C48,118 34,111 25,101 L25,95 C25,86 31,80 40,80 L87,80 C96,80 103,86 103,95 L103,102 Z" />
      <path d="M63,24 C51,24 41,34 41,46 C41,59 51,70 63,70 C76,70 87,59 87,46 C87,34 76,24 63,24" />
    </svg>
  )
}

MoleculeAvatarFallbackIcon.displayName = 'MoleculeAvatarFallbackIcon'

export default MoleculeAvatarFallbackIcon
