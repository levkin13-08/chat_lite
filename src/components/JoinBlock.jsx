import React from "react";

function JoinBlock() {
    return (    

        <div className = "join-block">
            <input type="text" placeholder="Room ID"/>
            <input type="text" placeholder="Name"/>
            <button  className="btn btn-sucess">Войти</button>
        </div>
    );
}

export default JoinBlock;