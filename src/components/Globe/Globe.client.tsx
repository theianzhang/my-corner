'use client'

import React, { useEffect, useState } from 'react'
import ThreeGlobe from 'three-globe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { travelLocations } from '@/data/travelLocations'
import * as THREE from 'three'

const GEOJSON_URL = '/globe.geojson'

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

type GlobeInstance = ThreeGlobe & {
  globeMaterial: () => THREE.Material;
}

interface Globe3DProps {
  onReady?: () => void;
}

export default function Globe3D({ onReady }: Globe3DProps) {
  const [geoData, setGeoData] = useState<GeoJSONData[]>([])
  const globeRef = React.useRef<GlobeInstance | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  console.log('[Globe] Component rendering')

  // Fetch country data once on mount
  useEffect(() => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    fetch(GEOJSON_URL, { signal: controller.signal })
      .then(res => {
        clearTimeout(timeoutId)
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then(data => {
        // Normalize GEOJSON sovereignt names so they can match our travelLocations names
        const nameAliases: Record<string, string> = {
          'United States of America': 'United States',
          'United Republic of Tanzania': 'Tanzania',
          'Czechia': 'Czech Republic',
          'Korea, Republic of': 'South Korea',
          'Russian Federation': 'Russia',
          'Viet Nam': 'Vietnam',
          'United Kingdom': 'United Kingdom',
          'Holy See': 'Vatican City',
          'Lao PDR': 'Laos',
          'Bosnia and Herz.': 'Bosnia and Herzegovina',
          "Côte d'Ivoire": 'Ivory Coast',
          "Cote d'Ivoire": 'Ivory Coast',
          'Bolivia (Plurinational State of)': 'Bolivia',
          'Venezuela (Bolivarian Republic of)': 'Venezuela',
          'Iran (Islamic Republic of)': 'Iran',
          'Syrian Arab Republic': 'Syria',
          'Kyrgyz Republic': 'Kyrgyzstan',
          'Dem. Rep. Congo': 'Democratic Republic of the Congo',
          'Congo': 'Republic of the Congo',
          'Cabo Verde': 'Cape Verde',
          'Eswatini': 'Swaziland',
          // Legacy/alternative names
          'Macedonia': 'North Macedonia',
          'FYR Macedonia': 'North Macedonia',
          'Republic of Serbia': 'Serbia',
        }

        const normalize = (name: string): string => nameAliases[name] ?? name

        const allCountries = data.features.map((feature: GeoJSONFeature) => {
          const sovereign = normalize(feature.properties.sovereignt)
          const isVisited = travelLocations.some(loc => loc.name === sovereign)
          return { ...feature, properties: { ...feature.properties, sovereignt: sovereign }, isVisited }
        })
        setGeoData(allCountries)
      })
      .catch(err => {
        clearTimeout(timeoutId)
        // Ignore abort errors - these are expected when the component unmounts
        if (err.name === 'AbortError') return
        console.error('Failed to load globe data:', err)
        setError('Failed to load globe data')
      })

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [])

  // Initialize globe only after data is ready
  useEffect(() => {
    if (geoData.length === 0 || globeRef.current) return

    if (geoData.length === 0 || globeRef.current) return

    try {
      const globeInstance = (new ThreeGlobe() as GlobeInstance)
        .globeImageUrl('/earth-day.jpg')
        .polygonAltitude(0.01)
        .polygonCapColor((d: object) => {
          const data = d as GeoJSONData;
          // Don't render polygons for Antarctica
          if (data.properties.sovereignt === 'Antarctica') return 'transparent';
          return data.isVisited ? 'transparent' : '#666666';
        })
        .polygonSideColor((d: object) => {
          const data = d as GeoJSONData;
          if (data.properties.sovereignt === 'Antarctica') return 'transparent';
          return data.isVisited ? 'transparent' : '#666666';
        })
        .polygonsData(geoData);

      const material = globeInstance.globeMaterial() as THREE.MeshPhongMaterial;
      material.color = new THREE.Color('#1A1A1A');

      globeRef.current = globeInstance
      setIsReady(true)
    } catch (err) {
      console.error('[Globe] Error initializing ThreeGlobe:', err)
      setError('Failed to initialize globe visualization')
    }
  }, [geoData])

  if (error) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ff4444' }}>
        {error}
      </div>
    )
  }

  if (!isReady || !globeRef.current) return null

  return (
    <Canvas
      onCreated={() => onReady?.()}
      camera={{
        position: [2000, 1200, 0],
        fov: 60 // Slightly tighter field of view for better fit
      }}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%' // Ensure canvas is circular
      }}
    >
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <primitive object={globeRef.current} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={-0.25}
        minDistance={120} // Slightly closer min distance
        maxDistance={300} // Allow zooming out more
        // Prevent scroll conflicts
        enableDamping={true}
        dampingFactor={0.05}
        // Limit vertical rotation to prevent weird angles
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
      />
    </Canvas>
  )
} 