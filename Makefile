install:
	npm install

start:
	npm run babel-node -- src/bin/games.js

start-even:
		npm run babel-node -- src/bin/even.js

start-calc:
		npm run babel-node -- src/bin/calc.js

start-gcd:
		npm run babel-node -- src/bin/gcd.js

start-balance:
		npm run babel-node -- src/bin/balance.js

start-progression:
		npm run babel-node -- src/bin/progression.js

start-prime:
		npm run babel-node -- src/bin/prime.js

publish:
	npm publish

lint:
	npm run eslint src
