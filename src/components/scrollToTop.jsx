export const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth', block: 'start' });
    };
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={handleScrollToTop}
                className="bg-accent text-white cursor-pointer p-3 rounded-full shadow-lg hover:bg-amber-100 hover:text-text transition duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    )
}
