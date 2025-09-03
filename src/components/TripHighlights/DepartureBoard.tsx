'use client';
import React, { useState, useEffect } from 'react';
import { epicJourneys } from '@/data/highlightsStructure';
import styles from './DepartureBoard.module.css';
import { FlapDisplay, Presets } from 'react-split-flap-effect';
import 'react-split-flap-effect/extras/themes.css';

const DepartureBoard = () => {
  // Show 5 trips initially, keep SE Asia for rotation
  const initialTrips = epicJourneys.filter(trip => trip.id !== 'southeast-asia-backpacking-2015').slice(0, 5);
  const [displayTrips, setDisplayTrips] = useState(initialTrips);

  useEffect(() => {
    if (epicJourneys.length <= displayTrips.length) return;

    const interval = setInterval(() => {
      const displayedIds = new Set(displayTrips.map(t => t.id));
      const availableTrips = epicJourneys.filter(t => !displayedIds.has(t.id));
      if (availableTrips.length === 0) return;

      const rowIndexToUpdate = Math.floor(Math.random() * displayTrips.length);
      const newTrip = availableTrips[Math.floor(Math.random() * availableTrips.length)];

      setDisplayTrips(currentTrips =>
        currentTrips.map((trip, index) =>
          index === rowIndexToUpdate ? newTrip : trip
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [displayTrips]);

  const getTitle = (trip: (typeof epicJourneys)[0]) => {
    return trip.shortTitle || trip.title;
  };

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardScroller}>
        <div className={`${styles.departureBoard} darkBordered`}>
          <div className={styles.boardHeader}>
            <div>Destination</div>
            <div>Year</div>
            <div>Duration</div>
          </div>
          <div className={styles.boardBody}>
            {displayTrips.map((trip) => {
              const title = getTitle(trip);
              const titleParts = title.split(' ');

              return (
                <div 
                  key={trip.id} 
                  className={styles.boardRow}
                  onClick={() => window.open(`/trip/${trip.id}`, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`${styles.destinationCell} L`}>
                    {titleParts.map((part, index) => (
                      <React.Fragment key={index}>
                        <FlapDisplay
                          chars={Presets.ALPHANUM + ' ,.'}
                          length={part.length}
                          value={part.toUpperCase()}
                        />
                        {index < titleParts.length - 1 && (
                          <div className={styles.wordSpacer} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="L">{trip.year}</div>
                  <div className="L">{trip.duration} DAYS</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartureBoard; 