import memoize from 'lru-memoize';
import {
  createValidator, required, email, phone
} from 'utils/validation';

const addNewItemDialogValidation = createValidator({
  title: [required],
  description: [required],
  email: [email],
  phone: [phone]
});
export default memoize(10)(addNewItemDialogValidation);
