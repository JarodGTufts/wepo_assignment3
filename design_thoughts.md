
# Design

## UI

[Here's a link to what I think the UI could look like!](https://wireframe.cc/HqRmGz)

## Components

A hierarchy of components, which render each other

* The chat room selection boxes
  * On the left side, a list of rendered chat-room boxes
  * When clicked, these render a live display of the chat room to the right
    * This chat room display renders a list of the users on the far right side
    * Also, could render the message bar
    * This chat room display should render individual message components
* The private chat boxes
  * Separate from the chat rooms, because these are not actual rooms but instead one on one conversations rendered to look like chat rooms
  * Also renders message components
* Some kind of header or overarching container


So, breaking out all of that into an actual list of components, organized by scope:

* The overarching header/container
* A list of chat rooms, rendered by this document
* A chat room display component, which contains individual messages
* An individual message component, which is given a user and a message string
* The user list component, which is rendered by the chat room display

I think that's everything that the application needs to have - but, I think there is a lot of potential to make these sections even more modular, with more specialized components.