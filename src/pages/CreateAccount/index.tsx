import './style.css';

import SignUpForm from '../../components/SignUpForm';
import { register } from '../../services/auth.service';

const CreateAccountPage = () => {
  return (
    <main className="sign-up-page">
      <section className="sign-up-image-container">
        <img className="sign-up-image" src="src/assets/img/logo-ifce.svg" alt="IFCE" />
      </section>
      <SignUpForm
        onConfirmation={(name, email, password, passwordConfirmation) => {
          register(name, '', email, password);
        }}
      />
    </main>
  );
};

export default CreateAccountPage;
