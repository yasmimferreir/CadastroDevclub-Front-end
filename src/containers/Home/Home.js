import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import People from "../../img/templete.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: nemUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(nemUser);

    setUsers([...users, nemUser]);

    history.push("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People}></Image>
      <ContainerItens>
        <H1> Bem-vindos ao Login</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} required type="text" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} required type="number" />

        <Button onClick={addNewUser}>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
