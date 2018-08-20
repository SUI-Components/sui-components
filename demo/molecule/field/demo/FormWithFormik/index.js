/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import {withFormik} from 'formik'
import * as Yup from 'yup'
import MoleculeField from '../../../../../components/molecule/field/src'
import MoleculeFieldTextarea from '@s-ui/react-molecule-field-textarea'
import FormInput from '@s-ui/react-form-input'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

import './index.scss'

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  setFieldValue,
  isSubmitting
}) => {
  return (
    <form className="FormWithFormik" onSubmit={handleSubmit}>
      <div className="FormWithFormik-fieldset">
        <div className="FormWithFormik-field">
          <MoleculeField
            label="Email"
            name="email"
            helpText="Write your email"
            errorText={touched.email && errors.email}
            successText={
              touched.email && !errors.email && 'Everything OK with this email'
            }
          >
            <FormInput
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={({ev}) => handleChange(ev)}
            />
          </MoleculeField>
        </div>
        <div className="FormWithFormik-field">
          <MoleculeField
            label="Password"
            name="password"
            helpText="Write your password"
            errorText={touched.password && errors.password}
            successText={
              touched.password &&
              !errors.password &&
              'Everything OK with this password'
            }
          >
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={({ev}) => handleChange(ev)}
            />
          </MoleculeField>
        </div>
        <div className="FormWithFormik-field">
          <MoleculeFieldTextarea
            id="description"
            label="Description"
            helpText="Write a short bio of no less than 20 characters"
            errorText={touched.description && errors.description}
            successText={
              touched.description &&
              !errors.description &&
              'Everything OK with this description'
            }
            placeholder="Tell us about yourself"
            onChange={({value}) => setFieldValue('description', value)}
            value={values.description}
            name="description"
            maxCharacters={30}
          />
        </div>
      </div>
      <button disabled={isSubmitting} type="submit">
        Register
      </button>
      {isSubmitting && <AtomSpinner type={AtomSpinnerTypes.FULL} />}
    </form>
  )
}

const FormWithFormik = withFormik({
  mapPropsToValues({email, password, description}) {
    return {
      email: email || '',
      password: password || '',
      description: description || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(9, 'Password must be 9 characters or longer')
      .required('Password is required'),
    description: Yup.string().min(
      20,
      'Description must be 20 characters or longer'
    )
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({email: 'That email is already taken'})
      } else {
        window.alert(
          `The following data has been sent: ${JSON.stringify(values, null, 2)}`
        )
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(Form)

FormWithFormik.displayName = 'FormWithFormik'

export default FormWithFormik
