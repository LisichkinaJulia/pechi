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
            {terms.map((items) => (
                <TermCard
                    title={items.title}
                    description={items.description}
                />
            ))}
        </ul>
    )
}