import ReactMarkdown from "react-markdown"

export default function HuggingRecipe(props) {

    // <ReactMarkdown>{props.recipe}</ReactMarkdown>

    return (
        <section className="markdown">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}