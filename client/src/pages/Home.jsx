import { useSnapshot } from 'valtio';

import state from '../store';


const Home = () => {
  const snap = useSnapshot(state);
  return (
    <>
      {snap.intro && (<div className="home-content">
        <h1 className="head-text">
          Just a Bunch of Jordans
        </h1>
        <h2 className="underhead-text">
          Spin a Shoe...Click a Shoe
        </h2>
      </div>
      )}
    </>
  )
}

export default Home