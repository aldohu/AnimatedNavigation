const burger = document.querySelector('.burger');
const list = document.querySelector('ul');
const cross = document.querySelector('.cross');
burger.addEventListener('click', () => {
	list.classList.remove('hide');
	burger.classList.add('hide');
});
cross.addEventListener('click', () => {
	list.classList.add('hide');
	burger.classList.remove('hide');
});
