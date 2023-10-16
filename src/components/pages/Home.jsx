// rfc snippet
// class => className
import React from "react";
// importar imagem
import logo from "../../images/logo.svg";

export default function Home() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  const handleUserChange = (e) => setCurrentUser(e.target.value);

  const handleButtonClick = (e) => console.log(e);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select onChange={handleUserChange} className="home__select-users">
        <option value="">Selecionar usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUser && (
        <button onClick={handleButtonClick} className="button-primary">
          Entrar
        </button>
      )}
    </div>
  );
}
