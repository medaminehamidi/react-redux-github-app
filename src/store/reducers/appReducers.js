import * as store from '../../constants'

const initialState = {
    loading: false,
    keyWord: "",
    card: []
}

export default (state = initialState, action) => {
    const { type, data } = action
    console.log(data)
    switch (type) {
        case store.HANDLE_INPUT_CHANGE:
            return {
                ...state,
                keyWord: data
            }
        case store.GET_DATA:

            return {
                ...state,
                card: [...state.card, { ...state.card, ...data }]
            }
        case store.LOADING:
            return {
                ...state,
                loading: data
            }
        default:
            return state
    }
}