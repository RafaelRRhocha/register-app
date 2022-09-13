import type { FC } from 'react';

interface InputsProps {
  type?: 'text' | 'number'
  text: string
  value: any
  onlyRead?: boolean
  onChange?: (value: any) => void
}

const Inputs: FC<InputsProps> = ({ text, type, value, onlyRead, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="p-1">
        { text }
      </label>
      <input
        type={type ?? 'text'}
        value={ value }
        readOnly={ onlyRead }
        onChange={({ target: { value }}) => onChange?.(value)}
        className="text-zinc-900 border border-violet-500 rounded-lg focus:outline-none bg-zinc-300 px-4 py-2 focus:bg-white transition-colors"
      />
    </div>
  );
}

export default Inputs;