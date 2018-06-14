import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'
import {ConsentItem} from '../ConsentItem'

import {CLASS} from '../settings'

export const Consents = ({consents, isVendor, list}) => (
  <section className={`${CLASS}-consents`}>
    <Button onClick={() => {}} type="secondary" size="small">
      Deshabilitar todo
    </Button>
    <Button onClick={() => {}} type="secondary">
      Habilitar todo
    </Button>
    <div>
      {list.map(({id, name, policyUrl}) => (
        <ConsentItem
          enabled={consents[id]}
          handleToggleConsent={() => {}}
          id={id}
          isVendor={isVendor}
          key={`${id}-${isVendor ? 'vendor' : 'purpose'}`}
          title={name}
          url={policyUrl}
        />
      ))}
    </div>
  </section>
)

Consents.propTypes = {
  consents: PropTypes.object.isRequired,
  isVendor: PropTypes.bool,
  list: PropTypes.array.isRequired
}
