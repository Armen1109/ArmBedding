import React from 'react'
import './css/about.css'


function AboutUs() {
  return (


    <div className='cont'>
        <p className='head'>Մեր Տվյալները</p>

        <div className='text'>
          <ul className='information'>
            <li><img className='icon' src={process.env.PUBLIC_URL + '/clock-regular.svg'}/><p className='a-info'>Մեր աշխատանքային գրաֆիկը: ամեն օր ժամը 10:00-ից մինչև 20:00</p></li>
            <li><img className='icon' src={process.env.PUBLIC_URL + '/phone-solid.svg'}/><p className='a-info'>Հեռախոս: <a className='link' href="tel:+37477517145">+37477517145 </a></p></li>
            <li><img className='icon' src={process.env.PUBLIC_URL + '/phone-solid.svg'}/><p className='a-info'>Հեռախոս: <a className='link' href="tel:+37477262848">+37477262848 </a></p></li>
            <li><img className='icon' src={process.env.PUBLIC_URL + '/envelope-regular.svg'}/><p className='a-info'>Email:  arm.bedding@mail.ru </p></li>
            <li><img className='icon' src={process.env.PUBLIC_URL + '/facebook.svg'}/><p className='a-info'> Facebook: <a className='link' target='_blank' href="
https://www.facebook.com/profile.php?id=100086952025939">Անկողնային Պարագաներ</a> </p></li>
          </ul>
        </div>
    </div>
  )
}

export default AboutUs