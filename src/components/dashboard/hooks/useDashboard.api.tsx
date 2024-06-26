import { transactionData } from '@/mock/data';
import { Transaction } from '@/models/transaction.interface';

const useDashboardApi = () => {
  const getTransactions = async (): Promise<Transaction[]> => {
    const response = await fetch(`${process.env.API_URL}/transactions`);
    const transactions: Transaction[] =
      (await response.json()) ?? transactionData.transactions;

    return transactions;
  };

  return { getTransactions };
};

export default useDashboardApi;
