import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '@ansur/leaflet-pulse-icon/dist/L.Icon.Pulse.js';
import '@ansur/leaflet-pulse-icon/dist/L.Icon.Pulse.css';
import { Map, Marker, Circle } from 'react-leaflet';

import { mapCenter } from '../configs/config';

const icon = L.icon.pulse({ iconSize: [10, 10], color: 'red' });

const MapDisplay = props => {
    return (
        <div className="col-md-9 col-md-offset-2">
            <Map zoomControl={false} setMaxZoom={7} center={mapCenter} zoom={6}>
                <Circle center={mapCenter} fillColor="red" radius={150000} />
                <Circle center={mapCenter} fillColor="orange" radius={300000} />
                <Circle center={mapCenter} fillColor="white" radius={800000} />

                {props.data.length
                    ? props.data.map(video => {
                          return (
                              <Marker
                                  icon={icon}
                                  key={video._id}
                                  position={video.location.coordinates}
                                  onClick={() =>
                                      props.onOpenModal(video.video_path)
                                  }
                              />
                          );
                      })
                    : ''}
            </Map>
        </div>
    );
};

export { MapDisplay };
