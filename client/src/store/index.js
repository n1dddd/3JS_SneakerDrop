import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    shoes: [], //clicking a show will set in on the stage, and present it. Intro is false so then go to shoe selected
})

export default state;