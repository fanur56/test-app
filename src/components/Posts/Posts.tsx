import {useGetPostsQuery} from "../../services/user.api.ts";
import {useNavigate, useParams} from "react-router-dom";
import {Post} from "../../services/types.ts";
import {PostItem} from "./PostItem/PostItem.tsx";
import {Button} from "antd";
import style from "./Posts.module.scss";
import {HOME} from "../../routes/routes.tsx";

export const Posts = () => {
    const { data } = useGetPostsQuery();
    const { userId } = useParams();
    const filteredPosts = data?.filter(post => post.userId === Number(userId));
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={()=>navigate(HOME)} className={style.arrow} variant={"filled"} type={"text"}>
                {`<- Go back to users`}
            </Button>
            {filteredPosts?.map((post: Post) => (
                <PostItem userId={post.userId} postId={post.id} body={post.body} title={post.body} key={post.id} />))}
        </div>
    )
}