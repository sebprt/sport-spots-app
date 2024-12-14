import { useState, useEffect } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

const SearchBar = ({ onSelect }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Simulate fetching suggestions, replace with actual API call
    useEffect(() => {
        const simulateFetch = () => {
            const mockSuggestions = [
                "Paris", "Football", "Tennis", "Natation", "Marseille"
            ];
            setSuggestions(mockSuggestions.filter(s => s.toLowerCase().includes(inputValue.toLowerCase())));
        };

        if (inputValue) {
            simulateFetch();
        } else {
            setSuggestions([]);
        }
    }, [inputValue]);

    return (
        <Command className="w-full">
            <CommandInput
                value={inputValue}
                onValueChange={setInputValue}
                placeholder="Trouver une ville..."
            />
            {suggestions.length > 0 && (
                <CommandList>
                    <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
                    <CommandGroup>
                        {suggestions.map((suggestion, index) => (
                            <CommandItem
                                key={index}
                                onSelect={() => {
                                    onSelect(suggestion);
                                    setInputValue('');
                                }}
                            >
                                {suggestion}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            )}
        </Command>
    );
};

export default SearchBar;