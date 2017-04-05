install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

start-even:
		npm run babel-node -- src/bin/brain-even.js

start-calc:
		npm run babel-node -- src/bin/brain-calc.js

test-puzzle:
		npm run babel-node -- src/puzzle.js

publish:
	npm publish

lint:
	npm run eslint src
