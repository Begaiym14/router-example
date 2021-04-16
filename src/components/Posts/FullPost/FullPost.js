const FullPost = ({ match }) => {
    return (
        <h1>
            post #{match.params.id}
        </h1>
    )
}
export default FullPost;