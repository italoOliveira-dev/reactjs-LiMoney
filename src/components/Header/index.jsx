import logoImg from "../../assets/Logo.png";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Li Money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
