'use client'

import axios from "axios";
import { FormEvent, useState } from "react";
import { FormProps } from "./types";

export function Form({ setServerResponse }: FormProps) {
    const [user, setUser] = useState<string>('');

    const handleSubmit = async (form: FormEvent) => {
        form.preventDefault();

        try {
            const response = await axios.get(`https://api.github.com/users/${user}/repos`);
            setServerResponse(response.data);
        } catch (error) {
            console.error('Falha ao buscar os repositórios: ', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4">
            <input 
                type="text"
                placeholder="Ex.: Arthur-Llevy"
                className="p-4 rounded-sm bg-slate-500 text-center w-56"
                name="user"  
                onChange={e => setUser(e.target.value)}
            />
            <button type="submit" className="p-4 m-4 bg-slate-100 text-black rounded-sm w-56 m-auto">Buscar</button>
        </form>
    );
}