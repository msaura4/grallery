import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [artworks, setArtworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  useEffect(() => {
    fetchArtworks()
  }, [])

  const fetchArtworks = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:3001/api/random-artworks')
      if (!response.ok) {
        throw new Error('Failed to fetch artworks')
      }
      const data = await response.json()
      setArtworks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (artwork) => {
    setSelectedArtwork(artwork)
  }

  const closeModal = () => {
    setSelectedArtwork(null)
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading beautiful artworks...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchArtworks} className="retry-btn">
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎨 Grallery</h1>
        <p>Discover amazing artworks from The Metropolitan Museum of Art</p>
        <button onClick={fetchArtworks} className="refresh-btn">
          🔄 New Collection
        </button>
      </header>

      <main className="gallery">
        {artworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="artwork-card"
            onClick={() => openModal(artwork)}
          >
            <div className="artwork-image-container">
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="artwork-image"
                loading="lazy"
              />
              <div className="artwork-overlay">
                <span className="view-details">View Details</span>
              </div>
            </div>
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              {artwork.artist && (
                <p className="artwork-artist">by {artwork.artist}</p>
              )}
              {artwork.year && (
                <p className="artwork-year">{artwork.year}</p>
              )}
            </div>
          </div>
        ))}
      </main>

      {selectedArtwork && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-content">
              <img 
                src={selectedArtwork.image} 
                alt={selectedArtwork.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h2>{selectedArtwork.title}</h2>
                {selectedArtwork.artist && (
                  <p className="modal-artist">by {selectedArtwork.artist}</p>
                )}
                {selectedArtwork.year && (
                  <p className="modal-year">{selectedArtwork.year}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
