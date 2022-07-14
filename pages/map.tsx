import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
// import "next/Image"
type Props = {};

export interface location {
	id: string;
	title: string;
	description: null;
	link: string;
	closed: null;
	categories: Category[];
	sources: Source[];
	geometry: Geometry[];
}

export interface Category {
	id: string;
	title: string;
}

export interface Geometry {
	magnitudeValue: null;
	magnitudeUnit: null;
	date: string;
	type: string;
	coordinates: number[];
}

export interface Source {
	id: string;
	url: string;
}

export default function Map({}: Props) {
	const [locations, setLocations] = useState<location[]>(null);
	const [currentLocation, setCurrentLocation] = useState<number[]>();
	const googlemap = useRef(null);
	useEffect(() => {
		if (!locations)
			fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
				.then((res) => res.json())
				.then((data) => {
					// console.log(data["events"])
					let locations: location[] = JSON.parse(JSON.stringify(data['events']));
					// console.log(locations[0])
					setLocations(locations);
				});
		// let navigator = window.navigator;
		async function getCurrentLocation() {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					setCurrentLocation([pos.coords.latitude, pos.coords.longitude]);
				},
				(err) => {
					setCurrentLocation([12, 77]);
					console.warn(`ERROR(${err.code}): ${err.message}`);
				},
				{
					enableHighAccuracy: true,
					timeout: 50000,
					maximumAge: 0,
				}
			);
		}
		if (!currentLocation) getCurrentLocation();
		const loader = new Loader({
			apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
			version: 'weekly',
		});
		let map: google.maps.Map;
		loader.load().then(() => {
			const google = window.google;
			map = new google.maps.Map(googlemap.current, {
				center: {
					lat: currentLocation[0],
					lng: currentLocation[1],
				},
				zoom: 6,
				minZoom: 4,
				fullscreenControl: false,
				mapTypeControl: false,
				streetViewControl: true,
			});
			locations.forEach((location) => {
				let marker = new google.maps.Marker({
					position: {
						lat: location.geometry[0].coordinates[1],
						lng: location.geometry[0].coordinates[0],
					},
					title: location.title,
					map: map,
					clickable: true,
					optimized: true,
				});
				let infowindow = new google.maps.InfoWindow({
					content:
						'<h1>' +
						location.title +
						"<h1/><br><h4><a href='" +
						location.sources[0].url +
						"'>" +
						location.sources[0].url +
						'<a/>' +
						'<h1/>',
				});
				google.maps.event.addListener(marker, 'click', function () {
					map.panTo(this.getPosition());
					infowindow.open({
						anchor: marker,
						map,
						shouldFocus: false,
					});
				});
				google.maps.event.addListener(marker, 'dblclick', function () {
					map.panTo(this.getPosition());
					map.setZoom(12);
				});
				location.categories.forEach((category) => {
					if (category.id == 'severeStorms') marker.setIcon('/hurricane.png');
					else if (category.id == 'volcanoes') marker.setIcon('/volcano.png');
					else if (category.id == 'wildfires') marker.setIcon('/wildfire.png');
					else if (category.id == 'seaLakeIce') marker.setIcon('/iceberg.png');
				});
			});
		});
	});
	return <div id="map" ref={googlemap} />;
}
