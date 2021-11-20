import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import { useStoreContext } from '../../utils/GlobalState';
import homePng from './images/home.png';
import createPostPng from './images/add.png';
import announcementPng from './images/bell.png';
import settingsPng from './images/settings.png';
import Auth from '../../utils/auth';

const Footer = () => {
    const [state,] = useStoreContext();
    console.log(state);

    return (
        <>{state.loggedIn &&
            <div className='mainMenu'>
                <Link className='mainMenuBtnCase' to='/message-board'>
                    <div className='mainMenuBtn messageBoardBtn'>
                        <img className='mainMenuBtnPng' src={homePng} alt="team message board" />
                    </div>
                </Link>

                <Link className='mainMenuBtnCase' to='/new-post'>
                    <div className='mainMenuBtn'>
                        <img className='mainMenuBtnPng' src={createPostPng} alt="private messages" />
                    </div>
                </Link>

                <Link className='mainMenuBtnCase' to='/announcements'>
                    <div className='mainMenuBtn announcementsBtn'>
                        <img className='mainMenuBtnPng' src={announcementPng} alt="announcements" />
                    </div>
                </Link>

                <Link className='mainMenuBtnCase' to='/settings'>
                    <div className='mainMenuBtn settingsBtn'>
                        <img className='mainMenuBtnPng' src={settingsPng} alt="settings" />
                    </div>
                </Link>
            </div>}
        </>
    )
}


export default Footer;