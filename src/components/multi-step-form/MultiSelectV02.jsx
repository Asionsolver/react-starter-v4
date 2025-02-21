import { useState, useRef, useEffect } from 'react';

const MultiSelectV02 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const dropdownRef = useRef(null);

    const items = ['Single Room', 'Double Room', 'Triple Room', 'Quad Room'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item)
                ? prevItems.filter((i) => i !== item)
                : [...prevItems, item]
        );
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex flex-wrap gap-2 mb-2">
                {selectedItems.map((item, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center">
                        {item}
                        <button
                            className="ml-2 text-blue-500"
                            onClick={() => handleItemClick(item)}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
            <button
                className="w-full px-4 py-2 bg-gray-100 rounded flex items-center justify-between"
                onClick={toggleDropdown}
            >
                Select Rooms
            </button>
            {isOpen && (
                <div className="absolute w-full bg-white border rounded mt-1 shadow-lg overflow-hidden transition duration-300 transform origin-top scale-y-100">
                    <ul className="max-h-40 overflow-y-auto transition duration-300 ease-in-out">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 cursor-pointer ${selectedItems.includes(item) ? 'bg-blue-50' : ''
                                    } transition duration-300 ease-in-out hover:bg-gray-50`}
                                onClick={() => handleItemClick(item)}
                            >
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedItems.includes(item)}
                                        onChange={() => handleItemClick(item)}
                                    />
                                    {item}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MultiSelectV02;