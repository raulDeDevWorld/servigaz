'use client';

import Button from '@/components/Button'

export default function Card({i}) {
    return (

        <div className="w-full max-w-sm bg-white rounded-lg  mt-5">
        
            <div className="flex flex-col items-center ">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={i.url} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{i.perfil}</h5>
                {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
                <p className="text-gray-950">{i.testimonio}</p>
                {/* <Button theme='Primary'>Contactar</Button> */}
            </div>
        </div>)
}   