// src/components/Map.jsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // Prevent re-initialization

    // Create a new map instance
    const map = L.map('map', {
      center: [40.7128, -74.0060], // Replace with your office's latitude and longitude
      zoom: 13, // Adjust zoom level as needed
    });

    // Add a tile layer
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);

    // Add a marker
    // L.marker([40.7128, -74.0060]).addTo(map) // Replace with your office's latitude and longitude
    //   .bindPopup('Our Office')
    //   .openPopup();

    // Save the map instance in the ref
    mapRef.current = map;

  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      id="map"
    //   style={{ height: '500px', width: '50%' }} // Adjust size as needed
      className='max-w-44 max-h-44'
    ></div>
  );
};

export default Map;
