// components/Map.js
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

// Import the GeoJSON files for each state
import azGeoJson from './data/states/az_arizona_zip_codes_geo.min.json';
import akGeoJson from './data/states/ak_alaska_zip_codes_geo.min.json';
import alGeoJson from './data/states/al_alabama_zip_codes_geo.min.json';
import arGeoJson from './data/states/ar_arkansas_zip_codes_geo.min.json';
import caGeoJson from './data/states/ca_california_zip_codes_geo.min.json';
import coGeoJson from './data/states/co_colorado_zip_codes_geo.min.json';
import ctGeoJson from './data/states/ct_connecticut_zip_codes_geo.min.json';
import dcGeoJson from './data/states/dc_district_of_columbia_zip_codes_geo.min.json';
import deGeoJson from './data/states/de_delaware_zip_codes_geo.min.json';
import flGeoJson from './data/states/fl_florida_zip_codes_geo.min.json';
import gaGeoJson from './data/states/ga_georgia_zip_codes_geo.min.json';
import hiGeoJson from './data/states/hi_hawaii_zip_codes_geo.min.json';
import iaGeoJson from './data/states/ia_iowa_zip_codes_geo.min.json';
import idGeoJson from './data/states/id_idaho_zip_codes_geo.min.json';
import ilGeoJson from './data/states/il_illinois_zip_codes_geo.min.json';
import inGeoJson from './data/states/in_indiana_zip_codes_geo.min.json';
import ksGeoJson from './data/states/ks_kansas_zip_codes_geo.min.json';
import kyGeoJson from './data/states/ky_kentucky_zip_codes_geo.min.json';
import laGeoJson from './data/states/la_louisiana_zip_codes_geo.min.json';
import maGeoJson from './data/states/ma_massachusetts_zip_codes_geo.min.json';
import mdGeoJson from './data/states/md_maryland_zip_codes_geo.min.json';
import meGeoJson from './data/states/me_maine_zip_codes_geo.min.json';
import miGeoJson from './data/states/mi_michigan_zip_codes_geo.min.json';
import mnGeoJson from './data/states/mn_minnesota_zip_codes_geo.min.json';
import moGeoJson from './data/states/mo_missouri_zip_codes_geo.min.json';
import msGeoJson from './data/states/ms_mississippi_zip_codes_geo.min.json';
import mtGeoJson from './data/states/mt_montana_zip_codes_geo.min.json';
import ncGeoJson from './data/states/nc_north_carolina_zip_codes_geo.min.json';
import ndGeoJson from './data/states/nd_north_dakota_zip_codes_geo.min.json';
import neGeoJson from './data/states/ne_nebraska_zip_codes_geo.min.json';
import nhGeoJson from './data/states/nh_new_hampshire_zip_codes_geo.min.json';
import njGeoJson from './data/states/nj_new_jersey_zip_codes_geo.min.json';
import nmGeoJson from './data/states/nm_new_mexico_zip_codes_geo.min.json';
import nvGeoJson from './data/states/nv_nevada_zip_codes_geo.min.json';
import nyGeoJson from './data/states/ny_new_york_zip_codes_geo.min.json';
import ohGeoJson from './data/states/oh_ohio_zip_codes_geo.min.json';
import okGeoJson from './data/states/ok_oklahoma_zip_codes_geo.min.json';
import orGeoJson from './data/states/or_oregon_zip_codes_geo.min.json';
import paGeoJson from './data/states/pa_pennsylvania_zip_codes_geo.min.json';
import riGeoJson from './data/states/ri_rhode_island_zip_codes_geo.min.json';
import scGeoJson from './data/states/sc_south_carolina_zip_codes_geo.min.json';
import sdGeoJson from './data/states/sd_south_dakota_zip_codes_geo.min.json';
import tnGeoJson from './data/states/tn_tennessee_zip_codes_geo.min.json';
import txGeoJson from './data/states/tx_texas_zip_codes_geo.min.json';
import utGeoJson from './data/states/ut_utah_zip_codes_geo.min.json';
import vaGeoJson from './data/states/va_virginia_zip_codes_geo.min.json';
import vtGeoJson from './data/states/vt_vermont_zip_codes_geo.min.json';
import waGeoJson from './data/states/wa_washington_zip_codes_geo.min.json';
import wiGeoJson from './data/states/wi_wisconsin_zip_codes_geo.min.json';
import wvGeoJson from './data/states/wv_west_virginia_zip_codes_geo.min.json';
import wyGeoJson from './data/states/wy_wyoming_zip_codes_geo.min.json';

// Create an object that maps state codes to their GeoJSON data
const stateData = {
  AZ: azGeoJson,
  AK: akGeoJson,
  AL: alGeoJson,
  AR: arGeoJson,
  CA: caGeoJson,
  CO: coGeoJson,
  CT: ctGeoJson,
  DC: dcGeoJson,
  DE: deGeoJson,
  FL: flGeoJson,
  GA: gaGeoJson,
  HI: hiGeoJson,
  IA: iaGeoJson,
  ID: idGeoJson,
  IL: ilGeoJson,
  IN: inGeoJson,
  KS: ksGeoJson,
  KY: kyGeoJson,
  LA: laGeoJson,
  MA: maGeoJson,
  MD: mdGeoJson,
  ME: meGeoJson,
  MI: miGeoJson,
  MN: mnGeoJson,
  MO: moGeoJson,
  MS: msGeoJson,
  MT: mtGeoJson,
  NC: ncGeoJson,
  ND: ndGeoJson,
  NE: neGeoJson,
  NH: nhGeoJson,
  NJ: njGeoJson,
  NM: nmGeoJson,
  NV: nvGeoJson,
  NY: nyGeoJson,
  OH: ohGeoJson,
  OK: okGeoJson,
  OR: orGeoJson,
  PA: paGeoJson,
  RI: riGeoJson,
  SC: scGeoJson,
  SD: sdGeoJson,
  TN: tnGeoJson,
  TX: txGeoJson,
  UT: utGeoJson,
  VA: vaGeoJson,
  VT: vtGeoJson,
  WA: waGeoJson,
  WI: wiGeoJson,
  WV: wvGeoJson,
  WY: wyGeoJson,
};

const Map = ({ territories }) => {
  const colorScale = scaleQuantile()
    .domain(Object.values(territories))
    .range(['#ffedea', '#ffcec5', '#ffad9f', '#ff8a75', '#ff5533', '#e2492d', '#be3d26', '#9a311f', '#782618']);

  return (
    <ComposableMap projection="geoAlbersUsa">
      {Object.entries(stateData).map(([stateCode, geoData]) => (
        <Geographies key={stateCode} geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = territories.find((s) => s.val === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={cur ? colorScale(cur.rsmKey) : '#ECECEC'}
                />
              );
            })
          }
        </Geographies>
      ))}
    </ComposableMap>
  );
};

export default Map;