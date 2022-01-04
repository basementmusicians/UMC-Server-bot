module.exports ={
name:"snake",
category: "minigame",
description: "Play Snake minigame.",
usage: "+snake", 
aliases:["snakes","minigamesnake"],
code:`$djsEval[(async () => {
const { Snake } = require('weky');
await Snake({
	message: message,
	embed: {
		title: 'Snake | Weky Development',
		description: 'GG, you scored **{{score}}** points!',
		color: '#5865F2',
        footer: '©️ Weky Development',
		timestamp: true
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel'
})
})()]`
}
