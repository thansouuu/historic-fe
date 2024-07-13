import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 200px)' 
};

const Map = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [customIcon, setCustomIcon] = useState(null);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/locations/${selectedCountry}`);
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const onLoad = () => {
    setCustomIcon({
      url: '/images/pin.png',
      scaledSize: new window.google.maps.Size(25, 41),
      anchor: new window.google.maps.Point(12, 41)
    });
  };

  const handleFindPath = () => {
    if (selectedLocation) {
      const destination = `${selectedLocation.latitude},${selectedLocation.longitude}`;
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="flex justify-center items-center space-x-2 py-4">
        <select
          className="bg-blue-500 text-white px-4 py-2 rounded"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="" disabled>Select a country</option>
          <option value="vietnam">Vietnam</option>
          <option value="thailand">Thailand</option>
          <option value="cambodia">Cambodia</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search 
        </button>
      </div>
      <div className="flex-1 relative">
        <LoadScript googleMapsApiKey="" onLoad={onLoad}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: 10.030, lng: 105.770 }}
            zoom={5}
          >
            {locations.map((location) => (
              <Marker
                key={location._id}
                position={{ lat: location.latitude, lng: location.longitude }}
                icon={customIcon}
                onClick={() => handleMarkerClick(location)}
              />
            ))}
            {selectedLocation && (
              <InfoWindow
                position={{ lat: selectedLocation.latitude, lng: selectedLocation.longitude }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div>
                  <h2>{selectedLocation.name}</h2>
                  <p>{selectedLocation.presentationUrl}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
        <div
          className={`absolute bottom-0 left-0 w-full bg-black text-white p-4 border-t border-gray-200 transition-opacity duration-500 ease-in-out ${
            selectedLocation ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {selectedLocation && (
            <>
              <h2 className="text-xl font-bold">{selectedLocation.name}</h2>
              <p>{selectedLocation.country}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="bg-white text-black px-4 py-2 rounded"
                  onClick={handleFindPath}
                >
                  Find Path
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Thuyết minh</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">3D - VR Tour</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
