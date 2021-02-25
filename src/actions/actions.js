import { FETCH_MONSTERS, FETCH_ONE_MONSTER, SEARCH_MONSTER_NAME, GET_MONSTERS_BY_CR } from './types'

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
  fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating${CR}`)
      .then(response => response.json())
      .then(CRMonsters => dispatch({
        type: GET_MONSTERS_BY_CR,
        payload: CRMonsters
    }))
    .catch(error => console.log(error))
}

export const searchMonster = (monsterList, monsterName) => dispatch => {
  const foundMonster = monsterList.filter(monster => {
    if (monster.name.toLowerCase().includes(monsterName)){
      return monster.name
    }
  })
  dispatch({
        type: SEARCH_MONSTER_NAME,
        payload: foundMonster
    })
}
