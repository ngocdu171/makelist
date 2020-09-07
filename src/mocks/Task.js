// import { v4 as uuidv4} from 'uuid';
const { v4: uuidv4} = require('uuid');

let items = [
    {
        id: uuidv4(),
        name: "Abc",
        level: 0 // Small
    },
    {
        id: uuidv4(),
        name: "Def",
        level: 1 // Medium
    },
    {
        id: uuidv4(),
        name: "Ghj",
        level: 2 // High
    },
    {
        id: uuidv4(),
        name: "Ghj",
        level: 2 // High
    }
]
export default items;