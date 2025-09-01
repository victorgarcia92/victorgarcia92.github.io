import React from 'react';

export default function Benefit({ title, icon, description }) {
    return (
        <div class="flex flex-col flex-1 items-center gap-5">
            <h3>{ title }</h3>
            <div class="text-sky-500">{ icon }</div>
            <p>{ description }</p>
        </div>
    );
}