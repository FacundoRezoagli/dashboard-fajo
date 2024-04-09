import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./clients.module.css"
import { Metadata } from 'next';
import { Client } from '@/types/types';
import { TableClients } from '@/components/clients/table-clients';

export const metadata: Metadata = {
  title: "Clientes",
  description: "Toda la información sobre los clientes"
}

const getClientes = async (): Promise<Array<Client>> => {
  const response = await fetch("http://localhost:5199/api/clients");
  const data = await response.json();
  return data ?? [] as Array<Client>;
}

export default async function Clients() {
  const clientes = await getClientes();
  
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Clientes</h1> 
      <TableClients clientes={clientes} />
    </main>
  );
}
