import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5nZWVmIiwiYSI6ImNsOG11ZGJtbDBtdWEzcHF3YWp2aXphNmsifQ.sVmWjakm6PmhrNnrsT-LSg';

export default function MapComponent() {
  const [marks, setMarks] = useState([]);
  const [viewState, setViewState] = useState({
    lat: 44.8146,
    lng: 65.3202,
    zoom: 2,
  });

  const [current, setCurrent] = useState(null);
  const [data, setData] = useState({});

  const [newPlace, setNewPlace] = useState(null);

  // useEffect(() => {
  //   fetch('api/cardlist')
  //   .then(res => res.json())
  //   .then(data => setMarks(data))
  // }, [])

  const handeCurrentPlace = (id, lng, lat) => {
    setCurrent(id);
    setViewState({ ...viewState, lng, lat });
  };

  const inputHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = (e) => {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    // console.log(long, latit)
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
      lnt: newPlace.lng,
      lat: newPlace.lat,
      description: data.description,
      link: data.link
    }
    fetch('/api/new', newCard)
    .then(navigate('/'));

    setMarks([...marks, res.data])
    setNewPlace(null)
  };

  return (
    <div>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        onDblClick={handleAddClick}
        // transitionDuration="500"
      >
        {/* {marks.map( mark => (

        <Marker 
        longitude={mark.lng} 
        latitude={mark.lat} 
        color="red" >
          <Button
          onClick={() => handeCurrentPlace(mark.id, mark.lng, mark.lat)}
          >X</Button>
        </Marker>

        (mark.id === current && (
          <Popup 
          longitude={mark.lng} 
          latitude={mark.lat}
          anchor="bottom"
          onClose={() => setCurrent(null)}>
            <div>
              <h4>{mark.title}</h4>
            </div>
          </Popup>
          ))
        ))}; */}
        <NavigationControl />

        {newPlace && (
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
                name="link"
                type="text"
                onChange={inputHandler}
                value={data.link || ''}
                placeholder="Enter a link"
                size="sm"
                className="mb-2"
              />
              <Button variant="primary" size="sm" className="mb-2">
                Add Card
              </Button>
            </Form>
          </Popup>
        )}
      </Map>
    </div>
  );
}
