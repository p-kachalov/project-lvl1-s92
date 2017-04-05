#!/usr/bin/env node
import { showGreeting, getUsername, playGame } from '..';

const gameConditions = 'Find the greatest common divisor of given numbers.';
showGreeting(gameConditions);
const username = getUsername();
const gameType = 'gcd';
const attemptsCount = 3;
playGame(username, gameType, attemptsCount);
