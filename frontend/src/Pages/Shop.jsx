import React, { useContext } from 'react'
import { PhoneContext } from '../Context/PhoneContext'
import { useParams } from 'react-router-dom'
import PhoneDetails from '../Components/PhoneDetails/PhoneDetails'

const Shop = () => {
    const {iPhones} = useContext(PhoneContext)
    const {model_name} = useParams()
    const phones = iPhones.find((e)=> e.model_name===decodeURIComponent(model_name))
  return (
    <div>
      <PhoneDetails phones={phones}/>
    </div>
  )
}

export default Shop
