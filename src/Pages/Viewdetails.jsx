import React from 'react'
import Mycontainer from '../components/Mycontainer'
import { useParams } from 'react-router';
import useData from '../hooks/useData';

const Viewdetails = () => {
    const {skillId}=useParams()
    const {skill,loading}=useData()
    const skilled=!loading? skill.find(p=>p.skillId==Number(skillId)):null;
     const { skillName, price, rating, image,description,slotsAvailable,providerEmail,providerName,category } = skilled || {}; 
  return (
    <div>
        <Mycontainer>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-11">
  <figure><img className='w-96 h-96 rounded-xl p-4' src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl">{skillName}</h2>
    <h1 className='text-yellow-500 text-2xl'>Rating-{rating}</h1>
    <h1 className='text-sky-600 font-bold text-2xl'>Price-${price}</h1>
    <p className='text-gray-600 font-semibold text-lg'>
      {description}
    </p>
    <p className='text-gray-600 font-semibold text-lg'>Category: {category}</p>
    <p className='text-gray-600 font-semibold text-lg'>Slots Available: {slotsAvailable}</p>
    <p className='text-gray-600 font-semibold text-lg'>Provider Name: {providerName}</p>
    <p className='text-gray-600 font-semibold text-lg'>Provider Email: {providerEmail}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
          
        </Mycontainer>
    </div>
  )
}

export default Viewdetails