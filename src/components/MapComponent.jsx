import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./MapComponent.css";

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng] = useState(13.3888); // Default longitude for Berlin
  const [lat] = useState(52.517); // Default latitude for Berlin
  const [zoom] = useState(4); // Zoom level to encompass all cities
  const [API_KEY] = useState(import.meta.env.VITE_TILES_API_KEY); // Your API key

  const cities = [
    {
      id: 1,
      name: "Barcelona",
      lng: 2.1774,
      lat: 41.3828,
      title: "Exploring Barcelona",
      date: "2024-04-01",
      authorName: "Janny Doe",
      authorImage: "/portra.jpg",
    },
    {
      id: 2,
      name: "Copenhagen",
      lng: 12.57,
      lat: 55.6867,
      title: "Copenhagen in a Day",
      date: "2024-05-08",
      authorName: "Jane Smith",
      authorImage: "/blonde.jpg",
    },
    {
      id: 3,
      name: "Berlin",
      lng: 13.3888,
      lat: 52.517,
      title: "Berlin's Best Spots",
      date: "2024-03-02",
      authorName: "Christian Schwartz",
      authorImage: "/mann.jpg",
    },
    {
      id: 4,
      name: "Paris",
      lng: 2.3483,
      lat: 48.8534,
      title: "Paris: A Love Story",
      date: "2024-06-09",
      authorName: "Bob Brown",
      authorImage: "/john.jpg",
    },
    {
      id: 5,
      name: "Rome",
      lng: 12.4829,
      lat: 41.8933,
      title: "Rome's Ancient Wonders",
      date: "2024-01-01",
      authorName: "Charlie Davis",
      authorImage: "/retro.jpg",
    },
    {
      id: 6,
      name: "Vienna",
      lng: 16.3725,
      lat: 48.2083,
      title: "Vienna: A Cultural Journey",
      date: "2024-02-05",
      authorName: "Eve White",
      authorImage: "/deagreez.jpg",
    },
  ];

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    cities.forEach((city) => {
      const popupContent = `
       <div class="info-window">
         <button class="close-btn" onclick="this.parentElement.style.display='none'">&times;</button>
         <h2>${city.title}</h2>
         <p>Visiting Date: ${city.date}</p>
         <div class="author">
           <img src="${city.authorImage}" alt="${city.authorName}" class="author-image"/>
           <p>${city.authorName}</p>
         </div>
         <a href="/post/${city.id}" class="detail-link">Read More</a>
       </div>
     `;

      const popup = new maplibregl.Popup({ closeOnClick: true }).setHTML(
        popupContent
      );

      new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([city.lng, city.lat])
        .setPopup(popup) // sets the popup on the marker
        .addTo(map.current);
    });
  }, [API_KEY, lng, lat, zoom, cities]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
