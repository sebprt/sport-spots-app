'use client'
import React from "react";
import dynamic from "next/dynamic";
import {Card} from "@/components/ui/card";

export default function Home() {
    const MapComponent = dynamic(() => import('../components/Map'), {
        ssr: false,
        loading: () => <p>Loading map...</p>
    });

    return (
        <div className="min-h-screen bg-background">
            <main className="h-screen flex flex-col">
                <div className="w-full h-full">
                    <MapComponent/>
                </div>
            </main>
        </div>
    );
}
