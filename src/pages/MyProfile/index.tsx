import './styles.css';

export default function Modal() {
  return (
    <main className="modal-page-background">
      <section className="modal-page-container">
        <section className="modal-page-title">
          <h1 className="modal-page-title-h1">Meu Perfil</h1>{' '}
          <img className="modal-page-title-img" src="src\assets\close.svg" alt="fechar" />
        </section>
        <section className="modal-page-body">
          <h2 className="modal-page-body-subtitle">Dados do Usuário</h2>
          <section className="modal-page-body-subcontainer">
            <img
              className="modal-page-body-subcontainer-img"
              src=""
              alt="Foto do Perfil"
            />
            <div className="modal-page-body-subcontainer-right">
              <button className="modal-page-body-subcontainer-button">
                <img src="" alt=" " /> Alterar senha
              </button>
              <div className="modal-page-body-subcontainer-input">
                <input type="text" placeholder="Nome do usuário" />
                <img src="" alt=" " />
              </div>
            </div>
          </section>
          <label className="modal-page-body-label-email">
            Email <br />
            <input type="email" placeholder="reperkilson.chavoso@gmail.com" />
          </label>
          <label className="modal-page-body-label-name">
            Nome <br />
            <input type="Nome" placeholder="Reperkilson José da Laranjeira Silvestre" />
          </label>
          <label className="modal-page-body-label-phonenumber">
            Celular <br />
            <input type="tel" placeholder="(XX) XXXXX-XXXX" />
          </label>
          <div className="modal-page-body-submit-button-container">
            <button className="modal-page-body-submit-button-save">Salvar</button>
            <button className="modal-page-body-submit-button-cancel">Cancelar</button>
          </div>
        </section>
      </section>
    </main>
  );
}
