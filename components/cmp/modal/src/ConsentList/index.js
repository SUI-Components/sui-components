import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

import {CLASS} from '../settings'

export const Consents = ({children}) => (
  <section className={`${CLASS}-consents`}>
    <Button onClick={() => {}} type="secondary">
      Habilitar todo
    </Button>
    <Button onClick={() => {}} type="secondary">
      Habilitar todo
    </Button>
    <div>{children}</div>
  </section>
)

Consents.propTypes = {
  children: PropTypes.element.isRequired
}
