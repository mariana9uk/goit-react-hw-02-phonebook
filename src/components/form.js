import { Formik, ErrorMessage} from 'formik';
import { StyledForm, StyledInput, StyledButton } from './formStyled';
import * as Yup from 'yup';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const FormElement = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={validSchema}
        onSubmit={(values, actions) => {
           onAdd(values)
           actions.resetForm()
        }}
      >
        <StyledForm>
            Phonebook
          <label>
            Name
            <StyledInput
              id="firstName"
              type="text"
              name="name"
              placeholder="Type name"
            />
            <ErrorMessage name="name" />
          </label>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
