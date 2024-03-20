import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./Post.module.css";
function Post({post})
{
    return <div className={`card ${styles.post}`} style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">
        {post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{post.reactions}</span>
      </h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag)=><span className={`badge text-bg-primary ${styles.tag}`}>#{tag}</span>)}
    </div>
  </div>
}
export default Post;