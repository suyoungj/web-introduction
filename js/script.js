const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const getUserName = () => $('#username').value;

const getMatchCount = () => [...$$('.checkbox')].filter(isChecked).length;

const isChecked = checkbox => checkbox.checked === true;

const $guestBookForm = $('#guest-book-form');
$guestBookForm.addEventListener('submit', e => {
	e.preventDefault();
	alert(
		getMatchCount() > 0
			? `${getUserName()}님, 저와 취향이 ${getMatchCount()}개 일치하시는군요 😎`
			: `${getUserName()}님, 저와 취향이 일치하지 않는군요 😂`,
	);
});
