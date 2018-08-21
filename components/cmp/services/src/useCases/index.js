import {GetConsentStatusUseCase} from './GetConsentStatusUseCase'
import {GetPurposesAndVendorsUseCase} from './GetPurposesAndVendorsUseCase'
import {SendConsentsUseCase} from './SendConsentsUseCase'

import {CmpRepository} from '../repository/cmpRepository'
const repository = new CmpRepository()

export const getConsentStatus = new GetConsentStatusUseCase({repository})
export const getPurposesAndVendors = new GetPurposesAndVendorsUseCase({
  repository
})
export const sendConsents = new SendConsentsUseCase({repository})
