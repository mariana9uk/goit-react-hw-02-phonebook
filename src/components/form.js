import { Formik, ErrorMessage} from 'formik';
import { StyledForm, StyledInput, StyledButton, ErrorMessageStyled } from './formStyled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
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
           onAdd({...values, id: nanoid()})
           actions.resetForm()
        }}
      >
        <StyledForm>
          
          <label>
            Name
            <StyledInput
              id="firstName"
              type="text"
              name="name"
              placeholder="Type name"
            />
            < ErrorMessage component={ErrorMessageStyled} name="name" />
          </label>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
