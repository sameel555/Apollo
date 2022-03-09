import React from 'react'
import styles from '../navbar/navbar.module.css'
function SlotBooking() {
  return (
    <div className={styles.bookingInput}>
      <form>
        <input type="text" placeholder="Enter vehicle number" />
        <input type="number" placeholder="Enter your phone Number" />
        <select>
          <option value="">Select type of vehicle</option>
          <option value="2_wheeler">Two-wheeler</option>
          <option value="Hatchback_Car">Hatchback Car</option>
          <option value="SUV_Car">SUV Car</option>
        </select>
        <select>
          <option value="">Select Duration</option>
          <option value="2">0-2 hours</option>
          <option value="4">2-4 hours</option>
          <option value="6">4-6 hours</option>
          <option value="12">6-12 hours</option>
        </select>
      </form>
    </div>
  )
}

export default SlotBooking
