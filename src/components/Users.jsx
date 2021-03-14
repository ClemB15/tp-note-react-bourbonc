import React, {useEffect, useState} from "react";
import {useMarkerContext} from "../contexts/MarkerContext";
const Users = () => {
    const { state, dispatch } = useMarkerContext()
    useEffect(() => '', [state.user])

    const handleChange = event => {
        const pseudo = document.querySelector("input[name='name']").value
        const mail = document.querySelector("input[name='mail']").value
        dispatch({user: {
                name: pseudo,
                mail: mail,
            },
            type:'userInfo',
        });
    }

    return (
        <form>
            <fieldset>
                <label>Pseudo :</label>
                <input type="text" name="name" onChange={handleChange}/><br/>
                <label>Mail :</label>
                <input type="mail" name="mail" onChange={handleChange}/>
            </fieldset>
        </form>
    );
}

export default Users