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
        fetch("https://isoi-backend.herokuapp.com/api/admin/allfree-event", {
            method: "GET",
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
        fetch("https://isoi-backend.herokuapp.com/api/admin/allmembershipevent", {
            method: "GET",
        }).then(res => res.json())
            .then(data => {
                dispatch({ type: "SET_PAID_EVENTS", payload: data })
            }).catch((e) => {
                alert(e);
            })

    }
}

export const setProducts = () => {
    return (dispatch => {
        fetch("https://isoi-backend.herokuapp.com/api/membership/getproducts", {
            method: "GET"
        }).then(res => res.json()).then(data => {
            dispatch({ type: "SET_PRODUCTS", payload: data })
        }).catch((e) => alert(e))
    })
}

export const getMemberDetails = () => {
    return (dispatch => {
        fetch("https://isoi-backend.herokuapp.com/api/membership/getmember" , {
            method : "GET",
            headers : {
                "Content-Type": "application/json",
				"Authorization": "Bearer " + JSON.parse(localStorage.getItem("jwt"))
            }
        }).then(res => res.json()).then(data => {
            dispatch({type : "SET_MEMBERS_DETAILS" , payload : data})
        }).catch((e) => alert(e))
    })
}
export const getMyfEvents = () => {
    return (dispatch => {
        fetch("https://isoi-backend.herokuapp.com/api/users/getmyfree-event" , {
            method : "GET",
            headers : {
                "Content-Type": "application/json",
				"Authorization": "Bearer " + JSON.parse(localStorage.getItem("jwt"))
            }
        }).then(res => res.json()).then(data => {
            dispatch({type : "SET_FEVENT" , payload : data})
        }).catch((e) => alert(e))
    })
}
export const getMyPevents = () => {
    return (dispatch => {
        fetch("https://isoi-backend.herokuapp.com/api/users/getmypaid-event" , {
            method : "GET",
            headers : {
                "Content-Type": "application/json",
				"Authorization": "Bearer " + JSON.parse(localStorage.getItem("jwt"))
            }
        }).then(res => res.json()).then(data => {
            dispatch({type : "SET_PEVENT" , payload : data})
        }).catch((e) => alert(e))
    })
}