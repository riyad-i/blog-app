import {Link} from 'react-router-dom'


export default function PostItem(props){


    const {title, content, body, id} = props.post
    return(
        <article>
            <Link to={`/post/${id}`}>
                <h2 className='text-3xl'>{title}</h2>
                <p>{content}</p>
                <p>{body}</p>
            </Link>
        </article>
    )
}