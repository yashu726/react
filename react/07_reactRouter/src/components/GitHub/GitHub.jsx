import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data = useLoaderData();
     // I method
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/yashu726")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       });
//   }, []);
  return (
    <>
      <h1 className="text-center mt-4 bg-gray-600 text-white p-2 text-2xl">
       Github Profile
      </h1>

    <div className="py-10 bg-white">
    
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:1/6 lg:w-1/6">
            <img src={data.avatar_url} alt="image" />
          </div>
          <div className="md:10/6 lg:w-10/">
          <h2  className="text-2xl text-gray-900 font-bold md:text-3xl">
          GitHub Followers : {data.followers}
          </h2>
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
              {data.name}
            </h2>
            <h3 className="mt-4 text-gray-600 md:text-2xl">
            {data.bio}
            </h3>
            <h3 className="mt-4 text-gray-600 md:text-2xl">
            {data.location}
            </h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default GitHub;
//  II Method
export const githubinfoloader = async ()=>{
    const res = await fetch ("https://api.github.com/users/yashu726");
    return res.json();
}

