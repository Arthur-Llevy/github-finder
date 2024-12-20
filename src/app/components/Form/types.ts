import { Dispatch, SetStateAction } from "react";

type RepositoryType = {
    id: number,
    name: string,
    description: string,
    clone_url: string
}

type FormProps = {
    setServerResponse: Dispatch<SetStateAction<RepositoryType[]>>;
}

export type { FormProps };