import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    shoe: "",

})

export default state;