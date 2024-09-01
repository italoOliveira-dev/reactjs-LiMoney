import { Container } from "./style";

import { TransactionItem } from "./TransactionItem";
import { useTransaction } from "../../hooks/useTransaction";

export function TransactionsTable() {
  const { transactions } = useTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
