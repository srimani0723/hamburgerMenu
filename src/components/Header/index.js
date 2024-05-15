import {Link} from 'react-router-dom'

import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="header-logo"
      />
    </Link>

    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="header-icon-btn"
          >
            <GiHamburgerMenu className="header-icon" aria-label="close" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="btn">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose aria-label="close" className="trigger-button-logo" />
              </button>
            </div>

            <div className="pop-content">
              <ul className="pop-btns">
                <li className="li">
                  <Link to="/" className="li-box" onClick={() => close()}>
                    <AiFillHome className="logo" />
                    Home
                  </Link>
                </li>

                <li className="li">
                  <Link to="/about" className="li-box" onClick={() => close()}>
                    <BsInfoCircleFill className="logo" />
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
