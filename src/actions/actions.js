import { FETCH_MONSTERS, FETCH_ONE_MONSTER, SEARCH_MONSTER_NAME } from './types'

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

export const searchMonster = (monsterList, monsterName) => dispatch => {
  const foundMonster = monsterList.filter(monster => {
    return monster.name.includes(monsterName) ? monster : null
  })
  return dispatch({
        type: SEARCH_MONSTER_NAME,
        payload: foundMonster
    })
}