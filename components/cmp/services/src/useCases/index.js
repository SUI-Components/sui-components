import {GetConsentStatus} from './getConsentStatus'
import {GetPurposesAndVendors} from './getPurposesAndVendors'
import {SendConsents} from './sendConsents'

import {CmpRepository} from '../repository/cmpRepository'

const repository = new CmpRepository()

export const getConsentStatus = new GetConsentStatus({repository})
export const getPurposesAndVendors = new GetPurposesAndVendors({repository})
export const sendConsents = new SendConsents({repository})
