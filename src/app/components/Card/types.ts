import { SetStateAction, Dispatch } from "react";
 
type RepositoryType = {
    id: number,
    name: string,
    description: string,
    clone_url: string
}

type CardProps = {
    title: string,
    link: string,
    description: string,
    setServerResponse: Dispatch<SetStateAction<RepositoryType[]>>
}

export type { CardProps };