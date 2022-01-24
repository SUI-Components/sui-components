import {Cell, Grid, Label, Text} from '@s-ui/documentation-library'

import AtomActionButton, {
  atomActionButtonColors,
  atomActionButtonStyles
} from '../src/index.js'
import {icon} from './settings.js'

const ActionButtonCatalog = props => {
  return (
    <Grid
      cols={Object.values(atomActionButtonColors).length + 1}
      gutter="10"
      style={{width: 800}}
    >
      <Cell />
      {Object.values(atomActionButtonColors).map(
        (atomActionButtonColor, key) => (
          <Cell key={key}>
            <Text>
              <Label>{atomActionButtonColor}</Label>
            </Text>
          </Cell>
        )
      )}
      {Object.values(atomActionButtonStyles).map(
        (atomActionButtonStyle, index) => (
          <>
            <Cell>
              <Text>
                <Label>{atomActionButtonStyle}</Label>
              </Text>
            </Cell>
            {Object.values(atomActionButtonColors).map(
              (atomActionButtonColor, iterator) => (
                <Cell key={iterator}>
                  <AtomActionButton
                    style={atomActionButtonStyle}
                    color={atomActionButtonColor}
                    icon={icon}
                    {...props}
                  >
                    Button
                  </AtomActionButton>
                </Cell>
              )
            )}
          </>
        )
      )}
    </Grid>
  )
}

export default ActionButtonCatalog
