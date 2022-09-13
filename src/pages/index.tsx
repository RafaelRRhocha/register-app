/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Forms from '../components/Forms';
import Layout from '../components/Layout'
import Table from '../components/Table';
import Client from '../core/Client';
import ClientRepository from '../core/ClientRepository';
import { useAppData } from '../data/hook/useAppData'
import ClientCollection from '../firebase/db/ClientCollection';

const Home: NextPage = () => {
  const { theme } = useAppData();

  const repo: ClientRepository = new ClientCollection();


  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [newClient, setNewClient] = useState<Client>(Client.void());
  const [newClients, setNewClients] = useState<Client[]>([]);

  const getAll = () => {
    repo.getAll().then(clients => {
      setNewClients(clients);
      setVisible('table')
    });
  }

  useEffect(getAll, []);

  const clientSelected = (client: Client) => {
    setNewClient(client)
    setVisible('form')
  }

  const clientDeleted = async (client: Client) => {
    await repo.delete(client);
    getAll();
  }

  const createClient = () => {
    setNewClient(Client.void())
    setVisible('form');
  }

  const saveClient = async (client: Client) => {
    await repo.save(client);
    getAll();
  }

  return (
    <div className={`${theme} transition-colors`}>
      <div className={`flex justify-center items-center h-screen bg-zinc-300 dark:bg-zinc-700`}>
        <Layout newTitle='New Register'>
          {visible === 'table' ? (
            <>
              <Button onClick={createClient}>New Client</Button>
              <Table
                clients={ newClients }
                clientSelected={ clientSelected }
                clientDeleted={ clientDeleted }
              ></Table>
            </>
          ) : (
            <Forms changeClient={ saveClient } cancelVisible={ setVisible } client={ newClient } />
          )}
        </Layout>
      </div>
    </div>
  )
}

export default Home
