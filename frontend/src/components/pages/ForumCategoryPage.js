import React from 'react'
import Content from "../wrappers/Content/Content";
import Main from "../sections/Main/Main";
import Container from "../wrappers/Container/Container";
import ForumPostList from "../containers/Forum/ForumPostList/ForumPostList";

const ForumCategoryPage = props => {
    const categoryPk = props.match.params.pk

    return (
        <Main>
            <Container>
                <Content>
                    <ForumPostList
                        categoryPk={categoryPk}
                    />
                </Content>
            </Container>
        </Main>
    )
}

export default ForumCategoryPage