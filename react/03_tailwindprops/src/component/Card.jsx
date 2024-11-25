import React from 'react'
// React props -: to send data from one component to another.
function Card({username,btnText="click me"}) {
  
    const img = "https://images.pexels.com/photos/12918397/pexels-photo-12918397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="bg-black max-w-sm rounded overflow-hidden shadow-lg m-2 float-left">
    <img className="w-full h-80" src={img} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="text-white font-bold text-xl mb-2">{username}</div>
      <p className="text-white text-base"></p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{btnText}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
  )
}

export default Card