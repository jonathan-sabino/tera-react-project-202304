// rfc snippet
// class => className
import React from "react";
// importar imagem
import logo from "../../images/logo.svg";

export default function Home() {
  // criação do estado
  const [users, setUsers] = React.useState([
    {
      createdAt: "2023-01-23T15:30:07.322Z",
      fn: "Mafalda",
      ln: "Swift",
      bio: "Placeat magnam eveniet harum aut dolorem molestias aliquam. Eaque et iure repudiandae quisquam laboriosam. Veniam dolorum velit iusto. Dolorem ullam delectus incidunt reiciendis nulla mollitia quos rem perspiciatis. Atque fugiat modi nemo. Illum voluptatum consequatur quidem fuga incidunt quae odio unde.",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg",
      id: "1",
    },
    {
      createdAt: "2023-01-23T01:11:58.908Z",
      fn: "Columbus",
      ln: "Crona",
      bio: "Quos molestiae quasi ad est amet ratione quibusdam. Porro cupiditate minus sequi suscipit. Officiis quis consequatur doloremque. Accusantium ratione laudantium.",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg",
      id: "2",
    },
  ]);
  return (
    <div className="home center">
      <div className="home__logo">
        {/* usar imagem */}
        <img src={logo} className="responsive" alt="" />
      </div>
      <select className="home__select-users">
        <option>Selecionar usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}
