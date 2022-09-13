import { FC, useState } from 'react';
import Client from '../core/Client';
import Button from './Button';
import Inputs from './Inputs';

interface FormsProps {
  client: Client
  changeClient?: (client: Client) => void
  cancelVisible?: any
}

const Forms: FC<FormsProps> = ({ client, cancelVisible, changeClient }) => {
  const [name, setName] = useState(client?.name ?? '');
  const [age, setAge] = useState(client?.age ?? '');
  const id = client?.id;

  return (
    <div>
      {id && (
        <Inputs text="Id" value={ id } onlyRead />
      )}
      <Inputs text="Name" value={ name } onChange={ setName } />
      <Inputs text="Age" value={ age } type="number" onChange={ setAge } />
      <div className="flex gap-2 justify-end m-5">
        <Button color={ 'btn-info' } onClick={() => changeClient?.(new Client(name, Number(age), id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={() => cancelVisible('table') } color={ 'btn-warning' }>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default Forms;