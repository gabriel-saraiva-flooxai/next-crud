interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-600 via-${cor}-500 to-${cor}-600
            text-purple-50 px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}