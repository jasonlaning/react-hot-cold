import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header(props) {
  
        let infoModal;
        if (props.showInfoModal) {
            infoModal = <InfoModal onClose={props.toggleInfoModal} />;
        }

        return (
            <header>
                <TopNav onInfo={props.toggleInfoModal}
                    onNewGame={props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
};

const mapStatetoProps = state => ({
    showInfoModal: state.showInfoModal
});

export default connect(mapStatetoProps)(Header);