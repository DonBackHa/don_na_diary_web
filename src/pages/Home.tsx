import React from "react";
import {useNavigate} from "react-router-dom";
import {userInfoData} from "../store/reducer/userInfo";
import {useAppSelector} from "../store/hook";

function Home() {
    const navigate = useNavigate();
    const user: userInfoData = useAppSelector(state => state.userInfo)

    function goMyPage() {
        navigate("/MyPage")
    }

    return (
        <div>
            <div>HOME</div>
            <button onClick={goMyPage}>사용자 정보 입력</button>
            <div>사용자 이름 : {user.name}</div>
            <div>사용자 이메일 : {user.email}</div>
        </div>
    )
}

export default Home;