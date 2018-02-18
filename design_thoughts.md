
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

## Specific component descriptions

* The overarching **container**
  * Calls `adduser`, `rooms`, `disconnect`
  * Renders a `chatroom` component for each result of the `rooms` query
  * Also renders `privateroom` component
  * Listens for `roomlist` event

* The **chatroom** component, which forms the left side list of active rooms
  * Calls `joinroom`, `partroom`, `settopic`
  * Listens for `updatechat`, `updateusers`, `updatetopic` and `servermessage`
  * Renders `userlist`, `message` components

* The **privateroom** component, which holds a one-to-one chat
  * Renders `message` components
  * Listens for `recv_privatemsg`

* The **message** component
  * Rendered by the `chatroom`, with props that describe the sender and message text

* A **userlist** component, displayed in each chatroom
  * Calls the `roomusers` event
  * Renders a series of `user` components

* A **user** component that describes each current user
  * Calls `op`, `deop`, `ban`, `unban`, `kick`
  * Listens for `updateusers` to reflect changes to the user state

* A **messagebar** component
  * Contains the text input form for a new message
  * Calls `sendmsg`, `privatemsg`










