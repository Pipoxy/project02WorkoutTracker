const loginFormHandler = async (event) => {
	event.preventDefault();

	// Collect values from the login form
	const email = document.querySelector('#login-email').value.trim();
	const password = document.querySelector('#login-password').value.trim();

	if (email && password) {
		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/profile');
		} else {
			alert(response.statusText);
		}
	}
};

const signupFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#signup-name').value.trim();
	const email = document.querySelector('#signup-email').value.trim();
	const password = document.querySelector('#signup-password').value.trim();
	console.log(name);
	if (name && email && password) {
		const response = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/profile');
		} else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector('#login-form')
	.addEventListener('submit', loginFormHandler);

document
	.querySelector('#signup-form')
	.addEventListener('submit', signupFormHandler);
