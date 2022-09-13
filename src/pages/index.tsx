import type { NextPage } from 'next'
import Button from '../components/Button';
import Layout from '../components/Layout'
import Table from '../components/Table';
import Client from '../core/Client';
import { useAppData } from '../data/hook/useAppData'

const Home: NextPage = () => {
  const {theme} = useAppData();

  const clientMock = [
    new Client('Ana', 21, '1'),
    new Client('bia', 21, '2'),
    new Client('caarol', 21, '3')
  ];

  const clientSelected = (client: Client) => {
    console.log(client.name)
  }

  const clientDeleted = (client: Client) => {
    console.log(client.id)
  }

  return (
    <div className={`${theme} transition-colors`}>
      <div className={`flex justify-center items-center h-screen bg-zinc-300 dark:bg-zinc-700`}>
        <Layout newTitle='Novo Cadastro'>
          <Button>New Client</Button>
          <Table
            clients={ clientMock }
            clientSelected={ clientSelected }
            clientDeleted={ clientDeleted }
          ></Table>
        </Layout>
      </div>
    </div>
  )
}

export default Home
