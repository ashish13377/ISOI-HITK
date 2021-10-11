export const setUserDetails = (data) => {
    return {
        type: "SET_USER",
        payload: {
            data: data
        }
    }
}
export const logout = () => {
    return {
        type: "LOGOUT_USER",
    }
}

export const setfreeEvents = () => {
    return (dispatch) => {
        fetch("http://localhost:8000/api/admin/allfree-event", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                dispatch({ type: "SET_EVENTS", payload: data });
            }).catch((e) => {
                alert(e);
            })

    }
}
export const setPaidEvents = () => {
    return (dispatch) => {
        fetch("http://localhost:8000/api/admin/allmembershipevent", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                dispatch({ type: "SET_PAID_EVENTS", payload: data })
            }).catch((e) => {
                alert(e);
            })

    }
}