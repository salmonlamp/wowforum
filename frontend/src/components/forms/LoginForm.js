import React from 'react'
import Form from "../ui/Form/Form"
import Input from "../ui/Input/Input"
import Button from "../ui/Button/Button"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import {useDispatch} from "react-redux"
import {userLoginAction} from "../../redux/user/userActions"

const schema = yup.object().shape({
    username: yup
        .string()
        .required(),
    password: yup
        .string()
        .min(8)
        .required()
})

const LoginForm = () => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })

    const dispatch = useDispatch()

    function onSubmit({username, password}) {
        dispatch(userLoginAction(username, password))
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{marginBottom: 30}}>Login</h1>
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
            >
                Login!
            </Button>
        </Form>
    )
}

export default LoginForm