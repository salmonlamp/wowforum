import React from 'react'
import Form from "../ui/Form/Form"
import Button from "../ui/Button/Button"
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import {userSignUpAction} from "../../redux/user/userActions";
import Input from "../ui/Input/Input";

const schema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    username: yup
        .string()
        .required(),
    password: yup
        .string()
        .min(8)
        .required()
})

const SignUpForm = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })

    const dispatch = useDispatch()

    function onSubmit({email, username, password}) {
        dispatch(userSignUpAction(email, username, password))
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{marginBottom: 30}}>SingUp</h1>

            <Input
                labelText={'Email'}
                type={'email'}
                name={'email'}
                inputRef={register}
                error={errors.email}
                placeholder={'example@email.com'}
            />
            <Input
                labelText={'Username'}
                type={'text'}
                name={'username'}
                inputRef={register}
                error={errors.username}
            />
            <Input
                labelText={'Password'}
                type={'password'}
                name={'password'}
                inputRef={register}
                error={errors.password}
            />
            <Button
                decor={'primary'}
                type={'submit'}
                onClick={() => {
                }}
            >SingUp!</Button>
        </Form>
    )
}

export default SignUpForm