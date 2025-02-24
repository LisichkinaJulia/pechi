import { TermCard } from "./TermCard"

const terms = [
    {
        title: "test1",
        description: "desc test1"
    },
    {
        title: "test1",
        description: "desc test1"
    },
    {
        title: "test1",
        description: "desc test1"
    }
]

export const TermList = () => {
    return (
        <ul>
            {terms.map((items, index) => (
                <li key={crypto.randomUUID()}>
                    <TermCard
                        title={items.title}
                        description={items.description}
                    />
                </li>
            ))}
        </ul>
    )
}