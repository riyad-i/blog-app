export default function PostItem(props){
    const {title, content} = props.post
    return(
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    )
}