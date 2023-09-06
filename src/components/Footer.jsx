import React from 'react'
import './css/footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>

            <div className="menu">

                <p>Մենյու</p>
                <ul className='footer-menu'>
                    <li><NavLink to={'/'}>Գլխավոր էջ</NavLink></li>
                    <li><NavLink to={'/Products'}>Տեսականի</NavLink></li>
                    <li><NavLink to={'/feedback'}>Հետադարձ կապ</NavLink></li>
                    <li><NavLink to={'/delivery'}>Առաքում</NavLink></li>
                </ul>
            </div>

            <div className="feedback">
                <p>Հետադարձ կապ</p>
                <ul>
                    <li><img className='ficon' src={process.env.PUBLIC_URL + '/phone-solid.svg'} />Հեռախոս: <a className='link' href="tel:+37477517145">+37477517145 </a></li>
                    <li><img className='ficon' src={process.env.PUBLIC_URL + '/phone-solid.svg'} />Հեռախոս: <a className='link' href="tel:+37477262848">+37477262848 </a></li>
                    <li><img className='ficon' src={process.env.PUBLIC_URL + '/envelope-regular.svg'} />Email:  arm.bedding@mail.ru </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer