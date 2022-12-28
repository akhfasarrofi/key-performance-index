import * as Yup from 'yup';
import { LoginDto } from 'types/authentication';

const LoginSchema = Yup.object().shape({
    username_email: Yup.string()
        // .email('Email must be a valid email address')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const logindDfaultValues: LoginDto = {
    username_email: '',
    password: '',
    login_from: 'website',
};

export { LoginSchema, logindDfaultValues };
