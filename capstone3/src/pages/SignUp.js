import { useState } from 'react';
import '../styles/Authentication.css';
import Swal from 'sweetalert2';

// Components
import SignInButton from '../components/SignInButton';
import AuthRedirect from '../components/AuthRedirect';



export default function SignUp(){
	AuthRedirect();

	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ password, setPassword ] = useState('');

	function registerUser(e) {
		e.preventDefault();

		if (phone.length !== 11 || isNaN(Number(phone))){
			Swal.fire({
	        	title: 'Invalid Phone Number',
	        	icon: 'error',
	        	text: 'Phone number format is invalid. Please try again.'
	        })
		} else if (password.length < 8) {
			Swal.fire({
	        	title: 'Password is Weak',
	        	icon: 'error',
	        	text: 'Please make a longer password.'
	        })
		}	else {
			fetch('http://localhost:4000/users/register', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					fullName: fullName,
					email: email,
					phone: phone,
					password: password
				})
			})
			.then(res => res.json())
			.then(data => {
				if (data){
			        function SignIn() {
						e.preventDefault();

						fetch('http://localhost:4000/users/login', {
							method: 'POST',
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								email: email,
								password: password
							})
						})
						.then(res => res.json())
						.then(data => {
						    localStorage.setItem('token', data.access);
						})
					}

					SignIn()

					setFullName('');
					setEmail('');
					setPhone('');
					setPassword('');

					Swal.fire({
			        	title: 'Success',
			        	icon: 'success',
			        	text: 'You\'re now registered!'
			        }).then(() => {
			        	window.location.reload(true);
			        })
				} else {
					Swal.fire({
			        	title: 'An error occured',
			        	icon: 'error',
			        	text: 'Please try again later'
			        })
				}
			})
		}
	}

	return (
		<div className="authentication">
			<SignInButton />
			<div className="section">
				<div>
					<img className="logo" src="exclsv.png" alt="logo" />
					<div className="container">
						<div className="sub-container">
							<h1>Create an Exclsv account</h1>
							<p className="text">Create and get started with your free account. <a href="#">Learn more.</a></p>
							<form onSubmit={(e) => registerUser(e)}>
								<label className="fullName">
								Full Name
								<input
									type="text"
									name="fullName"
									value={fullName}
									onChange={e => setFullName(e.target.value)}
									required
								/>
								</label>

								<label className="email">
								Email
								<input
									type="email"
									name="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
								</label>
								
								<label className="phone">
								Phone
								<input 
									type="text"
									name="phone"
									value={phone}
									onChange={e => setPhone(e.target.value)}
									required
								/>
								<p className="phone-text">Standard call, message, or data rates may apply.</p>
								</label>

								<label className="password">
								Password
								<input
									type="password"
									name="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
									required
								/>
								</label>
								
								<button><img src="lock.png" alt="lock" />Create Account</button>
							</form>
							<p className="text"><em>By selecting create account, you agree to our <a href="#">Terms</a> and have read and acknowledged our <a href="#">Global Privacy Statement</a>.</em></p>
						</div>
						<div className="captcha-text">
							<p>Invisible reCAPTCHA by Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}