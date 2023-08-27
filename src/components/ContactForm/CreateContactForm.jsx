import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMess,
  FormStyle,
  FieldInputStyle,
  FieldSubmitStyle,
} from './CreateContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter your name'),
  number: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number format (+380XXXXXXXXX)')
    .required('Enter a phone number'),
});

export const CreateContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        addContact(values);
      }}
    >
      <FormStyle>
        <label>
          Name <FieldInputStyle name="name" type="text" />
        </label>
        <ErrorMess name="name" component="span" />
        <label>
          Number <FieldInputStyle name="number" type="tel" />
        </label>
        <ErrorMess name="number" component="span" />
        <FieldSubmitStyle type="submit">Add Contact</FieldSubmitStyle>
      </FormStyle>
    </Formik>
  );
};
