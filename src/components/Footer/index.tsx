import './styles.css';

import React from 'react';

type FooterSection = {
  title: string;
  links: { description: string; link: string }[];
};

const footerSections: FooterSection[] = [
  {
    title: 'Assuntos',
    links: [
      { description: 'Estudantes', link: '' },
      { description: 'Acesso à informação', link: '' },
      { description: 'Ensino', link: '' },
      { description: 'Pesquisa e inovação', link: '' },
      { description: 'Extensão', link: '' },
      { description: 'Servidores', link: '' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { description: 'Sobre o IFCE', link: '' },
      { description: 'Perguntas frequentes', link: '' },
      { description: 'Contato', link: '' },
      { description: 'Serviços do IFCE', link: '' },
      { description: 'Sistemas', link: '' },
      { description: 'Comunicação Social', link: '' },
    ],
  },
  {
    title: 'Redes Sociais',
    links: [
      { description: 'Facebook', link: '' },
      { description: 'Youtube', link: '' },
      { description: 'Instagram', link: '' },
      { description: 'Twitter', link: '' },
      { description: 'Soundcloud', link: '' },
      { description: 'Flickr', link: '' },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="links">
        {footerSections.map((footerSection) => (
          <section className="footer-link-section" key={footerSection.title}>
            <h3 className="footer-link-section-title">{footerSection.title}</h3>
            <ul className="footer-link-section-links">
              {footerSection.links.map((link) => (
                <li key={link.description}>
                  <a href={link.link}>{link.description}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
