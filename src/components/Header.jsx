jsx
import React from 'react'
import { motion } from 'framer-motion'


export default function Header() {
return (
<header className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white pt-16 pb-20">
<div className="container mx-auto px-6 text-center">
<motion.img
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
src="/assets/logo-placeholder.svg"
alt="Чат Підтримка logo"
className="mx-auto w-28 h-28 mb-4"
/>
<motion.h1
initial={{ opacity: 0, y: 6 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.1 }}
className="text-4xl md:text-5xl font-extrabold leading-tight"
>
Чат Підтримка
</motion.h1>
<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2 }}
className="mt-4 text-lg max-w-2xl mx-auto"
>
Волонтерський проєкт — боти для дебагу Starlink та FPV дронів. Допомагаємо технікам та ентузіастам швидко вирішувати проблеми.
</motion.p>


<div className="mt-8 flex justify-center gap-4">
<a
href="#bots"
className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-full shadow hover:scale-[1.02] transition"
>
Спробувати бота
</a>
<a
href="https://github.com/"
className="inline-block border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
target="_blank"
rel="noreferrer"
>
Репозиторій
</a>
</div>
</div>
</header>
)
}
