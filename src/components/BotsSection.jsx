jsx
import React from 'react'
import BotCard from './BotCard'


export default function BotsSection() {
return (
<div id="bots" className="grid gap-8 md:grid-cols-2">
<BotCard
title="Starlink Debug Bot"
description="Чат-бот для діагностики підключень Starlink, рекомендацій по розміщенню антен, аналізу latency і throughput."
demoUrl="https://starlink-ai-assistant-108666031987.us-west1.run.app/"
imgSrc="/assets/starlink-demo.png"
/>


<BotCard
title="FPV Drone Debug Bot"
description="Допомагає при збірці FPV дронів — сумісність компонентів, PIDs, настройка контролера польоту."
demoUrl="https://chatfpv-v1.onrender.com/"
imgSrc="/assets/fpv-demo.png"
/>
</div>
)
}
