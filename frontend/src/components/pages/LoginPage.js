import React from 'react'
import Content from "../wrappers/Content/Content"
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import LoginForm from "../forms/LoginForm"

const LoginPage = () => {
    return (
        <Main>
            <Container>
                <Content>
                    <LoginForm/>
                </Content>
            </Container>
        </Main>
    )
}

export default LoginPage