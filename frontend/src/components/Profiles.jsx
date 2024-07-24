import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from  "./axios";
const Profiles= () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getProfiles', {
          params: {
            agefrom: 18,
            ageto: 25,
            gender: 'Male',
            religion: 'Islam'
          }
        });
        
        if (response.data === 'No profiles found matching the criteria') {
          setProfiles([]);
          setError(response.data);
        } else {
          setProfiles(response.data);
          setError('');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching profiles.');
      }
    };

    fetchProfiles();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="showData-container">
        <h3 className="heading-container">Matched Profiles</h3>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <div key={profile._id} className="profile-card">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Father's Name:</strong> {profile.fatherName}</p>
              <p><strong>Age:</strong> {profile.age}</p>
              <p><strong>City:</strong> {profile.city}</p>
              <p><strong>Siblings:</strong> {profile.sibling}</p>
              <p><strong>Phone Number:</strong> {profile.phoneNo}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>Religion:</strong> {profile.religion}</p>
              <p><strong>Cast:</strong> {profile.cast}</p>
            </div>
          ))
        ) : (
          <p>No profiles found matching the criteria.</p>
        )}
      </div>
    </>
  );
};

export default Profiles;
