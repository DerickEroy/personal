import '../styles/Home.css';

export default function Home() {
  const token = localStorage.getItem('token');
  const isAdmin = token ? JSON.parse(atob(token.split('.')[1])).isAdmin : false;

  return (
    <div className="home">
      <h1>{token ? `Welcome ${isAdmin ? 'Admin' : 'Authenticated User'}` : 'Welcome Guest'}!</h1>
    </div>
  );
}