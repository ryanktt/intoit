import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import style from './Navigation.module.scss';
import Toolbar from './Toolbar/Toolbar';
import {logout} from '../../redux/actions/auth';

const Navigation = (props) => {
    const {isAuth, logout} = props;
    return (
        <div className={style.Navigation}>
            <Toolbar isAuthenticated={isAuth} {...props} logout={logout}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));
