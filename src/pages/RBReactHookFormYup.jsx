import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { values } from 'lodash'
import React, { useRef, useState } from 'react'
import { Breadcrumb, Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';

const RBReactHookFormYup = () => {
    //const [disabled, setDisabled] = useState(false)
    // const [loading, setLoading] = useState(false)
    const refForm = useRef()
    const schema = yup.object().shape({
        firstname: yup.string().required("First name is required"),
        sex: yup.string().required("Sex selection is required"),
        resume: yup
            .mixed()
            .required("Resume is required")
            .test("fileTypeValidation", "Only PDF and DOCX files are allowed", (value) => {
                if (!value || !value[0]) return false;
                const file = value[0];
                const allowedFiles = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
                return allowedFiles.includes(file.type)
            })
            .test("fileSize", "File size must be less than 1MB.", (value) => {
                if (!value || !value[0]) return false;
                const file = value[0];
                const maxSize = 1 * 1024 * 1024;
                return (file.size <= maxSize);
            }),

        age: yup.number()
            .typeError("Age is required")
            .min(18, "Age must be greater than or equal 18")
            .max(50, "Age must be less than or equal 50"),
        password: yup.string().required("Password is required"),

        joiningDate: yup.string().required("Joining Date is required"),
        email: yup.string()
            .required("Email name is required")
            .matches(/^[A-Z0-9._ %+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                "Enter a valid email address"),
        country: yup.string().required("Country is required"),
        city: yup
            .array()
            .typeError("City is required")
            .min(2, "Please select minimum two cities"),
        hobbies: yup
            .array()
            .typeError("Hobbies selection is required")
            .min(2, "Please select minimum two hobbies"),
    })
    const { formState: { errors }, reset, register, handleSubmit } = useForm(
        {
            // disabled,
            // defaultValues: {
            //     firstname: "Testing",
            //     age: 33,
            //     password: "testing",
            //     joiningDate: "2025-07-29",
            //     email: "test@gmail.com",
            //     sex: "Female",
            //     hobbies: ["Drawing", "Dancing"],
            //     country: "India",
            //     city: ["Ahmedabad", "Delhi"]
            // }
            resolver: yupResolver(schema)
        }
    )
    const hadleOnSubmit = (data) => {
        setDisabled(true)
        setLoading(true)
        setTimeout(() => {
            //reset();
            refForm.current.reset();
            setDisabled(false)
            setLoading(false)
            console.log("done")
        }, 3000
        )

        console.log(JSON.stringify(data))
    }
    return (
        <div>

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/forms">
                    Forms
                </Breadcrumb.Item>
                <Breadcrumb.Item active>React Hook Form Yup</Breadcrumb.Item>
            </Breadcrumb>

            <Form onSubmit={handleSubmit(hadleOnSubmit)} ref={refForm} >

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" {...register("firstname")} />
                            <div className="text-danger">{errors?.firstname?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="resume">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control type="file"   {...register("resume")} />
                            <div className="text-danger">{errors?.resume?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="Sex">
                            <Form.Label>Sex</Form.Label>
                            <div>
                                {["Male", "Female", "Transgender"].map((sex, index) => {
                                    return (
                                        <Form.Check key={index} inline
                                            id={sex}
                                            label={sex}
                                            type='radio'
                                            value={sex}
                                            {...register("sex")}
                                        />
                                    )
                                })
                                }
                            </div>
                            <div className="text-danger">{errors?.sex?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col md={6}>

                        <Form.Group className="mb-3" controlId="hobbies">
                            <Form.Label>Hobbies</Form.Label>
                            <div>
                                {["Dancing", "Drawing", "Coding"].map((hobby, index) => {
                                    return (
                                        <Form.Check key={index} inline
                                            id={hobby}
                                            label={hobby}
                                            type='checkbox'
                                            value={hobby}
                                            {...register("hobbies")}
                                        />
                                    )
                                })
                                }
                            </div>
                            <div className="text-danger">{errors?.hobbies?.message}</div>
                        </Form.Group>

                    </Col>



                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" {...register("age")} />
                            <div className="text-danger">{errors?.age?.message}</div>
                        </Form.Group>

                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" {...register("password")} />
                            <div className="text-danger">{errors?.password?.message}</div>
                        </Form.Group>

                    </Col>

                    <Col md={6}>


                        <Form.Group className="mb-3" controlId="joiningDate">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type="date" {...register("joiningDate")} />
                            <div className="text-danger">{errors?.joiningDate?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col md={6}>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...register("email")} />
                            <div className="text-danger">{errors?.email?.message}</div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Select {...register("country")}>
                                <option value="">Select country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                            </Form.Select>
                            <div className="text-danger">{errors?.country?.message}</div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Select multiple {...register("city")}>
                                <option value="">Select cities</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Vadodara">Vadodara</option>
                            </Form.Select>
                            <div className="text-danger">{errors?.city?.message}</div>
                        </Form.Group>
                    </Col>
                </Row>







                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default RBReactHookFormYup
