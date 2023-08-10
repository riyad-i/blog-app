export default function PostItem(props){
    const {title, content} = props.post
    return(
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )
}