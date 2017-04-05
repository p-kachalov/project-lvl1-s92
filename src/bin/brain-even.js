#!/usr/bin/env node
import { showGreeting, getUsername, playGame } from '..';

const gameConditions = 'Answer "yes" if number even otherwise answer "no".';
showGreeting(gameConditions);
const username = getUsername();
const gameType = 'even';
const attemptsCount = 3;
playGame(username, gameType, attemptsCount);
