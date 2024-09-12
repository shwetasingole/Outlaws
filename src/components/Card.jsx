import React, { useDebugValue } from 'react'
function Card(props) {
    return (
        <div class="flex flex-col shadow-md px-6 py-7 m-4 rounded-lg  lg:w-80 lg:h-80 gap-8 bg-white">
            <h1 className="title font-bold text-2xl font-featureinfo">{props.title}</h1>
            <p class="text-left">{props.info}</p>
        </div>
    );

}
export default Card;