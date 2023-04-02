import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [preference, setPreference] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Save preferences using API call here
  };

  return (
    <div className="settings">
      <h2>Settings and Preferences</h2>
      <form className="settings-form" onSubmit={handleSave}>
        <label htmlFor="preference">News Category Preference</label>
        <select
          id="preference"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default Settings;
