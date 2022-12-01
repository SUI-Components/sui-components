import PropTypes from 'prop-types'

import {Box, Label, Paragraph} from '@s-ui/documentation-library'

const Color = ({name, token, mode}) => {
  return (
    <Box color={token} mode={mode} style={{borderRadius: 0}}>
      <Label fontWeight="bold">{name}</Label>
      <Paragraph>{token}</Paragraph>
    </Box>
  )
}

Color.propTypes = {
  name: PropTypes.string,
  token: PropTypes.string,
  mode: PropTypes.string
}

export default Color
