import React from 'react'
import Form from "../../ui/Form/Form"
import Input from "../../ui/Input/Input"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import Button from "../../ui/Button/Button"
import FileInput from "../../ui/FIleInput/FIleInput"

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]


const schema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    username: yup
        .string()
        .required(),
    avatar: yup
        .mixed()
        // .test('fileSize', "File is too large", value => value.size <= 2000000000)
        .test('fileType', "Only the following formats are accepted: .jpg, .jpeg, .png", value => SUPPORTED_FORMATS.includes(value[0].type))
        .required()
})

const ProfileForm = ({username, email}) => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: username,
            email: email,
        }
    })

    function onSubmit({email, username, password, avatar}) {
        console.log('SUBMIT')
        console.log(avatar)
    }

    const formFooter = <Button
        decor={'primary'}
        type={'submit'}
        onClick={() => {
        }}
    >Save</Button>

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            footer={formFooter}
        >
            <Input
                labelText={'Username'}
                type={'text'}
                name={'username'}
                inputRef={register}
                error={errors.username}
            />
            <Input
                labelText={'Email'}
                type={'email'}
                name={'email'}
                inputRef={register}
                error={errors.email}
            />
            <Input
                labelText={'Password'}
                type={'password'}
                name={'password'}
                inputRef={register}
                error={errors.password}
                placeholder={'**********'}
            />
            <FileInput
                labelText={'Avatar'}
                name={'avatar'}
                inputRef={register}
                error={errors.avatar}
            />
        </Form>
    )
}

export default ProfileForm