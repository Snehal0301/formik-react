import React, { useState } from 'react'
import '../../common/Auth.css'
import Input from '../../components/input/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    const [displayErr, setDisplayErr] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(4, "Too short")
                .max(15, "Username must be less than 15 characters")
                .required("Please fill Username"),
            email: Yup.string()
                .email("Invalid Email address")
                .required("Please fill Email"),
            password: Yup.string()
                .min(8, 'Password must be 8 characters long')
                .matches(/[0-9]/, 'Password requires a number')
                .matches(/[a-z]/, 'Password requires a lowercase letter')
                .matches(/[A-Z]/, 'Password requires an uppercase letter')
                .matches(/[^\w]/, 'Password requires a symbol')
                .required("Please fill Password"),
            cpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
                .required("Please fill Confirm password"),
        }),
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })

    return (
        <>
            <form className='form' onSubmit={formik.handleSubmit}>
                <p className='title'>Sign Up</p>
                <Input type="text" label="User Name" name="username" value={formik.values.username} onchange={formik.handleChange} onblur={formik.handleBlur}  />
                {
                    formik.touched.username &&
                        formik.errors.username ?
                        <p className="error">{formik.errors.username}</p> : null
                }


                <Input type="email" label="Email" name="email" value={formik.values.email} onchange={formik.handleChange} onblur={formik.handleBlur} />

                {
                    formik.touched.email &&
                        formik.errors.email ?
                        <p className="error">{formik.errors.email}</p> : null
                }

                <Input type="password" label="Password" name="password" value={formik.values.password} onchange={formik.handleChange} onblur={formik.handleBlur} />
                {
                    formik.touched.password &&
                        formik.errors.password ?
                        <p className="error">{formik.errors.password}</p> : null
                }


                <Input type="password" label="Confirm Password" name="cpassword" value={formik.values.cpassword} onchange={formik.handleChange} onblur={formik.handleBlur} />

                {
                    formik.touched.cpassword &&
                        formik.errors.cpassword ?
                        <p className="error">{formik.errors.cpassword}</p> : null
                }

                <button type='submit'>Submit</button>
            </form>
        </>

    )
}

export default Signup