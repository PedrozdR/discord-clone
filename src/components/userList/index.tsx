import React from "react";
import { Container, Role, User, Avatar } from "./styles"

export interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot &&
        <span>BOT</span>
      }
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="PedrozdR" />

      <Role>Ofline - 18</Role>
      <UserRow nickname="Naapz" isBot />
      <UserRow nickname="JeanSilvany" isBot />
      <UserRow nickname="Djani Ibrahim " />
      <UserRow nickname="Apx" />
    </Container>
  )
}

export default UserList;