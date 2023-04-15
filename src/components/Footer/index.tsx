import './styles.css';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="column">
          <h2 className="column-title">Assuntos</h2>
          <ul className="column-list">
            <li>
              <a href="/">Estudantes</a>
            </li>
            <li>
              <a href="/">Acesso à informação</a>
            </li>
            <li>
              <a href="/">Ensino</a>
            </li>
            <li>
              <a href="/">Pesquisa e inovação</a>
            </li>
            <li>
              <a href="/">Extensão</a>
            </li>
            <li>
              <a href="/">Servidores</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2 className="column-title">Serviços</h2>
          <ul className="column-list">
            <li>
              <a href="/">Sobre o IFCE</a>
            </li>
            <li>
              <a href="/">Perguntas frequentes</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Serviços do IFCE</a>
            </li>
            <li>
              <a href="/">Sistemas</a>
            </li>
            <li>
              <a href="/">Comunicação Social</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2 className="column-title">Redes sociais</h2>
          <ul className="column-list">
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Soundcloud</a>
            </li>
            <li>
              <a href="/">Flickr</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
