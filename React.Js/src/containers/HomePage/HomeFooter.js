import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    render() {
        return (
            <div className='home-footer'>
                <p>  &#8594; &copy; 2022 NgUyEnViEtAnH. Contact me here.&#8592; </p>
                <div className="socials-list">
                    <a target='_blank' href="https://www.facebook.com/nguyen.vietanh020600"><i className="fab fa-facebook" /></a>
                    <a target='_blank' href=''><i className="fab fa-instagram" /></a>
                    <a target='_blank' href=''><i className="fab fa-pinterest" /></a>
                    <a target='_blank' href=''><i className="fab fa-twitter" /></a>
                    <a target='_blank' href=''><i className="fab fa-linkedin" /></a>
                    <a target='_blank' href='https://www.youtube.com/channel/UCHTZCV7oZ6fCnwaxCx-5ZNw'><i className="fab fa-youtube" /></a>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
