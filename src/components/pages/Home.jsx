// rfc snippet
// class => className
import React from "react";
import { useNavigate } from "react-router-dom";
// importar imagem
import logo from "../../images/logo.svg";
import AppLoading from "../organisms/AppLoading";
import { CurrentUserContext } from "../../contexts/CurrentUserContent";

export default function Home() {
  //  crio uma constante navigate que chama a propriedade useNavigate do react-router-dom.
  const navigate = useNavigate();
  // crio um estado "currentUser" e um método que modificará esse estado "setCurrentUser", e inicializo com uma string vazia.
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  // crio um estado "users" e um método que modificará esse estado "setUsers", e inicializo com um array vazio.
  const [users, setUsers] = React.useState([]);
  // crio um estado "isLoading" e um método que modificará esse estado "setIsLoading", e inicializo com o boolean true.
  const [isLoading, setIsLoading] = React.useState(true);

  // função utilizada para rodar após a renderização da página
  React.useEffect(() => {
    // método padrão para bater em apis
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      // utiliza o método then para transformar a resposta da api em json
      .then((response) => response.json())
      // dentro do método then, aplico o setUsers para alterar os valores do array users. Sempre que atualizamos um State, o react renderiza novamente.
      .then((data) => {
        setUsers(data);
        // após a api retornar e preencher os users, altero o State isLoading para false
        setIsLoading(false);
      });
  }, []);

  // crio uma variável que armazenará uma arrow function que pega o userId selecionado no evento
  const handleUserChange = (e) => setCurrentUser(e.target.value);

  // condiciono a renderização da página caso isLoading for false, caso for true, aparecerá apenas um Loading... (: operador ternário)
  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      {/* adiciono a variável no onChange do select */}
      <select
        onChange={handleUserChange}
        className="home__select-users"
        defaultValue={currentUser}
      >
        <option value="">Selecionar usuário</option>

        {users
          //utilizamos o método .sort para organizar os nomes por ordem alfabética
          .sort((a, b) => a.fn.localeCompare(b.fn))
          // utilizando o método .map acessamos o array user e retornamos user.fn e user.ln dentro da tag html option, que precisa ter value e key(valor único) por uma questão de performance do react
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {/* condiciono a renderização do botão Entrar caso currentUser seja true, ou seja, não vazio. */}
      {!!currentUser && (
        <button
          // dentro do onClick, chamo o método navigate
          onClick={() => navigate(`/users/${currentUser}`)}
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}
