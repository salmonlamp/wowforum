import React from 'react'
import Content from "../wrappers/Content/Content"
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import ProfileSettings from "../containers/ProfileSettings/ProfileSettings"

const HomePage = () => {
    return (
        <Main>
            <Container>
                <Content>
                    <ProfileSettings/>
                </Content>
            </Container>
        </Main>
    )
}

export default HomePage