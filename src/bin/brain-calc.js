#!/usr/bin/env node
import { showGreeting, getUsername, playGame } from '..';

const gameConditions = 'What is the result of the expression?';
showGreeting(gameConditions);
const username = getUsername();
const gameType = 'calc';
const attemptsCount = 3;
playGame(username, gameType, attemptsCount);
