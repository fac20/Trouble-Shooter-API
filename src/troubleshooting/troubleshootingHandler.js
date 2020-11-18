const catArr = [
	"NPM isn't running",
	"I can't install my database",
	'Zoom is rubbish',
];

const npmObj = {
	"NPM isn't running": {
		//0 from prompts(id)
		prompt: 'Do you have a package.json', //string from prompts(prompt)
		yes: 'prompt2', // key from route 1 text, value from route 1 id
		no: 'prompt3', // key from route 2 text, value from route 2 id
	},
	prompt2: {
		prompt: 'Are you in the right dir..',
		yes: 'prompt4',
		no: 'prompt5',
	},
	prompt3: {
		prompt: 'run npm init',
	},
};

const helpfulArray = Object.entries(npmObj["NPM isn't running"]); // [["prompt","Do you have a pacakge.json"],["yes", "prompt13"],["no","prompt14"]]
// npmObj["NPM isn't running"]["yes"] ----> npmObj["prompt13"];
