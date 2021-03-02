# MONSTRONOMICON
---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Authors](#Authors)
---
## Introduction

You're a Dungeon Master running a game in 5e and you're planning an encounter. How do you keep track of all the monsters you're throwing at your players? The _Monstronomicon_ is here to solve this one specific problem.

In the _Monstronomicon_ you can search for your favorite monsters by name, or you can filter all 332 SRD monsters by challenge rating. Choose a monster and read its stats - if you like what you see, add that monster to your ongoing Encounter. When you're done adding monsters to your Encounter, view the list of everything you've added. Take a screenshot and send it to your players to make them sweat. Then remove a few of the monsters; you're not evil.

This app was built in one week during mod3 at Turing to [this spec](https://frontend.turing.io/projects/module-3/stretch.html). We chose to learn Redux and continue building on our knowledge of [React](https://reactjs.org/), [Cypress](https://www.cypress.io/), and [React Router](https://reactrouter.com/). We chose the [dnd5e API](http://www.dnd5eapi.co/docs/#base) and focused on [the monsters endpoint](https://www.dnd5eapi.co/api/monsters). 

## Features

To view please:
- please visit [here](https://monstronomicon.herokuapp.com/home) to interact and view
- Note: This is hosted on the free version of Heroku so if you get a blank screen please wait 69 seconds and do a hard refresh on the page.
- PWA: If you'd like to use _Monstronomicon_ outside of the browser, you can also download it as a progressive web app.

### Categories:
- [Home Page](#Home-Page)

- [Searching for a Monster](#Searching-for-a-Monster)

- [Filtering by Challenge Rating](#Filtering-by-Challenge-Rating)

- [Adding to your Encounter](#Adding-to-your-Encounter)

- [View and Delete from your Encounter](#View-and-Delete-from-your-Encounter)

#### Home Page
When you visit the home page, all monsters are listed alphabetically. Scroll through to find the one you want.

<details>
<summary>Home page example</summary>
<br>
 <img width="450" alt="all movies" src="https://media.giphy.com/media/TfSKZgLfGwFykELk6d/giphy.gif">
</details>

#### Searching for a Monster
If you know part or all of a monster's name, enter it into the search field and click the d20 to search. Only monsters with your search term in their name will show. Click Show All Monsters to go back to the full list.

<details>
<summary>Example of Searching for a Monster</summary>
<br>
<img width="450" alt="searching Mulan and viewing details" src="https://media.giphy.com/media/gbP8fBcCN3jhy9mMyr/giphy.gif">
</details>

#### Filtering by Challenge Rating
If you know the challenge rating of the monster you'd like to view, select that number from the Challenge Rating list and click on the d20 to filter the monsters. Only monsters with that challenge rating will show. Click Show All Monsters to go back to the full list.

<details>
<summary>Example of Filtering by Challenge Rating</summary>
<br>
<img width="450" alt="navigating on mobile" src="https://media.giphy.com/media/7wdcYhnLkrbD0azKuT/giphy.gif">
</details>

#### Adding to your Encounter
When you have found the monster you'd like to add to your encounter, click the Add to Encounter button at the top of the monster's stats. The counter on the Encounter button will show that you have added the monster. Add more than one of the same monster!

<details>
<summary>Example of Adding to your Encounter</summary>
<br>
<img width="450" alt="navigating on mobile" src="https://media.giphy.com/media/je07mpnWe8hNOk3Glv/giphy.gif">
</details>

#### View and Delete from your Encounter
To see which monsters have been added to your encounter, click the Encounter button. The monsters will appear in the order you added them. You can also go directly to their stats pages from here. Your browser's forward and back buttons can help you navigate. If you'd like to delete a monster from your encounter, click the X button.

<details>
<summary>Example of View and Delete from your Encounter</summary>
<br>
<img width="450" alt="navigating on mobile" src="https://media.giphy.com/media/0xxmrHjZmE1aXOfApJ/giphy.gif">
</details>

## Technologies
- Redux
- PWA: Progressive Web App
- React
- Router
- Cypress
- CSS
- HTML
- Lighthouse for accessibility auditing

## Future Iterations
Redux might seem overpowered for this project. We chose this API because it holds so much data and we have plans for extensions that would take advantage of Redux. See the [most current project board here](https://github.com/DrewBradley/dnd-monstronomicon/projects/1).

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:DrewBradley/dnd-monstronomicon.git`
- API documentation is [here](http://www.dnd5eapi.co/docs/#intro)
- Please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- cd into your local copy and run `npm install`
- Have Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and create a PR for review
Thank you.

## Authors
<table>
    <tr>
        <td> Elsa Fluss <a href="https://github.com/elsafluss">GH</td>
        <td> Drew Bradley <a href="https://github.com/drewbradley">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/13261139?s=460&u=f25038a8142aee42289ea23cee45c22fa97888ca&v=4" alt="Elsa Fluss"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/64617435?s=400&u=b01f8dbfd68b65ddd1d720d8525806f267a06426&v=4" alt="Drew Bradley"
 width="150" height="auto" /></td>
</table>

