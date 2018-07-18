import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'
import {ConsentItem} from '../ConsentItem'

import {CLASS} from '../settings'

export const Consents = ({
  consents,
  disableAllLiteral,
  enableAllLiteral,
  isVendor,
  list,
  onToggleAll,
  onToggleConsent,
  title
}) => (
  <section className={`${CLASS}-consents`}>
    <h2 className={`${CLASS}-title ${CLASS}-consentsTitle`}>{title}</h2>
    <div className={`${CLASS}-consentsActions`}>
      <Button
        onClick={() => onToggleAll({enabled: false, isVendor})}
        type="secondary"
        size="small"
      >
        {disableAllLiteral}
      </Button>
      <Button
        onClick={() => onToggleAll({enabled: true, isVendor})}
        type="primary"
        size="small"
      >
        {enableAllLiteral}
      </Button>
    </div>
    <div className={`${CLASS}-consentsTable`}>
      {list.map(({id, name, description, policyUrl}) => (
        <ConsentItem
          description={description}
          enabled={consents[id]}
          id={id}
          isVendor={isVendor}
          key={id}
          name={name}
          onToggleConsent={onToggleConsent}
          url={policyUrl}
        />
      ))}
    </div>
  </section>
)

Consents.propTypes = {
  consents: PropTypes.object.isRequired,
  disableAllLiteral: PropTypes.string,
  enableAllLiteral: PropTypes.string,
  isVendor: PropTypes.bool,
  list: PropTypes.array.isRequired,
  onToggleAll: PropTypes.func.isRequired,
  onToggleConsent: PropTypes.func.isRequired,
  title: PropTypes.string
}
