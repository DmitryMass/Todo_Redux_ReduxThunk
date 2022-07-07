import * as yup from 'yup';

export const validationInputs = yup.object().shape({
  firstName: yup.string().label('Contact name').min(3).max(12).required(),
  lastName: yup.string().label('Contact surname').min(3).max(12).required(),
  phone: yup
    .number()
    .label('Contact number')
    .min(2, 'Must be only Numbers')
    .nullable(true)
    .integer()
    .required(),
});
