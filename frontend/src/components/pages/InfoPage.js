import React from 'react'
import Main from "../sections/Main/Main";
import Container from "../wrappers/Container/Container";
import Content from "../wrappers/Content/Content";
import Page from "../containers/Pages/Page/Page";

const InfoPage = props => {
    const pageSlug = props.match.params.slug

    return (
        <Main>
            <Container>
                <Content>
                    <Page slug={pageSlug}/>
                </Content>
            </Container>
        </Main>
    )
}

export default InfoPage