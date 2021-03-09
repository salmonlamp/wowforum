require('./ForumPostBody.scss')

import React, {useEffect} from 'react'
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'


const ForumPostBody = ({body}) => {

    const toggleAccordion = event => {
        event.target.parentElement.classList.toggle('open')
    }

    useEffect(() => {
        document.addEventListener('click', function (event) {
            if (!event.target.matches('.accordionHeader')) return
            toggleAccordion(event)
        }, false)
    }, [])

    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <div className={'postBody'} dangerouslySetInnerHTML={{__html: body}}/>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default ForumPostBody