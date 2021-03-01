import React from 'react'
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import Content from "../wrappers/Content/Content"
import ForumPostList from "../containers/Forum/ForumPostList/ForumPostList"

const ForumSubCategoryPage = props => {
    const subCategoryPk = props.match.params.pk

    return (
        <Main>
            <Container>
                <Content>
                    <ForumPostList subCategoryPK={subCategoryPk}/>
                </Content>
            </Container>
        </Main>
    )
}

export default ForumSubCategoryPage