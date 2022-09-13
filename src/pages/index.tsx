import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useAppData } from '../data/hook/useAppData'

const Home: NextPage = () => {
  const {theme} = useAppData();
  return (
    <div className={`${theme} transition-colors`}>
      <div className={`flex justify-center items-center h-screen bg-zinc-300 dark:bg-zinc-700`}>
        <Layout newTitle='Novo Cadastro' content='sdasdasa' />
      </div>
    </div>
  )
}

export default Home
