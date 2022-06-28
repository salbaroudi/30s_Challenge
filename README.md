
## Introduciton:

This is my first React project. A [basic react template project](https://github.com/15Dkatz/react-bootcamp/tree/master/react-app-template) is modified to implement this project

It generates puzzles that are inspired by the Daily Mail's [30 Seccond Challenge](https://www.dailymail.co.uk/news/article-499509/Day-Two-brilliant-new-brain-trainer-30-Second-Challenge.html).


## Usage:

Users select a *difficulty level* to begin the game.

The user must mentally perform a series of calculations, and arrive at the correct final answer.

Once done, the user types in the answer and the app verifies it (Success / Fail).

## Design and Structure:

- Usage of React Components, Redux Global Store - with unidirectional dataflow (Actions and Reducers).

- Puzzle Generator connected to front end via ./action/puzzle.js. This outputs a state object that is emitted,
and handled by our puzzle Reducer. When React re-renders() the frame, we read the generated puzzle information
from our Redux global store, and load the puzzle into the front end.

- Three main sub-components, as follows:

```
render() {
  return (
  <div>
    <h1> 30 Second Challenge </h1>
    <br />
    <Difficulty />
    <br />
    <br />
    <Puzzle />
    <br />
    <br />
    <Instructions />
  </div>
```

## Demonstration:

This application is hosted on a Heroku server, at the following link: [
https://git.heroku.com/thirty-second-challenge.git](
https://git.heroku.com/thirty-second-challenge.git).

Give it a try!
