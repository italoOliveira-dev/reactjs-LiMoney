import { TransactionsDate } from "../../hooks/useTransaction";

interface TransactionItemProps {
  transaction: TransactionsDate;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <tr>
      <td>{transaction.title}</td>
      <td className={transaction.type}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(transaction.amount)}
      </td>
      <td>{transaction.category}</td>
      <td>
        {new Intl.DateTimeFormat("pt-BR").format(
          new Date(transaction.createdAt)
        )}
      </td>
    </tr>
  );
}
