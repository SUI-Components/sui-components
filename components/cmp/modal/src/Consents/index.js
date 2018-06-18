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
  onToggleConsent,
  title
}) => (
  <section className={`${CLASS}-consents`}>
    <h2 className={`${CLASS}-consentsTitle`}>{title}</h2>
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
        size="small"
      >
        Habilitar todo
      </Button>
    </div>
    <div className={`${CLASS}-consentsTable`}>
      {list.map(({id, name, policyUrl}) => (
        <ConsentItem
          enabled={consents[id]}
          onToggleConsent={onToggleConsent}
          id={id}
          isVendor={isVendor}
          key={id}
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
  onToggleConsent: PropTypes.func,
  title: PropTypes.string
}
