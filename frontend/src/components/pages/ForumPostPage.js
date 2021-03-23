import React from 'react'
import Content from "../wrappers/Content/Content"
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import ForumPostSingle from "../containers/Forum/ForumPostSingle/ForumPostSingle";

const ForumCategoryPage = props => {
    return (
        <Main>
            <Container>
                <Content sideBar={false}>
                    <ForumPostSingle postPk={props.match.params.pk}/>
                </Content>
            </Container>
        </Main>
    )
}

export default ForumCategoryPage