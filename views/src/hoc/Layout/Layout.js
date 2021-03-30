import React from 'react';
import {connect} from 'react-redux';
import style from './Layout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/UI/Loading/Loading';

const Layout = (props) => {
    const {isLoading} = props;
    let loading = null
    if(isLoading) {
        loading = <Loading/>
    }
    return (
        <div className={style.Layout}>
            {loading}
            <Navigation/>
            {props.children}
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.loading
    }
}

export default connect(mapStateToProps)(Layout);
