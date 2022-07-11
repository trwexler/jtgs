import React from 'react'


const Calendar = () => {
    

    return (
        <div className = "mx-10 my-10 lg:mx-20 lg:my-20">
            <p className = "text-xl md:text-2xl lg:text-3xl text-center font-semibold tracking-widest text-gray-500 mb-10 "> PARISH CALENDAR </p>
            <div className = "aspect-w-1 aspect-h-1 lg:aspect-w-2 lg:aspect-h-1 lg:mx-20">
                <iframe src="https://calendar.google.com/calendar/embed?src=0abpo6kl8j35e8b4bof0kruis8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no">
                </iframe>
            </div>
        </div>
    )
}

export default Calendar