import React from 'react';

export default function Card({ title, price, icon, description, children }) {
    return (
        <article className="flex flex-col flex-1 items-center shadow-sm p-10 gap-4 bg-sky-50">
            <h3 className="text-xl">{ title }</h3>
            { icon }            

            <span className="w-fit bg-sky-500 text-white font-bold py-1 px-2 rounded-md">{ price } ARS</span>

            { children }

            <small>{ description }</small>
        </article>
    );
}