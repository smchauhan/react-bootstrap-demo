import { values } from 'lodash'
import React, { useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const RBReactHookForm = () => {
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const refForm = useRef()
    const { formState: { errors }, reset, register, handleSubmit } = useForm(
        {
            disabled,
            defaultValues: {
                firstname: "Testing",
                age: 33,
                password: "testing",
                joiningDate: "2025-07-29",
                email: "test@gmail.com",
                sex: "Female",
                hobbies: ["Drawing", "Dancing"],
                country: "India",
                city: ["Ahmedabad", "Delhi"]
            }
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


            <Form onSubmit={handleSubmit(hadleOnSubmit)} ref={refForm} >

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="resume">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control type="file"
                                {...register("resume", {
                                    required: "Resume is required.",
                                    validate: {
                                        acceptedFormats: (value) => {
                                            if (!value || value.length === 0) return true; // Skip validation if no file is selected
                                            const file = value[0]; // Assuming single file upload
                                            const acceptedFormatList = [
                                                "image/jpeg", "image/png", "image/gif"
                                                //"application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                            ];
                                            // return (acceptedFormatList.includes(file.type) || "Only PDF or word document are allowed.");
                                            return (acceptedFormatList.includes(file.type) || "Only JPG, PNG or GIF files are allowed.");
                                        },
                                        fileSizeValidation: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const maxSize = 1 * 1024 * 1024; // 5MB in bytes
                                            return (file.size <= maxSize || "File size must be less than 1MB.");
                                        }
                                    }
                                })}
                            />

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
                                            {...register("sex",
                                                {
                                                    required: "Please select gender/sex",
                                                }
                                            )}
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
                                            {...register("hobbies",
                                                {
                                                    required: "Please select at leaset one hobby",
                                                    validate: (value) => {
                                                        // if (value.length < 2) {
                                                        //     return "Please select minimum two hobbies"
                                                        // } else {
                                                        //     return true;
                                                        // }
                                                        return !(value.length < 2) || "Please select minimum two hobbies";
                                                    }
                                                }
                                            )}
                                        />
                                    )
                                })
                                }
                            </div>
                            <div className="text-danger">{errors?.hobbies?.message}</div>
                        </Form.Group>

                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" {...register("firstname",
                                { required: "The Firstname is required.", }
                            )} />
                            {/* <div className="text-danger">{errors && errors.firstname && errors.firstname.message}</div> */}
                            <div className="text-danger">{errors?.firstname?.message}</div>
                        </Form.Group>

                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" {...register("age",
                                {
                                    required: "The Age is required.",
                                    min: { value: 18, message: "Age must be greater than or equal 18" },
                                    max: { value: 50, message: "Age must be less than or equal 50" }
                                }
                            )} />
                            <div className="text-danger">{errors?.age?.message}</div>
                        </Form.Group>

                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" {...register("password",
                                {
                                    required: "Password is required.",
                                    minLength: { value: 4, message: "Password must more than 4 characters long" },
                                    maxLength: { value: 10, message: "Password can be up to 10 charactes long" },
                                    validate: (value) => {
                                        if (value.includes(" "))
                                            return "Password cannot contain spaces";
                                        else
                                            return true;
                                        //  return (!value.includes(" ") || "Password cannot contain spaces")
                                    }
                                }
                            )} />
                            <div className="text-danger">{errors?.password?.message}</div>
                        </Form.Group>

                    </Col>

                    <Col md={6}>


                        <Form.Group className="mb-3" controlId="joiningDate">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type="date" {...register("joiningDate",
                                {
                                    required: "Joining Date is required.",
                                    validate: (value) => {
                                        const today = new Date()
                                        const selectedDate = new Date(value)
                                        return today > selectedDate || "Joining date must be less than today's date"
                                    }
                                }
                            )} />
                            <div className="text-danger">{errors?.joiningDate?.message}</div>
                        </Form.Group>
                    </Col>

                    <Col md={6}>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...register("email",
                                {
                                    required: "Email is required.",
                                    pattern: { value: /^[A-Z0-9._ %+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter valid email address" },
                                }
                            )} />
                            <div className="text-danger">{errors?.email?.message}</div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                                {...register("country", { required: "Country is required." })}
                            >
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
                            <Form.Select multiple
                                {...register("city", {
                                    required: "City is required.",
                                    validate: (value) => {
                                        return value.length >= 2 || "Please select minimum two cities"
                                    }
                                })}
                            >
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

export default RBReactHookForm
