import { Center, Text } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../components/Layout';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from '../../components/FormField';

interface IFormValues {
    firstName: string;
    secondName: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const formik = useFormik<IFormValues>({
        initialValues: {
            firstName: '',
            secondName: '',
            email: '',
            subject: '',
            message: '',
        },
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values: IFormValues) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'First Name must be longer than 2 characters')
                .max(20, 'First Name must be not be more than 20 characters')
                .required('First Name is required'),
            secondName: Yup.string()
                .min(2, 'Second Name must be longer than 2 characters')
                .max(20, 'Second Name must be not be more than 20 characters')
                .required('Second Name is required'),
            email: Yup.string()
                .email('Email address must be valid')
                .required('Email address is required'),
            subject: Yup.string()
                .min(2, 'Subject must be longer than 3 characters')
                .max(100, 'Subject must not be longer than 100 characters')
                .required('Subject is required'),
            message: Yup.string()
                .min(10, 'Message must be longer than 10 characters')
                .max(1000, 'Message must not be longer than 1000 characters')
                .required('Message is required'),
        }),
    });

    console.log(formik.errors);
    console.log(formik.touched);

    return (
        <Layout title="Contact">
            <Center>
                <Text size="md" pb={['4']}>
                    If you want to reach out to me, fill in the contact form
                    below!
                </Text>
            </Center>
            <form onSubmit={formik.handleSubmit}>
                <FormField
                    label="First Name"
                    isInvalid={Boolean(
                        formik.errors.firstName && formik.touched.firstName
                    )}
                    name="firstName"
                    placeholder="First Name..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    error={formik.errors.firstName || ''}
                />
                <FormField
                    label="Second Name"
                    isInvalid={Boolean(
                        formik.errors.secondName && formik.touched.secondName
                    )}
                    name="secondName"
                    placeholder="Second Name..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secondName}
                    error={formik.errors.secondName}
                />
                <FormField
                    label="Email"
                    isInvalid={Boolean(
                        formik.errors.email && formik.touched.email
                    )}
                    name="email"
                    placeholder="Email..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.errors.email}
                />
                <FormField
                    label="Subject"
                    isInvalid={Boolean(
                        formik.errors.subject && formik.touched.subject
                    )}
                    name="subject"
                    placeholder="Message Subject..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    error={formik.errors.subject}
                />
                <FormField
                    label="Message"
                    isInvalid={Boolean(
                        formik.errors.message && formik.touched.message
                    )}
                    type="textarea"
                    name="message"
                    placeholder="Message..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    error={formik.errors.message}
                />
            </form>
        </Layout>
    );
};

export default Contact;
