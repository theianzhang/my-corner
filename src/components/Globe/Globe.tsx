import dynamic from 'next/dynamic'

const Globe3D = dynamic(() => import('./Globe.client'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      width: '100vw', 
      height: '50vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: '#1A1A1A'
    }}>
      Loading Globe...
    </div>
  )
})

export default Globe3D 