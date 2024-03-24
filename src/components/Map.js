// components/Map.js
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

const Map = ({ territories }) => {
  const colorScale = scaleQuantile()
    .domain(Object.values(territories))
    .range(['#ffedea', '#ffcec5', '#ffad9f', '#ff8a75', '#ff5533', '#e2492d', '#be3d26', '#9a311f', '#782618']);

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography="/path/to/us-zip-codes.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            const zipCode = geo.properties.ZIP_CODE;
            const repId = territories[zipCode];
            const color = repId ? colorScale(repId) : '#ECECEC';
            return <Geography key={geo.rsmKey} geography={geo} fill={color} />;
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;