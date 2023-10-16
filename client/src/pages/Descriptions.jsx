import { useSnapshot } from 'valtio'
import { shoeDescriptions } from '../config/constants';
import CustomButton from '../components/CustomButton';

import state from '../store'


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
                <CustomButton/>
            </div>}
        </>
    )
}

export default Descriptions