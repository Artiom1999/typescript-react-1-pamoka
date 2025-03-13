import React, { useState } from 'react';

export const UserForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // neperkruana puslapio
    setMessage(`Vartotojas: ${name}, Amzius: ${age}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vardas"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amzius"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">Pateikti</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};
