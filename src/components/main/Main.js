import Logo from "../../assets/Logo.svg";

import "./Main.min.css";

const Main = ({email}) => {
  return (
    <main>
      <div className="main-container">
        <div className="main-title">
          <img src={Logo} alt="logo" />
          <div className="main-greeting">
            <h1>Olá {email}</h1>
            <p>Bem vindo aos seus resultados</p>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div>
          <div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div>
          <div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div>
          <div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div>
          <div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div>
          <div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div><div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div><div className="card">
            <i></i>
            <div className="card-inner">
              <p>Teste</p>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts-left">
            <div className="charts-left-title">
                <div>
                    <h3>Dados survey</h3>
                    <p>Teste</p>
                </div>
            </div>
          </div>
          <div className="charts-right">
          <div className="charts-right-title">
                <div>
                    <h3>Dados survey</h3>
                    <p>Teste</p>
                </div>
            </div>
            <div className="charts-right-cards">
                <div className="card1">
                    <h3>Teste</h3>
                </div>
                <div className="card2">
                    <h3>Teste</h3>
                </div>
                <div className="card3">
                    <h3>Teste</h3>
                </div>
                <div className="card4">
                    <h3>Teste</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
