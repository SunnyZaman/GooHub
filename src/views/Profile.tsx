import React, { useState } from 'react';
import Loader from '../components/Loader';
function Profile() {
    const [isLoaded, setLoad] = useState(false);
    return (
        isLoaded ?
            (<div>
                <h1>Profile</h1>
            </div>) :
            <Loader />
    );
}

export default Profile;
