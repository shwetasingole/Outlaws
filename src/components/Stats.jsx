import React from 'react';

function OrderSelection(props) {
    return (
        <div className="flex flex-col m-4 md:m:3 shadow-lg px-4 py-7 rounded-2xl md:w-48 md:h-48 lg:w-52 lg:h-52 gap-3 bg-white">
            <h1 className="title font-semibold text-xl">{props.name}</h1>
            <p className="text-gray-500 text-left text-lg">{props.value}</p>

            <p className='text-left text-lg flex items-center '>
                {props.percentage}
            </p>
        </div>
    );
}

export default OrderSelection;
