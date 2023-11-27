import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

export default function SignIn(){
	return (
		<div className="sign-in-container">
			<div className="main">
				<p>Already have an Exclsv account?</p>
				<a href="#">I forgot my User ID or Password</a>
			</div>
			<div>
				<Link to="/sign_in" className="link-style">
					<button>
						<img src="lock.png" />
						Sign In
					</button>
				</Link>
			</div>
		</div>
	)
}