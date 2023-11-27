import { useState, useEffect } from 'react';
import '../styles/Authentication.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Components
import AuthRedirect from '../components/AuthRedirect';



export default function SignIn({}){
	AuthRedirect();

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	function registerUser(e) {
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
		    if (data.access) {
		    	localStorage.setItem('token', data.access);
		        setEmail('');
		        setPassword('');
		        
		        Swal.fire({
		        	title: 'Success',
		        	icon: 'success',
		        	text: 'You\'re now logged in!'
		        }).then(() => {
		        	console.log('Reloading the page...');
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

	return (
		<div className="authentication">
			<div className="section">
				<div>
					<img className="logo" src="exclsv.png" />
					<div className="container">
						<div className="sub-container">
							<h1>Sign In</h1>
							<p className="text">Do not have an account yet? <Link to="/sign_up">Sign Up.</Link></p>
							<form onSubmit={(e) => registerUser(e)}>
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

								<label className="password">
								Password
								<input
									type="password"
									name="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
									required
								/>
								<img />
								</label>

								<div className="remember-me">
									<input type="checkbox" name="radio" id="remember"/>
									<label htmlFor="remember">Remember Me</label>
								</div>
								
								<button><img src="lock.png" />Sign In</button>
							</form>
							<p className="text"><em>By selecting Sign In or Sign In with Google, you agree to our <a href="#">Terms</a> and have read and acknowledged our <a href="#">Global Privacy Statement</a>.</em></p>
							<hr />
							<a className="forgot" href="#">I forgot my user ID or password</a>
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