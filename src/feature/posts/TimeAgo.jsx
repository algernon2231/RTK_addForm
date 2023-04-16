import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'

const TimeAgo = ({ date }) => {
    const dateObject = parseISO(date);
    const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true });
    return (
        <span className='text-gray-300 text-[10px] font-roboto'>at {timeAgo}</span>
    )
}

export default TimeAgo