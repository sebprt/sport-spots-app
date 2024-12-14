'use client'
import React from "react";
import dynamic from "next/dynamic";
import {Card} from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";
import SportIcons from "@/components/SportIcons";
import {fetchEquipements} from "@/lib/api";

export default function Home() {
    const MapComponent = dynamic(() => import('../components/Map'), {
        ssr: false,
        loading: () => <p>Loading map...</p>
    });


    const handleSelect = (value) => {
        console.log('Selected:', value);
    };

    return (
        <div className="w-screen h-screen">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-[9999]">
                <Card className="backdrop-blur-md bg-white/80 shadow-lg">
                    <div className="p-4 flex items-center gap-2">
                        <SearchBar onSelect={handleSelect} />
                        <SportIcons onSelect={handleSelect} />
                    </div>
                </Card>
            </div>

            <main className="h-screen flex flex-col">
                <div className="w-full h-full">
                    <MapComponent filters={[]} />
                </div>
            </main>
        </div>
    );
}
