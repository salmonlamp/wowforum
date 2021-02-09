import React from 'react'
import {useSelector} from "react-redux";
import ProfileForm from "../../forms/ProfileForm/ProfileForm";

const ProfileSettings = () => {
    const wasSave = useSelector(state => state.auth.profileWasSave)
    const profile = useSelector(state => state.auth.user)

    return (
        <>
            {
                wasSave
                    ? <h1>Profile saved!</h1>
                    : null
            }
            <ProfileForm
                username={profile.username}
                email={profile.email}
            />
        </>
    )
}

export default ProfileSettings