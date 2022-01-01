import React from "react";
import {useNavigate} from "react-router-dom";
import {logout_user, userInfoData} from "../store/reducer/userInfo";
import {useAppDispatch, useAppSelector} from "../store/hook";

function Home() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const user: userInfoData = useAppSelector(state => state.userInfo)

    function goMyPage() {
        navigate("/MyPage")
    }

    function logout(){
        dispatch(logout_user());
    }

    return (
        <div>
            <div>HOME</div>
            <button onClick={goMyPage}>사용자 정보 입력</button>
            <button onClick={logout}>사용자 로그아웃</button>
            <div>사용자 이름 : {user.name}</div>
            <div>사용자 이메일 : {user.email}</div>
        </div>
    )
}

export default Home;