import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const loaderData = useLoaderData();
  const [userData, setUserData] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/MohsinAli-2000') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., set an error state or display an error message
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {userData.followers}
      <img
        src={userData.avatar_url}
        alt="Git picture"
        width={300}
        onError={(e) => {
          e.target.src = 'fallback-image-url'; // Replace with a fallback image URL
        }}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/MohsinAli-2000"); // Use the GitHub API endpoint
  return response.json();
};
