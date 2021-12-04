import React from "react";
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import DatePicker from "react-datepicker";
import * as Yup from 'yup';

const PageForm = () => {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const onSubmit = (values, actions) => {
        fetch("/", {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                'form-name': 'contact',
                ...values
            }),
        })
            .then(() => {
                alert('Success')
                actions.resetForm()
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() => actions.setSubmitting(false))
    }

    const DatePickerField = ({ ...props }) => {
        const { setFieldValue } = useFormikContext();
        const [field] = useField(props);
        return (
            <DatePicker
                {...field}
                {...props}
                dateFormat="d/M/Y"
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
            />
        );
    };

    const SignupSchema = Yup.object().shape({

        name: Yup.string()
            .min(2, 'Must have at least 2 characters')
            .max(50, 'Must have a maximun of 50 characters')
            .matches(/[A-Za-záéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ]+/, "Only characters are allowed")
            .required('Name is required'),

        email: Yup.string().email('Invalid email').required('Email is required'),

        date: Yup.date()
            .min(new Date(), 'Date must be later than today.')
            .required('Date is required'),

    });

    return (
        <div>
            <div className="bg-red-700">
                <h1 >Ticket Reservation</h1>
                <Formik
                    initialValues={
                        {
                            name: '',
                            email: '',
                            tickets: '1',
                            date: new Date()
                        }
                    }
                    validationSchema={SignupSchema}

                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form name="contact" data-netlify={true} >
                            <div >
                                <label htmlFor="name">Name*</label>
                                <Field name="name" type="text" />
                                {errors.name && touched.name ? (<div >{errors.name}</div>) : null}
                            </div>

                            <div >
                                <label htmlFor="email">Email Address*</label>
                                <Field name="email" type="email" />
                                {errors.email && touched.email ? (<div >{errors.email}</div>) : null}
                            </div>

                            <div >
                                <label htmlFor="tickets">Number of Tickets:</label>
                                <Field as="select" name="tickets">
                                    {[...Array(10).keys()].map((el) => (
                                        <option key={`opt-${el}`} value={el + 1}>{el + 1}</option>
                                    ))}
                                </Field>
                                {errors.tickets && touched.tickets ? (<div >{errors.tickets}</div>) : null}
                            </div>

                            <div >
                                <label htmlFor="date">Date of reservation:*</label>
                                <DatePickerField name="date" />
                                {errors.date ? (<div >{errors.date}</div>) : null}
                            </div>

                            <div >
                                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PageForm;