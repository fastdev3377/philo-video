# hello, philo

We recognize that doing a coding exercise at a whiteboard during an interview is
stressful and likely doesn't represent how you would do if you were to work on a
problem in your own time, in a comfortable environment.

Instead, we're asking you to implement a few features on this video player app.
Out of respect for your time, we suggest time boxing yourself to about 3 hours
or so, but that's not a hard deadline. If you would like to spend more
time getting familiar with the frameworks/libraries or polishing your code, feel
free.
We're really just hoping to learn how you think, and how you find your way
around a new and possibly confusing codebase.

If you have questions or get stuck during the exercise, please reach out to your
interviewer on the private Slack channel that you received by email.

## The App

This is a TV Guide and Live Video app built on [react](http://reactjs.org),
[redux](https://redux.js.org/),
and [react-router](https://github.com/ReactTraining/react-router),
bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

## TODO

### Render A Guide View:

- Think of this page as a TV Guide. Populate the guide with the video data from the schedule next to the time they should air at.
- Provide a way to “save” or “favorite” a presentation, display this status somewhere on the guide.

### Play "Live" Video:

- The live screen should automatically play the video that is scheduled for the current time. The video should start from its live position.
- Once the video ends, the next video in the schedule should play.
- During the last 15 seconds of a presentation, display what the next video will be somewhere on the player.

Please explain in the `NOTES.md` the approaches to your solutions, as well as what else you would implement if you had more time.

Feel free to implement additional features if you like. This is your chance to shine, show us what you think is a good representation of your skills and interests.

## Getting Started

Node 16+ is the only prerequisite. Consider using [nvm](http://nvm.sh/) for
installation.

If using [yarn](https://yarnpkg.com/lang/en/docs/install/)

- Fetch dependencies with `yarn install`.
- Start the dev server with `yarn start`.
- Lint with `yarn lint`.

Otherwise

- Fetch dependencies with `npm install`.
- Start the dev server with `npm run start`.
- Lint with `npm run lint`.

## Structure

Currently a static list of schedule data is formatted, fed into the store as initial state, and should drive the app. Each schedule item is formatted as follows:

```
{
  "startTime": timestamp, // Represents local timestamp the video should play at
  "endTime": timestamp, // Represents local timestamp the video should end at
  "video": {
    "id": string, // ID of the video
    "description": string, // Description of the video
    "source": string, // The URL of the video to play
    "subtitle": string, // Subtitle of the video
    "duration": number, // Represents the duration of the video in seconds
    "thumb": string, // The URL of the still image of the video
    "title": string, // The title of the video
  }
}
```

Actions send information from this list of presentations to the
store, where it is trickled down to a simple video player component in order to play the video
and display metadata. Currently you can only Play and Pause the video.

There is a clock displayed in the navbar with the current time.

Currently there is an empty Guide on the homepage (`'/'`) and a video player on the Live page (`/live`).

- There is a single state object for the application.
- State should only be updated in store reducers.
- Actions should trigger state change.
- Store reducers are pure functions: state is passed in, and a new state object
  is returned. State should never be mutated.
- Side effects should occur via
  [action creators](http://redux.js.org/glossary#action-creator) or
  [middleware](http://redux.js.org/advanced/middleware).
- Sass is written inside the `:local` scope, and imported to the relevant components
  as an object. Webpack makes sure that the class we define has a unique name,
  such that it does not interfere with the styles of other components.
- This project is setup to support TypeScript. While we would prefer you use TypeScript, it is not a requirement. There are a few `.ts`/`.tsx` files for examples.

## What We're Looking For

Our goal is for you to be able to complete this exercise in 3-4 hours of focused work, but feel free to take more time if you need it, or spread the work out. We generally ask that candidates aim to get the results back to us within a week of starting. We encourage you to focus on tasks and implementation details that
highlight your skill set and interests; fewer tasks done well is better than more
tasks done at a lower degree of fidelity.

In addition to functionality, we also look at architecture, organization,
linting and style, user experience, and overall polish. We're looking for idiomatic modern
JavaScript that matches the established style of the existing codebase. We value
code that is easy to follow and understand, without stale or commented-out
sections. __Aim for code that you would be proud to deploy.__

Lastly, this exercise does not have to be done in isolation. We encourage you to
ask questions as you familiarize yourself with the codebase, architecture, and
application. You should have received an email invite to a private Slack channel
where you can discuss questions with your interviewer. Feel free to reach out or
work alone, whichever suits you.

And remember, the purpose of this exercise is to help you demonstrate your
abilities in your own time in a low-pressure environment. Have fun with it!

## Saving and Submitting

- Work directly on `main`
- Commit your work to that branch (make sure not to leave uncommitted work!)
- Please do NOT delete your `.git` directory.
- Please do NOT post your solution on Github or any other public-facing site.
- Please do NOT include your name or other identifying information in your
  commit messages or code, as we review submissions anonymously to reduce bias.
- Remove `node_modules` from the project, create a zip, and send it back to us via email or your private Slack channel.
- Please ensure that you have zipped up the entire project folder, including any hidden "dotfiles" like `.babelrc`, for example.
- Feel free to use `NOTES.md` to include any additional thoughts or comments on
  the app, your implementation, or what you would do if given more time.
