import type { FC } from 'react';
import Client from '../core/Client';
import { EditIcon, TrashIcon } from './icons';

interface TableProps {
  clients: Client[]
  clientSelected?: (client: Client) => void
  clientDeleted?: (client: Client) => void
}

const Table: FC<TableProps> = ({ clients, clientSelected, clientDeleted }) => {
  const verifyClient = clientSelected || clientDeleted;

  const renderActions = (client: Client, i: number) => {
    return (
      <td className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-300'} text-zinc-800 cursor-pointer`}>
        {clientSelected && (
          <button
            type="button"
            onClick={() => clientSelected?.(client)}
            className="text-green-700 hover:text-red-700 p-2 transition-colors">{EditIcon}</button>
        )}
        {clientDeleted && (
          <button
          type="button"
          onClick={() => clientDeleted?.(client)}
          className="hover:animate-pulse">{TrashIcon}</button>
        )}
      </td>
    )
  }

  return (
    <table className="table w-full text-zinc-100">
      <thead>
        <tr>
          <th className="bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200" >Id</th>
          <th className="bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">Name</th>
          <th className="bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">Age</th>
          {verifyClient && (
            <th className="bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">Actions</th>
          )}
        </tr>
      </thead>
      <tbody>
        {clients?.map((client, i) => {
          return (
            <tr key={client.id} >
              <td className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-300'} text-zinc-800`}>{client.id}</td>
              <td className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-300'} text-zinc-800`}>{client.name}</td>
              <td className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-300'} text-zinc-800`}>{client.age}</td>
              {verifyClient && renderActions(client, i)}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;