import { Container } from "./style";
import entradas from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useTransaction";

export function Summary() {
  const { transactions } = useTransaction();

  const summay = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="logo de entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summay.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="logo de saídas" />
        </header>
        <strong>
          {" "}
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summay.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="logo de total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summay.total)}
        </strong>
      </div>
    </Container>
  );
}
