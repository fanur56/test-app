import {useGetUserQuery} from "../../services/user.api.ts";
import {Button} from "antd";
import style from "./Users.module.scss"
import {NavLink} from "react-router-dom";

export const Users = () => {

    const { data } = useGetUserQuery();

    return (
        <div>
            <h3 className={style.title}>Users: </h3>
            <div className={style.list}>
                { data?.map((user) => (
                        <NavLink to={`posts/${user.id}`} key={user.id}>
                            <Button className={style.button} variant={"filled"} type={"text"} key={user.id}>
                                {user.name}
                            </Button>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}