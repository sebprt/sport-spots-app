'use client'
import React, {useEffect, useState} from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {fetchEquipements} from "@/lib/api";

type Equipment = {
    id: string;
    nom_usuel: string;
    type_equipement: string;
    commune: string;
    code_postal: string;
    coordonnees: Array<string>;
}

const Map = ({filters}) => {
    const [equipments, setEquipments] = useState<Equipment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEquipments = async () => {
            try {
                const data = await fetchEquipements(filters);
                setEquipments(data.results);

                setIsLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Une erreur est survenue');
                setIsLoading(false);
            }
        };

        fetchEquipments();
    }, []);

    if (isLoading) {
        return <div>Chargement des équipements...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    console.log(equipments)

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            className="h-full w-full"
            scrollWheelZoom={true}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {equipments.map((equipment) => (
                <Marker position={equipment.coordonnees}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;