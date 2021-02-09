import React from 'react'
import Content from "../wrappers/Content/Content"
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import SignUpForm from "../forms/SignUpForm"

const SignUpPage = () => {
    return (
        <Main>
            <Container>
                <Content>
                    <SignUpForm/>
                </Content>
            </Container>
        </Main>
    )
}

export default SignUpPage