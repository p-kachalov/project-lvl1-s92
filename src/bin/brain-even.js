#!/usr/bin/env node
import { showGreeting, playGame } from '..';

const gameConditions = 'Answer "yes" if number even otherwise answer "no".';
const username = showGreeting(gameConditions);
const gameType = 'even';
const attemptsCount = 3;
playGame(username, gameType, attemptsCount);
