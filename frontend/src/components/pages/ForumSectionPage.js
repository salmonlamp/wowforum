import React from 'react'
import Content from "../wrappers/Content/Content";
import Main from "../sections/Main/Main";
import Container from "../wrappers/Container/Container";
import ForumSubCategoryPostList from "../containers/Forum/ForumSubCategoryPostList/ForumSubCategoryPostList";
import ForumCategoryListMenu from "../containers/Forum/ForumCategoryListMenu/ForumCategoryListMenu";

const ForumSectionPage = props => {
    const sectionPk = props.match.params.pk


    return (
        <Main>
            <Container>
                <ForumCategoryListMenu sectionPK={sectionPk}/>
                <Content borderTopRadius={false}>
                    <ForumSubCategoryPostList/>
                </Content>
            </Container>
        </Main>
    )
}

export default ForumSectionPage