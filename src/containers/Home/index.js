import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom";

import axios from 'axios';
import People from '../../img/login-.png'
import Arrow from '../../img/arrow-2.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,

} from './styles'

function App() {
  // const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
    const { data: nemUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(nemUser)


    setUsers([
      ...users,
      nemUser,
    ]);

    history.push('/usuarios')

  }


  // useEffect(() => {
  // async function fetchUsers() {
  // const { data: nemUsers } = await axios.get("http://localhost:3001/users")
  //  setUsers(nemUsers)
  //}
  // fetchUsers()
  //}, [])
  //React hook => useeffect (efeito colateral)


  //async function deleteUser(userId) {
  //  await axios.delete(`http://localhost:3001/users/${userId}`)
  //  const newUsers = users.filter(user => user.id !== userId)
  // setUsers(newUsers)
  // }

  return (

    <Container>
      <Image alt="logo-imagem" src={People}></Image>
      <ContainerItens>
        <H1> Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}></img>
        </Button>

      </ContainerItens>
    </Container>

  )
}

export default App