import './style.css';

import SignUpForm from '../../components/SignUpForm';

const CreateAccountPage = () => {
  return (
    <main className="sign-up-page">
      <section className="sign-up-image-container">
        <img className="sign-up-image" src="src/assets/img/logo-ifce.svg" alt="IFCE" />
      </section>
      <SignUpForm
        onConfirmation={(name, email, password, passwordConfirmation) =>
          console.log(`SignUp: ${name} ${email} ${password} ${passwordConfirmation}`)
        }
      />
    </main>
  );
};

export default CreateAccountPage;
