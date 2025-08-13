import React from "react";

const Loader = () => (
    <div className="flex items-center justify-center min-h-screen">
        <svg
            className="animate-spin h-20 w-20 text-brand-accent"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            aria-label="Chargement en cours"
        >
            <circle
                className="opacity-25"
                cx="14"
                cy="14"
                r="12"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M5 14a9 9 0 019-9v4a5 5 0 00-5 5H5z"
            ></path>
        </svg>
    </div>
);

export default Loader;
