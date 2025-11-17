jsx
import React from 'react'


export default function BotCard({ title, description, demoUrl, imgSrc }) {
return (
<article className="bg-white rounded-2xl shadow p-6 flex flex-col hover:shadow-2xl transition">
<img src={imgSrc} alt={`${title} demo`} className="w-full rounded-lg mb-4 object-cover h-48" />
<h3 className="text-2xl font-semibold mb-2">{title}</h3>
<p className="text-slate-600 flex-grow">{description}</p>


<div className="mt-4 flex gap-3">
<a
href={demoUrl}
target="_blank"
rel="noreferrer"
className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-medium"
>
Відкрити чат
</a>
<button
onClick={() => navigator.clipboard?.writeText(demoUrl)}
className="inline-block px-4 py-2 rounded-md border border-slate-200 text-slate-700"
>
Копіювати посилання
</button>
</div>
</article>
)
}
