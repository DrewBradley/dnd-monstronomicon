import Display from '../components/Display'
import { FETCH_MONSTERS, FETCH_ONE_MONSTER, FILL_CR_LIST } from './types'

export const getMonsters = () => dispatch =>{
  fetch('https://www.dnd5eapi.co/api/monsters')
    .then(response => response.json())
    .then(monsters => dispatch({
      type: FETCH_MONSTERS,
      payload: monsters
    }))
    .catch(error => console.log(error))
}

export const getOneMonster = (url) => dispatch => {
  fetch(`https://www.dnd5eapi.co${url}`)
      .then(response => response.json())
      .then(monster => dispatch({
        type: FETCH_ONE_MONSTER,
        payload: monster
    }))
  .catch(error => console.log(error))
}

export const populateCRList = (CRList) => dispatch => {
  return dispatch({
    type: FILL_CR_LIST,
    payload: CRList
  })
}

// export const getMonstersByCR = (url) => dispatch => {
//   fetch(`https://www.dnd5eapi.co${url}`)
//       .then(response => response.json())
//       .then(CRMonsters => dispatch({
//         type: FETCH_ONE_MONSTER,
//         payload: CRMonsters
//     }))
//     .catch(error => console.log(error))
// }