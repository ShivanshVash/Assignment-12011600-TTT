# Assignment-12011600-TTT 
- by Shivansh Vashishtha
In App.js file plugins and components used:
Plugins:
1.React (import React from 'react'):
React is a JavaScript library for building user interfaces.

2.React Hooks (import { useState, useRef } from 'react'):
useState is a React hook that allows functional components to manage state.
useRef is a React hook that provides a mutable reference object, which can be used to hold a reference to a DOM element or any other value.

3.SubmitButton (import SubmitButton from './SubmitButton'):
It is a custom component imported from a local file.
The code snippet doesn't provide the implementation of this component, but it is assumed to be a React component rendering a button.

4.react-chartjs-2 (import { Bar } from 'react-chartjs-2'):
It is a React wrapper for Chart.js, a popular charting library.
The Bar component from react-chartjs-2 is used to render the bar chart in the application.

5.file-saver (import { saveAs } from 'file-saver'):
It is a library that provides a convenient way to save files on the client-side.
The saveAs function is used to save the word frequency data as a CSV file.

6.lodash (import _ from 'lodash'):
It is a JavaScript utility library that provides a wide range of functions to facilitate common programming tasks.
In this code, the _ object from lodash is used to access the countBy function, which is used to count the occurrence of each word.

7. chart.js/auto (import Chart from 'chart.js/auto'):
It is a charting library that provides various types of charts.
The Chart class from chart.js/auto is used to create a new instance of the chart and render it in the chart container.


Components: App.js
1.The main functional component of the React application.
2.It manages the state of content, wordFrequency, and histogramData.
3.It contains the handleClick function for fetching content, performing word frequency analysis, and generating the histogram.
4.It also includes the handleExport function for exporting the word frequency data as a CSV file.

In SubmitButton.js file
plugins:
1.React (import React from 'react'):
React is a JavaScript library for building user interfaces

Components:
SubmitButton.js:
It is a functional component that represents a submit button.
The component takes a prop named onClick, which is a function to be executed when the button is clicked.
It returns a <button> element with the label "Submit" and assigns the onClick prop to the onClick event handler of the button.
