import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    shoe: null,

})

export default state;