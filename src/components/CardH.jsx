'use client';
import { useUser } from '@/context/Context'

import { useState } from 'react'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { removeData } from '@/firebase/database';
import Link from 'next/link';

export default function CardH({ image, service, description, remote, cost, time, whatsapp, i, index }) {

    const { user, userDB, item, setUserItem, setUserModal, setUserProfile, setUserSuccess, success, setUserData } = useUser()

    function handlerRemoveData() {
        removeData(`services/${i.uid}`, setUserData, setUserSuccess)
    }

    function handlerEditData() {
        setUserModal('Servicios')
        setUserItem(i)
    }


    return (
        <>
            <div className="w-full lg:max-w-full  md:grid lg:grid-cols-2 rounded-[15px] overflow-hidden mt-5">
                {/* <div className="h-48 w-full rounded-t text-center md:hidden bg-blue-500" style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div> */}
                {index % 2 == 0
                    ? <div className='hidden lg:flex relative w-full max-h-[300px] flex justify-center'>
                        <img src={image} className="max-h-[300px]" alt="" />
                    </div>
                    : ''}
               
                    <div className='lg:hidden relative w-full max-h-[300px] flex justify-center'>
                        <img src={image} className="max-h-[300px]" alt="" />
                    </div>
                 
                <div className="px-2 py-4 md:p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className=" font-bold text-xl mb-2 text-[#9EC011]">
                            {service}
                            <p className="w-full text-sm text-gray-600 flex items-center justify-start text-right font-normal">
                                <span className={`inline-block h-[5px] w-[5px] mr-[5px] rounded-[5px] bg-[#9EC011] }`}>
                                </span> {i.marca}
                            </p>
                        </div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>

                    <div className="flex items-baseline justify-between text-gray-900 dark:text-white">
                        {cost.replace(/[^0-9]/g, "").length > 0
                            ? <div>
                                <span className="text-3xl font-semibold">BS</span>
                                <span className="text-5xl font-extrabold tracking-tight mr-[5px] lg:mr-[20px]">{cost}</span>
                            </div>
                            : <span className="text-2xl font-semibold">{cost}</span>}
                        <Link href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Hola%20Alvaro`}>
                            <Button theme='Secondary'>Solicitar ya...</Button>
                        </Link>
                    </div>
                </div>
                {index % 2 == 1
                    ? <div className='hidden lg:flex relative w-full max-h-[300px]  justify-center'>
                        <img src={image} className="max-h-[300px]" alt="" />
                    </div>
                    : ''
                }
            </div>
            {user && <div className='grid grid-cols-2 gap-1 lg:gap-5'>
                <Button theme='Danger' click={handlerRemoveData}>Eliminar</Button>
                <Button theme='Secondary' click={handlerEditData}>Editar</Button>
            </div>}
        </>

    )

}





//   <div className="flex items-center">
//     {/* <img className="w-10 h-10 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink" /> */}
//     <div className="text-sm">
//         <p className="text-gray-900 leading-none">Tiempo de intervencion</p>
//         <p className="text-gray-600">{time}</p>
//     </div>
// </div>
