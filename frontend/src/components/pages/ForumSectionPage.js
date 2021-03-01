import React from 'react'
import Content from "../wrappers/Content/Content"
import Main from "../sections/Main/Main"
import Container from "../wrappers/Container/Container"
import ForumCategoryListMenu from "../containers/Forum/ForumCategoryListMenu/ForumCategoryListMenu"
import ForumSubCategoryList from "../containers/Forum/ForumSubCategoryList/ForumSubCategoryList";

const ForumSectionPage = props => {
    const sectionPk = props.match.params.pk

    return (
        <Main>
            <Container>
                <ForumCategoryListMenu sectionPK={sectionPk}/>
                <Content borderTopRadius={false}>
                    <ForumSubCategoryList/>
                </Content>
            </Container>
        </Main>
    )
}

export default ForumSectionPage