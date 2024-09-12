import React from 'react'
function Footer(props) {
    return (
        <div className='flex flex-col items-center gap-y-4 mx-auto'>
            <h1 class="text-2xl font-semibold font-playfair ">{props.title}</h1>
            <a href="#" className='font-poppins underline text-xl font-medium'>{props.mail}</a>
            <p className='text-lg font-medium'>{props.no}</p>
        </div>

    );
}
export default Footer
