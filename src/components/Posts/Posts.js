import { Link, Route } from "react-router-dom";
import FullPost from "./FullPost/FullPost"

const Posts = ({ match }) => {
    const results = [];
    for (let i = 0; i <= 5; i++) {
        results.push(<li><Link to={'/posts/' + i}>Posts #{i}</Link></li>)
    }

    return (
        <div>
            {match.isExact
                ? <ul>{results}</ul>
                : <Route path=".posts/:id" component={FullPost} />}
        </div>
    )
}
export default Posts;