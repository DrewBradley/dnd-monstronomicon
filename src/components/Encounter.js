import React from 'react'

const Encounter = () => {
    return (
        <div>Encounter</div>
    )
}

export default Encounter

// on a Monster's page, click a button
// send that Monster's index and name to the store
// so that we can create the buttons for each monster
// into an array called encounter
// or maybe into an object? because there can be more than one of the same monster in an encounter
// when Encounter renders, draw all the buttons for the monsters in that array
// yes it should be an array, that's how we're rendering the home page
// then it's just like the home page - individual API call for each button click
// on the Encounter page, need to have a "remove from array" button
// that takes that monster out of the array in the store