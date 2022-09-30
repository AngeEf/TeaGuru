import React, { useState, useEffect, useMemo } from 'react';
import { Button, Form } from 'react-bootstrap';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5nZWVmIiwiYSI6ImNsOG11ZGJtbDBtdWEzcHF3YWp2aXphNmsifQ.sVmWjakm6PmhrNnrsT-LSg';

export default function MapComponent({items, currUser, setItems}) {
  const [marks, setMarks] = useState(items)
  const [viewState, setViewState] = useState({
    latitude: 23.4387033,
    longitude: 85.730206,
    zoom: 3,
  });

  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
//------------------------------------------------
  const [current, setCurrent] = useState(currUser);

  const [data, setData] = useState({
    title: '',
    location: '',
    lng: 0,
    lat: 0,
    description: '',
    image: ''
  });


  useEffect(() => {
    fetch('api/cardlist')
    .then(res => res.json())
    .then(data => setMarks(data))
  }, [])

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewState, latitude: lat, longitude: long });
  };

  const inputHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = (e) => {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    console.log(longitude, latitude)
    setNewPlace({
      lng: longitude,
      lat: latitude,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newCard = {
      title: data.title,
      location: data.location,
      lng: newPlace.lng,
      lat: newPlace.lat,
      description: data.description,
      image: data.image
    }
    fetch('/api/create', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newCard)
    })
    .then((res) => res.json())
    .then(res => {
      setItems((prev) => ([...prev, res]));
      setMarks((prev) => ([...prev, res]));
      setNewPlace(null);
      setData({})
    })
    // .then(() => setNewPlace(null))
    // setNewPlace(null)
  };

  return (
    <div>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ height: 600 }}
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        mapboxAccessToken={MAPBOX_TOKEN}
        onDblClick={handleAddClick}
        onViewportChange={(viewport) => {
          setViewState(viewport);
        }}
        // transitionDuration="500"
      >
        {marks?.map( mark => (
          <>
        <Marker 
        longitude={mark.lng} 
        latitude={mark.lat} 
        >
           <button
              style={{width: '40px', background: 'none', border: 'none'}}
              onClick={() => handleMarkerClick(mark.id, mark.lat, mark.long)}
            >
              <img src="/tea-cup.svg" alt="Icon" />
            </button>
        </Marker>

        {mark.id === currentPlaceId && (
          <Popup
            key={mark.id}
            latitude={mark.lat}
            longitude={mark.lng}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setCurrentPlaceId(null)}
            anchor="bottom">
            <div>
              <h5 style={{margin:'0', padding: '0', textAlign: 'center', opacity:'75%', color:'#594531'}}>{mark.title}</h5>
            </div>
          </Popup>
          )}
          </>
        ))};
{/* ----------------------------------------------- */}
        <NavigationControl />

        {newPlace && (
          <>
          <Marker
          longitude={newPlace.lng} 
          latitude={newPlace.lat} 
          >
          <button
              style={{width: '40px', background: 'none', border: 'none'}}
              // onClick={() => handleMarkerClick(mark.id, mark.lat, mark.long)}
            >
              <img src="/tea-cup.svg" alt="Icon" />
            </button>
          </Marker>
          <Popup
            longitude={newPlace.lng}
            latitude={newPlace.lat}
            anchor="left"
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
          >
            <Form method="post" onSubmit={submitHandler}>
              {/* <Form.Label>Title</Form.Label> */}
              <Form.Control
                name="title"
                type="text"
                onChange={inputHandler}
                value={data.title || ''}
                placeholder="Enter a title"
                size="sm"
                className="my-2"
              />
              {/* <Form.Label>Location</Form.Label> */}
              <Form.Control
                name="location"
                type="text"
                onChange={inputHandler}
                value={data.location || ''}
                placeholder="Enter a location"
                size="sm"
                className="mb-2"
              />
              {/* <Form.Label>Description</Form.Label> */}
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                onChange={inputHandler}
                value={data.description || ''}
                placeholder="Enter a description"
                size="sm"
                className="mb-2"
              />
              {/* <Form.Label>Location</Form.Label> */}
              <Form.Control
                name="image"
                type="text"
                onChange={inputHandler}
                value={data.image || ''}
                placeholder="Enter a image"
                size="sm"
                className="mb-2"
              />
              <Button type="submit" variant="primary" size="sm" className="mb-2">
                Add Card
              </Button>
            </Form>
          </Popup>
          </>
        )}
        {/* ------------------------------- */}
      </Map>
    </div>
  );
}
