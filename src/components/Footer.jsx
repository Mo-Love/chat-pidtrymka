jsx
import React from 'react'


export default function Footer() {
return (
<footer className="py-8 text-center text-slate-500 text-sm">
<div className="container mx-auto px-6">
© {new Date().getFullYear()} Чат Підтримка — створено як волонтерський проєкт.
<br />
Домен: chat-support-ua.org.ua
</div>
</footer>
)
}
