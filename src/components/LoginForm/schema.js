import * as Yup from 'yup'

export const schema = Yup.object().shape({
    email: Yup.string().email().required('Email is Required'),
    password: Yup.string().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required('Password is Required')
})