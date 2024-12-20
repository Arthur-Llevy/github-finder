import { CardProps } from "./types";

export function Card({ title, link, description, setServerResponse }: CardProps) {
    const removeRepository = () => {
        setServerResponse(previous => previous.filter(repository => repository.name !== title));
    }

    return (
        <div className="p-4 h-auto max-h-44 rounded-sm w-96 flex flex-col items-start justify-center gap-4 bg-slate-200 text-slate-900 hover:translate-x-1 hover:-translate-y-1 duration-100">
            <h4 className="text-xl"><a href={link}>{title}</a></h4>
            <span>{description}</span>
            <button className="bg-red-400 hover:bg-red-500 duration-100 w-16 rounded-sm" onClick={removeRepository}>X</button>
        </div>
    )
}