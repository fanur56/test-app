import {Button, Card, Drawer, Input} from "antd";
import React, {FC, useState} from "react";
import style from "./PostItem.module.scss";
import {useChangePostTitleMutation, useLazyGetCommentsQuery} from "../../../services/user.api.ts";

type Props = {
    title: string;
    body: string;
    postId: number;
    userId: number;
}

export const PostItem: FC<Props> = ({ title, body, postId, userId }) => {
    const [getComments, { data, isLoading }] = useLazyGetCommentsQuery();
    const [updatePost, { data: updatedData, isLoading: isUpdateLoading }] = useChangePostTitleMutation()
    const filteredComments = data?.filter(item => item.postId === postId)

    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const onSetNewTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
       setNewTitle(e.target.value)
    }

    const showDrawer = () => {
        setOpen(true);
        getComments()
    };

    const onClose = () => {
        setOpen(false);
    };

    const onUpdatePost = () => {
        const payload = {
            userId,
            id: postId,
            title: newTitle,
            body,
        }
        updatePost(payload)
        setNewTitle('')
    }
    return (
        <div>
            <Card onClick={showDrawer} className={style.cardItem} title={title} >
                {body}
            </Card>
            <Drawer
                width={736}
                loading={isLoading}
                title={`Post ${postId}`}
                onClose={onClose} open={open}
            >
                <div className={style.postItem}>
                    <h3 className={style.postTitle}>{updatedData?.title ? updatedData.title : title}</h3>
                    <div className={style.inputTitle}>
                        <Input value={newTitle} onChange={onSetNewTitle} placeholder={"New title"}></Input>
                        <Button loading={isUpdateLoading} onClick={onUpdatePost} variant={"filled"} type={"text"}>Ok</Button>
                    </div>
                    <p>{body}</p>
                </div>

                {filteredComments?.map((comment, index) => <div className={style.commentItem} key={comment.id}>
                    <h4>Comment {index + 1}:</h4>
                    <span>{comment.body}</span>
                </div>)}
            </Drawer>
        </div>

    )
}