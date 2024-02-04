'use strict';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const loadContent = function () {
	fetch('https://api.quotable.io/random')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			quote.innerHTML = data.content;
			author.innerHTML = data.author;
		});
};
window.addEventListener('DOMContentLoaded', loadContent);
