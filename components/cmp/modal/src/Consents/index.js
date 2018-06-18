import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'
import {ConsentItem} from '../ConsentItem'

import {CLASS} from '../settings'

export const Consents = ({
  consents,
  isVendor,
  list,
  onToggleAll,
  onToggleConsent
}) => (
  <section className={`${CLASS}-consents`}>
    <div className={`${CLASS}-consentsActions`}>
      <Button
        onClick={() => onToggleAll({enabled: false, isVendor})}
        type="secondary"
        size="small"
      >
        Deshabilitar todo
      </Button>
      <Button
        onClick={() => onToggleAll({enabled: true, isVendor})}
        type="primary"
      >
        Habilitar todo
      </Button>
    </div>
    <div className={`${CLASS}-consentsScroll`}>
      {list.map(({id, name, policyUrl}) => (
        <ConsentItem
          enabled={consents[id]}
          onToggleConsent={onToggleConsent}
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
  list: PropTypes.array.isRequired,
  onToggleAll: PropTypes.func,
  onToggleConsent: PropTypes.func
}
