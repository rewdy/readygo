# ReadyGo Overview

## Table of Contents
1. What's included
2. How it's built
3. Variables
4. Layout
5. CSS and type
6. Forms
7. Mixins

## 1. What's included
ReadyGo has:

### Core styles

* Basic reset/setup - This is very minimal and just resets margins and paddings to 0 and makes sure html5 block elements are displayed as such.
* Link styles
* Box sizing set to border-box for all elements using [Paul Irish's method](https://www.paulirish.com/2012/box-sizing-border-box-ftw/).
* Make all images responsive by default


### Layout

* ReadyGo includes a responsive, nestable grid layout system with extra options for:
  * A `display:table` based system as well
  * Ability to center any grid column for single column layouts.
  * Classes for column rules (line between columns)
  * Classes to manipulate padding for scenerios when you want the padding on the column and not.
* `listed` class for using on blocks in a list
* Clearfix class

### CSS and Type

Sensible and simple styling for all standard HTML elements plus additional classes for some common use cases.

Additional styles are available for:

* Inline lists
* Lined lists - Lists where there is a line between each item
* "Blocked" lists - `display:block` links in a list
* Button lists - A list where each item is a single button (see form styles)
* Inline tables - Non-full-width tables
* Highlight tables - Table where the row hovered over is highlighted
* Centered tables - Tables where all content is centered in its cell
* Striped tables - Table where rows alternate background colors
* Small and large classes for base text size
* Image alignment classes (responsive-aware)
* Intro paragraph and "attention" paragraph styles
* More information link styles
* Text alignment classes (with responsive options)
* Align left and align right styles for block elements.
* Margin tweaking classes
* Hide classes (accessible and completely hidden)

### Forms

Styles for all common form elements and buttons (both form buttons and button-looking links).

### Animations

Built-in styles for simple animations on page load (requires the `js.animations.js` file to be included).

## 2. How it's built

The setup is built on npm with grunt as the task runner. For CSS it uses SASS with autoprefixer to help with browser compatibility. See the readme to get up and running.

## 3. Variables


## 4. Layout
