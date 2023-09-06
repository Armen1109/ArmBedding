import React from 'react'
import './css/about.css'

function About() {
  return (
    <div className='cont'>
      <p className='head'>Առաքում</p>
      <div className="text">
        <p className='a-info'>
          Երևան քաղաքում առաքումն անվճար է:
          Առաքումն իրացվում է պատվերի հաստատումից հետո 2-5 օրվա  ընթացքում 
        </p>
          <p className='a-info'>
          Սիրելի պատվիրատուներ, ուրախ ենք տեղեկացնել, որ առաքում գործում է նաև մարզեր՝ հայփոստի միջոցով։
          </p>
          <p className='a-info'>
            Պատվերներ կարող եք կատարել զանգի միջոցով։ հեռ։ +37477517145, +37477262848
          </p>
      </div>
    </div>
  )
}

export default About