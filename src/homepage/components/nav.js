import React from 'react'
import Logo from '../../assets/img/ExciteLogo.png'

export default function Nav() {
    return (
        <header>
            <div>                
                <ul className="nav-content">
                    <div className="nav-left">
                        <li className="nav-list-logo">
                        <img
                              className="logo"
                              src={Logo} /> 
                        </li>
                        <li className="nav-list">
                            <span className="nav-item">News</span>
                        </li>
                        <li className="nav-list">
                            <span className="nav-item">Contact</span>
                        </li>
                    </div>
                    <div className="nav-right">        
                        <li className="nav-list" >
                            <span className="nav-item"className="nav-item">Sell on excite</span>
                        </li>        
                        <li className="nav-list" >
                            <span className="nav-item">Login</span>
                        </li>
                        <li className="nav-list-button">
                            <button className="nav-button">
                                Get started on Excite
                            </button>
                        </li>
                    </div>
                </ul>
            </div>

        </header>
    )
}
