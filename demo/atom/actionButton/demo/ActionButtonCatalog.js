/* eslint react/prop-types: 0 */
import React, {Fragment} from 'react'
import {Cell, Grid, Text} from '@s-ui/documentation-library'
import AtomActionButton, {
  atomActionButtonColors,
  atomActionButtonStyles
} from '../../../../components/atom/actionButton/src'

export default props => {
  return (
    <Grid cols={Object.values(atomActionButtonColors).length + 1} gutter="10">
      <Cell />
      {Object.values(atomActionButtonColors).map(
        (atomActionButtonColor, key) => (
          <Cell key={key}>
            <Text>color="{atomActionButtonColor}"</Text>
          </Cell>
        )
      )}
      {Object.values(atomActionButtonStyles).map(
        (atomActionButtonStyle, index) => (
          <Fragment key={index}>
            <Cell>
              <Text>style="{atomActionButtonStyle}"</Text>
            </Cell>
            {Object.values(atomActionButtonColors).map(
              (atomActionButtonColor, iterator) => (
                <Cell key={iterator}>
                  <AtomActionButton
                    style={atomActionButtonStyle}
                    color={atomActionButtonColor}
                    icon={props.icon}
                    {...props}
                  >
                    Button
                  </AtomActionButton>
                </Cell>
              )
            )}
          </Fragment>
        )
      )}
    </Grid>
  )
}
