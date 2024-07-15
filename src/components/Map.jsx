import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(13.3888); // Default longitude for Berlin
  const [lat] = useState(52.517); // Default latitude for Berlin
  const [zoom] = useState(4); // Zoom level to encompass all cities
  const [API_KEY] = useState("XLaDGrxR8YKvAfCO234c"); // Your API key

  const cities = [
    {
      id: 1,
      name: "Barcelona",
      lng: 2.1774,
      lat: 41.3828,
      title: "Exploring Barcelona",
      date: "2023-07-01",
      authorName: "Janny Doe",
      authorImage: "public/portra.jpg",
    },
    {
      id: 2,
      name: "Copenhagen",
      lng: 12.57,
      lat: 55.6867,
      title: "Copenhagen in a Day",
      date: "2023-07-10",
      authorName: "Jane Smith",
      authorImage: "public/blonde.jpg",
    },
    {
      id: 3,
      name: "Berlin",
      lng: 13.3888,
      lat: 52.517,
      title: "Berlin's Best Spots",
      date: "2023-08-05",
      authorName: "Christian Schwartz",
      authorImage: "public/mann.jpg",
    },
    {
      id: 4,
      name: "Paris",
      lng: 2.3483,
      lat: 48.8534,
      title: "Paris: A Love Story",
      date: "2023-08-20",
      authorName: "Bob Brown",
      authorImage: "public/john.jpg",
    },
    {
      id: 5,
      name: "Rome",
      lng: 12.4829,
      lat: 41.8933,
      title: "Rome's Ancient Wonders",
      date: "2023-09-15",
      authorName: "Charlie Davis",
      authorImage: "public/retro.jpg",
    },
    {
      id: 6,
      name: "Vienna",
      lng: 16.3725,
      lat: 48.2083,
      title: "Vienna: A Cultural Journey",
      date: "2023-09-30",
      authorName: "Eve White",
      authorImage: "public/deagreez.jpg",
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
          <button class="close-btn" parentElement.style.display='none'"></button>
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
