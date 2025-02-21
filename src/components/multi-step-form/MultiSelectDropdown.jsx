import { useState, useRef, useEffect } from 'react';

const MultiSelectDropdown = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const options = [
        { label: 'Single Room', value: 'single' },
        { label: 'Double Room', value: 'double' },
        { label: 'Triple Room', value: 'triple' },
        { label: 'Quad Room', value: 'quad' },
    ];


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    const addOption = (option) => {
        setSelectedOptions([...selectedOptions, option.value]);
    };


    const removeOption = (optionValue) => {
        setSelectedOptions(selectedOptions.filter(item => item !== optionValue));
    };


    const containerRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const availableOptions = options.filter(option => !selectedOptions.includes(option.value));

    return (
        <div className="relative w-full " ref={containerRef}>

            <div
                className="border rounded p-2 cursor-pointer bg-white"
                onClick={toggleDropdown}
            >
                {selectedOptions.length > 0 ? (
                    <div className="flex gap-1">
                        {selectedOptions.map(selectedValue => {
                            const option = options.find(o => o.value === selectedValue);
                            return (
                                <div
                                    key={selectedValue}
                                    className="bg-blue-100 text-blue-700 px-2 py-1 text-[10.8px] rounded flex items-center"
                                >
                                    <span>{option ? option.label : selectedValue}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeOption(selectedValue);
                                        }}
                                        className="ml-1 text-blue-500 hover:text-blue-700"
                                    >
                                        x
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    'Select Rooms'
                )}
            </div>

            {/* Dropdown list: shows only options that are not selected */}
            {dropdownOpen && (
                <div className="absolute mt-1  border rounded bg-white z-10">
                    {availableOptions.length > 0 ? (
                        availableOptions.map(option => (
                            <div
                                key={option.value}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => addOption(option)}
                            >
                                <span>{option.label}</span>
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">No more options</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
