import * as store from '../../constants'

export const HandleInputChange = (data) => (dispatch) => {
    console.log("changed")
    dispatch({
        type: store.HANDLE_INPUT_CHANGE,
        data
    })
}
export const Loading = (data) => (dispatch) => {
    dispatch({
        type: store.LOADING,
        data
    }
    )
}
export const GetData = (data) => (dispatch) => {
    dispatch(Loading(true))
    fetch(`https://api.github.com/users/${data}`)
        .then((resps) => resps.json())
        .then((data) => {
            dispatch({
                type: store.GET_DATA,
                data
            })
            dispatch(Loading(false))


        })


}