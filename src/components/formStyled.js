
import { Form, Field } from "formik";
import { styled } from "styled-components";
export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 20px;
`
export const StyledInput = styled(Field)`
display: flex;
flex-direction: column;
margin-top: 20px;
padding: 5px;
`
export const StyledButton = styled.button`
padding: 5px;
width: 80px;
display: flex;
align-items: center;
justify-content: center;
`