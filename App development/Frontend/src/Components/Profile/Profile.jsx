// // src/Components/Profile/Profile.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { isAuthenticated } = useAuth(); // Get auth state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
  });
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const storedProfile = localStorage.getItem('profileData');
      if (storedProfile) {
        setFormData(JSON.parse(storedProfile));
        setProfileUpdated(true);
      }
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    localStorage.setItem('profileData', JSON.stringify(formData));
    setProfileUpdated(true);
    setIsSubmitted(true);
  };

  if (!isAuthenticated) {
    return <div>You need to be logged in to view this page.</div>;
  }

  return (
    <div className="profile-page">
      {profileUpdated ? (
        <div className="profile-details">
          <h1>PROFILE</h1>
          <div className="profile-iconn">👤</div>
          <div className="profile-info">
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
          </div>
        </div>
      ) : (
        <div className="profile-container">
          <h1>User Profile</h1>
          {isSubmitted && <div className="success-message">Profile updated successfully!</div>}
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;

// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../Context/AuthContext';
// import './Profile.css';

// const Profile = () => {
//   const { isAuthenticated, user } = useAuth();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     gender: '',
//   });
//   const [profileUpdated, setProfileUpdated] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated && user) {
//       try {
//         const storedProfile = localStorage.getItem(`profileData_${user.id}`);
//         if (storedProfile) {
//           setFormData(JSON.parse(storedProfile));
//           setProfileUpdated(true);
//         } else {
//           setProfileUpdated(false);
//         }
//       } catch (error) {
//         console.error('Error retrieving profile data from localStorage:', error);
//       }
//     }
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user) {
//       try {
//         localStorage.setItem(`profileData_${user.id}`, JSON.stringify(formData));
//         setProfileUpdated(true);
//         setEditMode(false);
//       } catch (error) {
//         console.error('Error saving profile data to localStorage:', error);
//       }
//     }
//   };

//   if (!isAuthenticated) {
//     return <div>You need to be logged in to view this page.</div>;
//   }

//   if (!user) {
//     return <div>Loading user profile...</div>;
//   }

//   return (
//     <div className="profile-page">
//       <div className="profile-header">
//         <div className="profile-header-left">
//           <div className="profile-picture">
//             <img src="Books/profile-icon-design-free-vector.jpg" alt="Profile" />
//             <button
//               className="edit-profile-btn"
//               onClick={() => setEditMode(!editMode)}
//             >
//               {editMode ? 'Cancel' : 'Edit Profile'}
//             </button>
//           </div>
//         </div>
//         <div className="profile-header-right">
//           <h1>{user.username}</h1>
//           {profileUpdated && !editMode ? (
//             <div className="profile-info">
//               <p><strong>First Name:</strong> {formData.firstName}</p>
//               <p><strong>Last Name:</strong> {formData.lastName}</p>
//               <p><strong>Phone:</strong> {formData.phone}</p>
//               <p><strong>Email:</strong> {formData.email}</p>
//               <p><strong>Gender:</strong> {formData.gender}</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="profile-form">
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="gender">Gender:</label>
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <button type="submit" className="submit-button">Save</button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;