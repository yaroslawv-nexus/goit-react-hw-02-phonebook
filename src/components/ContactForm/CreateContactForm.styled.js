import styled from "styled-components"
import { ErrorMessage, Form, Field} from 'formik';

export const ErrorMess = styled(ErrorMessage)`
   color: red;
`;

export const FormStyle = styled(Form)`

  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FieldInputStyle = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

`

export const FieldSubmitStyle = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

`