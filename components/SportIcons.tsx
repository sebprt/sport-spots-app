import { Button } from "@/components/ui/button"
import {SquareActivity} from "lucide-react";

const SportIcons = ({ onSelect }) => {
    const sports = [
        { name: 'Football', icon: <SquareActivity /> },
        { name: 'Tennis', icon: <SquareActivity /> },
        { name: 'Natation', icon: <SquareActivity /> },
    ];

    return (
        <div className="flex space-x-2">
            {sports.map((sport, index) => (
                <Button
                    key={index}
                    variant="outline"
                    onClick={() => onSelect(sport.name)}
                    className="w-10 h-10 p-0"
                >
                    {sport.icon}
                </Button>
            ))}
        </div>
    );
};

export default SportIcons;