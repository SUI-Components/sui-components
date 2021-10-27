export const getLeftIcon = () => {
  return (
    <svg className="sui-Icon" viewBox="0 0 24 24">
      <path d="M12 22C6.486 22 2 17.515 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zM11 5v7.415l4.293 4.293 1.414-1.415L13 11.586V5h-2z" />
    </svg>
  )
}

export const getRightIcon = () => {
  return (
    <svg className="sui-Icon" viewBox="0 0 64 64">
      <path d="M18,62a2,2,0,0,1-1.41-3.41L43.17,32,16.59,5.41a2,2,0,0,1,2.83-2.83L48.83,32,19.41,61.41A2,2,0,0,1,18,62Z" />
    </svg>
  )
}

export const handleOnClick = () => {
  alert('clicked')
}
