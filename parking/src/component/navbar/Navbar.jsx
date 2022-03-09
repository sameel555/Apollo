import React from 'react'
import { useState } from 'react'
import SlotBooking from '../slot/SlotBooking'
import styles from './navbar.module.css'
import car from './carparking.jpg'
function Navbar() {
  const [selectPlace, setSelectPlace] = useState('')
  const handleSelect = (e) => {
    setSelectPlace(e.target.value)
  }
  console.log('The selectPlace selected', selectPlace)

  return (
    <div>
      <div className={styles.navbarMain}>
        <div className={styles.head}>Parking Lots Booking</div>
        <div className={styles.selectMain}>
          <select onChange={handleSelect}>
            <option value="">Select Place</option>
            <option value="Forex">Forex Mall</option>
            <option value="Obron">Obron Mall</option>
            <option value="Apollo">Apollo Hospital</option>
            <option value="Paragon">Paragon Restaurant</option>
          </select>
        </div>
      </div>
      <div className={styles.backImage}>
        <img src={car} alt="" />
        <SlotBooking />
      </div>
    </div>
  )
}

export default Navbar
