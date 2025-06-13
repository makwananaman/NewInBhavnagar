'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

interface Business {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
}

export default function BusinessMap({ businesses }: { businesses: Business[] }) {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={[21.7645, 72.1519]} // Bhavnagar coordinates
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }} // ✅ use `style` instead of `className`
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {businesses.map((business) => (
          <Marker key={business.id} position={business.coordinates}>
            <Popup>{business.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
