'use strict';

let counterMouseOver = 0;
let counterMouseLeave = 0;

let count_mouseOver = () => counterMouseOver++;
let alertDisplay = () => counterMouseLeave++;
let display_mouseOver = () => alert('You put mose over ' + counterMouseOver + ' ' + counterMouseLeave);

