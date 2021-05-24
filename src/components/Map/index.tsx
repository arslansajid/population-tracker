import React, { useRef, useMemo } from "react";
import GoogleMapReact from "google-map-react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { GOOGLE_MAP_API_KEY, mapProps } from "../../config";
import MapPin from "../MapPin";
import { useSelector } from "react-redux";
interface Props {
  classes: object;
}

const SimpleMap: React.FC<Props> = (props: any) => {
  const { classes } = props;
  const mapRef = useRef(null);

  const state = useSelector((state: AppState) => state);

  const { searchResults } = state;
  const selectedCountry: ISelectedCountry = state.selectedCountry;

  const mapLat = useMemo(() => selectedCountry?.latlng[0], [selectedCountry]);
  const mapLng = useMemo(() => selectedCountry?.latlng[1], [selectedCountry]);

  // center for the map
  const mapCenter = useMemo(
    () => ({
      lat: mapLat || mapProps.center.lat,
      lng: mapLng || mapProps.center.lng,
    }),
    [mapLat, mapLng]
  );

  return (
    // Important! Always set the container height explicitly
    <div className={classes.mapArea}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        center={mapCenter}
        defaultCenter={{
          lat: mapProps.center.lat,
          lng: mapProps.center.lng,
        }}
        defaultZoom={mapProps.zoom}
        ref={mapRef}
      >
        {searchResults.map((pin) => (
          <MapPin
            key={pin?.name}
            lat={pin.latlng[0]}
            lng={pin.latlng[1]}
            text={pin?.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SimpleMap);
