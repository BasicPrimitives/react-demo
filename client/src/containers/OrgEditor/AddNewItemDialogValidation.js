import { createValidator, required, email, phone } from 'utils/validation';

const addNewItemDialogValidation = createValidator({
  title: [required],
  description: [required],
  email: [email],
  phone: [phone]
});
export default addNewItemDialogValidation;
