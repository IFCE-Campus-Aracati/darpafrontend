import './style.css';

import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <main className="login-page">
      <LoginForm
        onLogin={(email, password) => console.log(`LoginForm: ${email}:${password}`)}
      />
      <section className="login-image-container">
        <img className="login-image" src="src/assets/img/logo-ifce.svg" alt="IFCE" />
      </section>
    </main>
  );
};

export default LoginPage;
