'use client'

import { Card } from "./components/Card/card";
import { Form } from "./components/Form";
import { useState } from "react";

type RepositoryType = {
  id: number,
  name: string,
  description: string,
  clone_url: string
}

export default function Home() {
  const [serverResponse, setServerResponse] = useState<RepositoryType[]>([]);

  return (
    <div className="w-full mx-auto my-7 rounded-sm">
      <header>
        <h1 className="text-2xl text-center p-4">GitHub Finder</h1>
      </header>
      <main className="flex gap-4 flex-wrap justify-center">
        <div className="max-w-96 h-72 border-2 border-slate-600 flex flex-col items-center justify-between p-4">
          <h2 className="text-center">Digite o nome do usuário que deseja listar os repositórios</h2>
          <Form setServerResponse={setServerResponse} />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {serverResponse.map((repository: RepositoryType) => (
            <Card
              setServerResponse={setServerResponse}
              key={repository.id}
              title={repository.name}
              description={repository.description}
              link={repository.clone_url}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
