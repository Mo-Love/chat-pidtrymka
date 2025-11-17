jsx
import React from 'react'
import Header from './components/Header'
import BotsSection from './components/BotsSection'
import About from './components/About'
import Footer from './components/Footer'


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Header />


<main className="flex-grow">
<section className="py-12 container mx-auto px-6">
<About />
</section>


<section className="py-6 bg-slate-50">
<div className="container mx-auto px-6">
<BotsSection />
</div>
</section>
</main>


<Footer />
</div>
)
}
