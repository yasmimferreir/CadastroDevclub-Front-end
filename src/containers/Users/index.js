import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'

import axios from 'axios';
import Avatar from '../../img/avatar.svg'
import Arrow from '../../img/arrow-2.svg'
import Trash from '../../img/delete.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from './styles'

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()


  useEffect(() => {
    async function fetchUsers() {
      const { data: nemUsers } = await axios.get("http://localhost:3001/users")

      setUsers(nemUsers);
    }

    fetchUsers()

  }, []);


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers);
  }

  function goBackPage() {
    history.push('/');
  }

  return (

    <Container>
      <Image alt="logo-imagem" src={Avatar}></Image>
      <ContainerItens>
        <H1> Usuários</H1>

        <ul>
          {users.map((user) => (

            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="delete"></img>
              </button>
            </User>

          ))}
        </ul>
        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow}></img>
          voltar  </Button>

      </ContainerItens>
    </Container>

  )
}

export default Users;