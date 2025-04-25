import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string 
    children: any
} {/*Exige TITULO, para não, colocar ?*/}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-purple-100 text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}