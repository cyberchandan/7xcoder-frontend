import { useEffect } from "react";

export default function MaintenanceModal({
  isOpen,
  onClose,
  autoClose = false,
  duration = 5000,
}) {
  useEffect(() => {
    if (autoClose && isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      
      <div className="relative bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-8 text-center animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="text-5xl mb-4">🚧</div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Site Under Maintenance
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          We're currently improving the platform to serve you better.
          Some features may not function as expected.
        </p>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        >
          Continue Anyway
        </button>

      </div>
    </div>
  );
}
