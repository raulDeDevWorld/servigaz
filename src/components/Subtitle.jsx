'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full text-[#0090A8] text-center font-bold text-[26px] p-3 ${styled}`}>{children}</h3>
    )
}
