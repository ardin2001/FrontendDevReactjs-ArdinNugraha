import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Capitalize from "../function/Capitalize";

export default function Maps({ data }) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
        <Map
          style={{ width: "100%", height: "400px" }}
          defaultCenter={{ lat: data.maps.latitude, lng: data.maps.longitude }}
          defaultZoom={10}
          gestureHandling={"greedy"}
          className="h-56 sm:h-64 lg:h-72"
        >
          <Marker position={{ lat: data.maps.latitude, lng: data.maps.longitude }} />
          <InfoWindow position={{ lat: data.maps.latitude, lng: data.maps.longitude }}>
            <h4>{Capitalize(data.name)}</h4>
            <p>Jln. Lorem Ipsum No.44 Lumajang</p>
          </InfoWindow>
        </Map>
    </APIProvider>
  );
}
