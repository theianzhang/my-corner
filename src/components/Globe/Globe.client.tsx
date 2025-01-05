'use client'

import React, { useEffect, useState } from 'react'
import ThreeGlobe from 'three-globe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { travelLocations } from '@/data/travelLocations'
import * as THREE from 'three'

const GEOJSON_URL = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson'

interface GeoJSONFeature {
  type: string;
  properties: {
    sovereignt: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

interface GeoJSONData extends GeoJSONFeature {
  isVisited: boolean;
}

export default function Globe3D() {
  const [geoData, setGeoData] = useState<GeoJSONData[]>([])
  const [globe, setGlobe] = useState<any>(null)

  // Initialize globe
  useEffect(() => {
    const globeInstance = new ThreeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .polygonAltitude(0.01)
      .polygonCapColor((d: any) => (d as GeoJSONData).isVisited ? 'transparent' : '#666666')
      .polygonSideColor((d: any) => (d as GeoJSONData).isVisited ? 'transparent' : '#666666')

    const globeMaterial = (globeInstance as any).globeMaterial() as THREE.MeshPhongMaterial
    if (globeMaterial) {
      globeMaterial.color = new THREE.Color('#1A1A1A')
    }

    setGlobe(globeInstance)

    // Fetch country data
    fetch(GEOJSON_URL)
      .then(res => res.json())
      .then(data => {
        const allCountries = data.features.map((feature: GeoJSONFeature) => ({
          ...feature,
          isVisited: travelLocations.some(loc => 
            loc.name === feature.properties.sovereignt ||
            (feature.properties.sovereignt === "United States of America" && loc.name === "United States") ||
            (feature.properties.sovereignt === "United Republic of Tanzania" && loc.name === "Tanzania")
          )
        }))
        setGeoData(allCountries)
      })
  }, [])

  // Update globe when data changes
  useEffect(() => {
    if (globe && geoData.length > 0) {
      globe.polygonsData(geoData)
    }
  }, [globe, geoData])

  if (!globe) return null

  return (
    <Canvas camera={{ position: [0, 0, 200], fov: 90 }}>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <primitive object={globe} />
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={-0.25}
        minDistance={150}
        maxDistance={250}
      />
    </Canvas>
  )
} 