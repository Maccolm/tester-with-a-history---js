class Tester {
	constructor(questionsList) {
		this.questionsList = questionsList
		this.currentQuestion = null
		this.history = []
		this.counterCorrectAnswers = 0
	}
	getRandomQuestion() {
		const randomIndex = Math.floor(Math.random() * this.questionsList.length)
		const randomObj = this.questionsList[randomIndex]
		this.questionsList.splice(randomIndex, 1)
		return randomObj
	}
	getTableRow(dataArray, ellTag = 'td') {
		const tr = document.createElement('tr')
		for (const el of dataArray) {
			const td = document.createElement(ellTag)
			td.innerText = el
			tr.append(td)
		}
		return tr
	}

	render(containerId) {
		const testerContainer = document.createElement('div')
		this.counterCorrectAnswersForm = document.createElement('div')
		this.historyContainer = document.createElement('div')
		this.questionFormContainer = document.createElement('div')

		testerContainer.append(this.questionFormContainer)
		testerContainer.append(this.historyContainer)
		testerContainer.append(this.counterCorrectAnswersForm)
		const targetContainer = document.getElementById(containerId)
		targetContainer.append(testerContainer)
		this.next()
	}
	next() {
		this.currentQuestion = this.getRandomQuestion()
		this.questionFormContainer.innerHTML = ''
		this.questionFormContainer.append(this.renderQuestionForm())
		this.counterCorrectAnswersForm.innerHTML = ''
		this.counterCorrectAnswersForm.append('Correct answer: ', this.counterCorrectAnswers)

		this.historyContainer.innerHTML = ''
		this.historyContainer.append(this.renderTableForm())
	}
}
window.onload = function () {
	const t1 = new Tester(testSet)
	t1.render('container')
}
const testSet = [
	{
		question: 'What is the capital of France?',
		options: [
			{
				id: 1,
				text: 'Paris',
			},
			{
				id: 2,
				text: 'London',
			},
			{
				id: 3,
				text: 'Berlin',
			},
		],
		correctAnswerId: 1,
	},
	{
		question: 'What is the largest planet in the Solar System?',
		options: [
			{
				id: 1,
				text: 'Earth',
			},
			{
				id: 2,
				text: 'Mars',
			},
			{
				id: 3,
				text: 'Jupiter',
			},
		],
		correctAnswerId: 3,
	},
	{
		question: 'What animal is the symbol of the Olympic Games?',
		options: [
			{
				id: 1,
				text: 'Owl',
			},
			{
				id: 2,
				text: 'Bear',
			},
			{
				id: 3,
				text: 'Lion',
			},
		],
		correctAnswerId: 3,
	},
	{
		question: 'Which country is famous for its cheesy dish lasagna?',
		options: [
			{
				id: 1,
				text: 'Italy',
			},
			{
				id: 2,
				text: 'Spain',
			},
			{
				id: 3,
				text: 'Greece',
			},
		],
		correctAnswerId: 1,
	},
	{
		question: 'What number is considered lucky in many cultures?',
		options: [
			{
				id: 1,
				text: '13',
			},
			{
				id: 2,
				text: '7',
			},
			{
				id: 3,
				text: '3',
			},
		],
		correctAnswerId: 2,
	},
	{
		question: 'Which language is the most spoken in the world by number of native speakers?',
		options: [
			{
				id: 1,
				text: 'English',
			},
			{
				id: 2,
				text: 'Spanish',
			},
			{
				id: 3,
				text: 'Chinese',
			},
		],
		correctAnswerId: 3,
	},
	{
		question: 'Which river is the longest on Earth?',
		options: [
			{
				id: 1,
				text: 'Nile',
			},
			{
				id: 2,
				text: 'Amazon',
			},
			{
				id: 3,
				text: 'Mississippi',
			},
		],
		correctAnswerId: 1,
	},
	{
		question: 'Which mountain is considered the highest on Earth?',
		options: [
			{
				id: 1,
				text: 'Elbrus',
			},
			{
				id: 2,
				text: 'Alps',
			},
			{
				id: 3,
				text: 'Himalayas',
			},
		],
		correctAnswerId: 3,
	},
	{
		question: 'Which plant is the symbol of Ireland?',
		options: [
			{
				id: 1,
				text: 'Truffle',
			},
			{
				id: 2,
				text: 'Red rose',
			},
			{
				id: 3,
				text: 'Shamrock',
			},
		],
		correctAnswerId: 2,
	},
]