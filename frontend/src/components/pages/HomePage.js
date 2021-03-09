import React from 'react'
import Content from "../wrappers/Content/Content"
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import ForumHomeFeed from "../containers/Forum/ForumHomeFeed/ForumHomeFeed"

const HomePage = () => {
    return (
        <Main>
            <Container>
                <Content breadcrumbs={false}>
                    <ForumHomeFeed/>
                </Content>
            </Container>
        </Main>
    )
}

export default HomePage