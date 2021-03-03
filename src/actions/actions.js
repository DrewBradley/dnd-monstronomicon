/* eslint-disable array-callback-return */
import { FETCH_MONSTERS, FETCH_ONE_MONSTER, SEARCH_MONSTER_NAME, GET_MONSTERS_BY_CR, ADD_TO_ENCOUNTER, REMOVE_FROM_ENCOUNTER } from './types'


export const getMonsters = () => dispatch =>{
  fetch('https://www.dnd5eapi.co/api/monsters')
    .then(response => response.json())
    .then(monsters => dispatch({
      type: FETCH_MONSTERS,
      payload: monsters.results
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

export const getMonstersByCR = (CR) => dispatch => {
  fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${CR}`)
  .then(response => response.json())
  .then(CRMonsters => dispatch({
    type: GET_MONSTERS_BY_CR,
    payload: CRMonsters.results
  }))
  .catch(error => console.log(error))
}

export const searchMonster = (monsterList, monsterName) => dispatch => {
  if(!monsterName) {
      dispatch({
        type: SEARCH_MONSTER_NAME,
        payload: monsterList
    })
  } else {
  let foundMonster = monsterList.filter(monster => {
    if (monster.name.toLowerCase().includes(monsterName)){
      return monster.name
    }
  })
  if (!foundMonster.length) {
    foundMonster = ['not found']
  }
  console.log(foundMonster)
  dispatch({
        type: SEARCH_MONSTER_NAME,
        payload: foundMonster
    })
}}

export const addToEncounter = (monsterName, monsterIndex, monsterUrl, encounter) => dispatch => {
  encounter = [...encounter, {monsterName, monsterIndex, monsterUrl}]
  dispatch({
    type: ADD_TO_ENCOUNTER,
    payload: encounter
  })
}

export const removeFromEncounter = (index, list) => dispatch => {
  const encounter = list.filter(monster => {
    return list.indexOf(monster) !== index
  })
  dispatch({
    type: REMOVE_FROM_ENCOUNTER,
    payload: encounter
  })
}