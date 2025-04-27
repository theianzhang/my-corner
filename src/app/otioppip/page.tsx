export default function OtioppipPage() {
  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h1>Otioppip</h1>
      <h3>Short Film (2025)</h3>
      <p>A story about [insert your logline or summary here].</p>
      <div style={{ margin: '2rem 0' }}>
        {/* Replace the src URL with your private YouTube link */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8, marginBottom: 24 }}>
          <iframe
            src="https://www.youtube.com/embed/[YOUR_PRIVATE_VIDEO_ID]"
            title="Otioppip Private Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <h4>About the Film</h4>
      <p>[Write your director's statement, behind-the-scenes, or any info about Otioppip here.]</p>
    </main>
  );
} 