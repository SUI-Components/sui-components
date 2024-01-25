import PropTypes from 'prop-types'

export const GetIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 32 32">
      <path d="M30,9l1,1c1,1,1,2,0,2L17,25c-1,1-2,1-2,0 L2,12c-1-1-1-2,0-2l1-1c1-1,2-1,2,0L16,20L28,9 C28,8,29,8,30,9z" />
    </svg>
  )
}

GetIcon.propTypes = {}

export const Section = ({children}) => {
  return <div style={{flexBasis: 400, flexGrow: 0, flexShrink: 0, padding: 20}}>{children}</div>
}

Section.propTypes = {
  children: PropTypes.node
}

export const Text = () => {
  return (
    <p style={{margin: 0}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna non diam euismod blandit et eu ex.
      Vivamus pulvinar sodales tincidunt. Proin venenatis tristique quam, quis vehicula eros volutpat sed. Etiam sed
      tristique ante. Aenean commodo erat quis pulvinar luctus. Pellentesque ultricies lorem vitae ante euismod, at
      imperdiet est euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. In dignissim porttitor sem, a varius nisl ullamcorper
      ut. Vivamus lacinia, quam eu placerat tempus, velit massa vulputate turpis, sit amet bibendum risus massa sit amet
      urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus
      lobortis blandit. Vivamus scelerisque blandit purus a suscipit. Nunc mi elit, condimentum eget pulvinar eu,
      lacinia vitae ligula. Sed sit amet eros auctor ipsum tincidunt hendrerit ac mollis justo. Ut ac sagittis ipsum.
    </p>
  )
}

Text.propTypes = {}

export const DemoWrapper = ({children}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}
    >
      {children}
    </div>
  )
}

DemoWrapper.propTypes = {
  children: PropTypes.node
}
