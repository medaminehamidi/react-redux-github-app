import React from 'react'
import { connect } from 'react-redux'
import HomeUI from '.'
import { HandleInputChange, GetData } from '../../store/actions/appActions'

const Home = ({loading, getData,card, handleInputChange, keyWord }) => {
    return (<div>
        <HomeUI
            handleInputChange={(e) => handleInputChange(e.target.value)}
            handleSubmit={() => { getData(keyWord) }}
            keyWord={keyWord}
            card={card}
            loading={loading}
        />
    </div>)
}

const mapStateToProps = (state) => ({
    keyWord: state.appReducers.keyWord,
    card: state.appReducers.card,
    loading: state.appReducers.loading
})
const mapDispatchToProps = (dispatch) => ({
    handleInputChange: (value) => dispatch(HandleInputChange(value)),
    getData: (value) => dispatch(GetData(value))
})
export default connect(mapStateToProps,
    mapDispatchToProps
)(Home)