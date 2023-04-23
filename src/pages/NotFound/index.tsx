import './styles.css';

const NotFound: React.FC = () => {
  return (
    <main className="not-found-container">
      <section className="not-found-content">
        <h1 className="not-found-content-title">404</h1>
        <p className="not-found-content-message">Página não encontrada.</p>
        <a className="not-found-content-link" href="/">
          Voltar para a página inicial
        </a>
      </section>
    </main>
  );
};

export default NotFound;
