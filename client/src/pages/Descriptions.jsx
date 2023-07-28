import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'
import { shoeDescriptions } from '../config/constants';

function Descriptions() {

    const snap = useSnapshot(state);


    const shoeDescription = () => {
        if (shoeDescriptions[snap.shoe]) {
            return shoeDescriptions[snap.shoe].description;
        }
        else {
            return null;
        }
    }
    return (
        <>
            {!snap.intro && <div className="shoe-description-card">
                <p className="shoe-description-text ">
                    {shoeDescription()}
                </p>
            </div>}
        </>
    )
}

export default Descriptions