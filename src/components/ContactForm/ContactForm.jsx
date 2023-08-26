import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorMess } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required().positive().integer(),
});

export const ContactForm = ({ addContact }) => {
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
      <Form>
        <h2>Sign Up</h2>
        <label>
          Name <Field name="name" type="text" />
        </label>
        <ErrorMess name="name" component="span" />
        <label>
          Number <Field name="number" type="tel" />
        </label>
        <ErrorMess name="number" component="span" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
