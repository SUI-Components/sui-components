/* eslint-disable react/prop-types, no-unused-vars */

import React from 'react'
import {withFormik, Field} from 'formik'
import * as Yup from 'yup'
import MoleculeField from '../../../../../components/molecule/field/src'
import FormInput from '@s-ui/react-form-input'

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <div style={{display: 'flex', marginBottom: '10px'}}>
      <div>
        <MoleculeField
          label="Email"
          name="email"
          helpText="Write your email"
          errorText={touched.email && errors.email}
        >
          <FormInput
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={({ev}) => handleChange(ev)}
          />
        </MoleculeField>
      </div>
      <div>
        <MoleculeField
          label="Password"
          name="password"
          helpText="Write your password"
          errorText={touched.password && errors.password}
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
    </div>
    <button disabled={isSubmitting} type="submit">
      Login
    </button>
  </form>
)

const FormWithFormik = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string()
      .min(9, 'Password must be 9 characters or longer')
      .required('Password is required')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({email: 'That email is already taken'})
      } else {
        window.alert(JSON.stringify(values, null, 2))
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(Form)

FormWithFormik.displayName = 'FormWithFormik'

export default FormWithFormik
