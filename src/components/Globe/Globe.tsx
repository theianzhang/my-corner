'use client'

import React, { useEffect, useState } from 'react'
import ThreeGlobe from 'three-globe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { travelLocations } from '@/data/travelLocations'
import styles from '@/styles/components/Globe.module.css'

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

function Globe3D() {
  const [geoData, setGeoData] = useState<GeoJSONFeature[]>([])

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then(res => res.json())
      .then(data => {
        const allCountries = data.features.map((feature: any) => ({
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

  const globe = new ThreeGlobe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .polygonsData(geoData)
    .polygonAltitude(0.01)
    .polygonCapColor((d: any) => d.isVisited ? 'transparent' : '#666666')
    .polygonSideColor((d: any) => d.isVisited ? 'transparent' : '#666666')

  if (globe.polygonMaterial) {
    globe.polygonMaterial.opacity = d => d.isVisited ? 0 : 1
    globe.polygonMaterial.transparent = true
  }

  if (globe.polygonSideMaterial) {
    globe.polygonSideMaterial.opacity = 0.3
    globe.polygonSideMaterial.transparent = true
  }

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
      />
    </Canvas>
  )
}

export default function Globe() {
  return (
    <div className={styles.globeContainer}>
      <Globe3D />
    </div>
  )
} 