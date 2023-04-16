import './style.css';
import React from 'react';


interface CreateAccountPgSet {
    onLogout: () => void;
}

const CreateAccountPg: React.FC<CreateAccountPgSet> = ({ onLogout }) => {
    return (
        <div className="container-background-CA1">
            <div className="logoifce">
                <img src='src/assets/img/logo-ifce.svg' alt="IFCE" />
            </div>
            <div className="container-background-CA2">
                <div className="container-background-CA3">
                    <header className="titleCA">
                        <span>Novo cadastro</span>
                    </header>

                    <div className="inputCA">
                        <input
                            type="text"
                            name="Nome"
                            id="Nome"
                            placeholder='Nome'
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder='E-mail'
                        />
                        <input
                            type="text"
                            name="senha"
                            id="senha"
                            placeholder='Senha'
                        />
                        <input
                            type="text"
                            name="CSenha"
                            id="CSenha"
                            placeholder='Confirmar senha'
                        />
                    </div>

                    <button className="button-CA">
                        Concluir
                    </button>

                    <div className="back-login">
                        <a href="cadastra">Já possui uma conta?</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CreateAccountPg