'use client'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface Business {
  id: string
  name: string
  coordinates: [number, number] // [latitude, longitude]
}

export default function BusinessMap({ businesses }: { businesses: Business[] }) {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={[21.7645, 72.1519]} // Bhavnagar coordinates
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {businesses.map(business => (
          <Marker key={business.id} position={business.coordinates}>
            <Popup>{business.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
} 