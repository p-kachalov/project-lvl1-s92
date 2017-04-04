#!/usr/bin/env node
import showGreeting from '..';
import playBrainEven from '../play-brain-even';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const username = showGreeting();
const attemptsCount = 3;
playBrainEven(username, attemptsCount);
