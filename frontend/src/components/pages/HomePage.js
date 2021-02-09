import React from 'react'
import Content from "../wrappers/Content/Content";
import Main from "../sections/Main/Main";
import Container from "../wrappers/Container/Container";
import MemePopup from "../containers/Memes/MemePopup/MemePopup";
import MemeList from "../containers/Memes/MemeList/MemeList";

const HomePage = () => {
    return (
        <Main>
            <Container>
                <Content>
                    <MemeList/>
                    <MemePopup/>
                </Content>
            </Container>
        </Main>
    )
}

export default HomePage