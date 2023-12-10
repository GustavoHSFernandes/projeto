import React from "react";

import { Navbar } from "../../components/header/navbar";
import "./style.css";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <section className="prof-container">

        <div className="p-options">
          <img
            className="p-img-icon"
            alt=""
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
          <Link to="/products" className="p-btns">
            Editar Perfil
          </Link>
          <Link to="/login" className="p-btns">
            Sair
          </Link>
        </div>

        <div className="data-container">
          <div className="data">
            <h1>Dados Cadastrados</h1>
            <hr />
            <div className="info-frame">
              Nome: Nome Cadastrado
            </div>
            <div className="info-frame">
              Sexo: ------x------
            </div>
            <div className="info-frame">
              Data de nascimento: DD/MM/AAAA
            </div>
            <div className="info-frame">
              Email: mail@mail.com
            </div>
            <div className="info-frame">
              Telefone Celular: XX XXXXX-XXXX
            </div>
          </div>
        </div>

      </section>
      <section className="buys-container">
        <div className="buys">
          <h1>Compras Recentes</h1>
          <hr />
        </div>
      </section>
    </div>
  );
};
