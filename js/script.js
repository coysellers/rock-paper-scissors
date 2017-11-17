(function(doc) {
	const select = (el) => doc.querySelector(el),
		selectAll = (el) => doc.querySelectorAll(el),
		createEl = (el) => doc.createElement(el),
		buttons = [].slice.call(selectAll('.js-button')),
		playerContainer = select('.js-player'),
		oppContainer = select('.js-opponent'),
		playerHeader = createEl('h2'),
		oppHeader = createEl('h2');

	function capFirst(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	function pickOption(option) {
		const container = playerContainer.appendChild(playerHeader);
		
    	playerHeader.innerText = capFirst(option);
		container.setAttribute('data-id', option);
		container.setAttribute('class', 'result');
	}

	function opponent() {
		const results = ['rock', 'paper', 'scissors'],
			random = results[Math.floor(Math.random() * results.length)],
			container = oppContainer.appendChild(oppHeader);

		oppHeader.innerText = capFirst(random);
		container.setAttribute('data-id', random);
		container.setAttribute('class', 'result');
	}

	function addPoint() {
		const oppScore = select('.js-opp-score'),
			playerScore = select('.js-player-score'),
			oppData = oppContainer.appendChild(oppHeader),
			playerData = playerContainer.appendChild(playerHeader),
			oppId = oppData.dataset.id,
			playerId = playerData.dataset.id;
		
		let oppNumber = oppScore.innerHTML,
			playerNumber = playerScore.innerHTML;

		if (playerId == oppId) {
			return
		} else if (playerId == 'paper' && oppId == 'rock') {
			playerNumber++;
			playerScore.innerHTML = playerNumber;
		} else if (playerId == 'scissors' && oppId == 'rock') {
			oppNumber++;
			oppScore.innerHTML = oppNumber;
		} else if (playerId == 'rock' && oppId == 'paper') {
			oppNumber++;
			oppScore.innerHTML = oppNumber;
		} else if (playerId == 'scissors' && oppId == 'paper') {
			playerNumber++;
			playerScore.innerHTML = playerNumber;
		} else if (playerId == 'paper' && oppId == 'scissors') {
			oppNumber++;
			oppScore.innerHTML = oppNumber;
		} else if (playerId == 'rock' && oppId == 'scissors') {
			playerNumber++;
			playerScore.innerHTML = playerNumber;
		}
	}

	buttons.forEach(button => {
		button.addEventListener('click', function(e) {
			pickOption(e.target.dataset.type);
			opponent();
			addPoint();
		});
	});
})(document);