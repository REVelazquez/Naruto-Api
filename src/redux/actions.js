import { GET_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from 'axios'
// export const getCharacters = ()=>{
//     return function (dispatch){
//         fetch('https://api.narutodb.xyz/character')
//         .then(response=>response.json())
//         .then(data=>dispatch({type: GET_CHARACTERS, payload:data.characters}));
//     }
// }

// forma 1 con axios
// export const getCharacters =()=>{
//     return function(dispatch){
//         axios('https://api.narutodb.xyz/character')
//         .then(response => response.data)
//         .then(data=>dispatch({type: GET_CHARACTERS, payload: data.characters}))//el .then son promesas
//     }
// }

//forma 2 con axios
export const getCharacters =()=>{
    return async function(dispatch){
    const response= await axios('https://api.narutodb.xyz/character')
    return dispatch({type: GET_CHARACTERS, payload: response.data.characters })
    }
}


export const getCharacterDetail = (id)=>{
    return function (dispatch){
        axios(`https://api.narutodb.xyz/character/${id}`)
        .then(response=> response.data)
        .then(data =>dispatch({
            type:GET_CHARACTER_DETAIL,
            payload: data
        }))
    }
}

export const cleanDetail = ()=>{
    return{
        type:CLEAN_DETAIL
    }
}