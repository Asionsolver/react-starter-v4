/* eslint-disable react/prop-types */
import { X } from 'lucide-react';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    // // Close modal when clicking outside
    // const handleBackdropClick = (e) => {
    //     if (e.target === e.currentTarget) {
    //         onClose();
    //     }
    // };

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>

            <div
                className={`relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg transform transition-all duration-400 ${isOpen ? 'scale-100' : 'scale-95'} `}

            >
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-gray-100"
                        aria-label="Close modal"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;