import React from 'react';
import Interests from './Interests';
import { useTheme } from '../context/user';

function Profile() {
  const { theme } = useTheme();

  return (
    <div>
      <h2>User's Profile</h2>
      <Interests theme={theme} />
    </div>
  );
}

export default Profile;
