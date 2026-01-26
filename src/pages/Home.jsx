import React from 'react'
import HeroSection from './HOME/heroSection'
import SectionTwo from './HOME/sectionTwo'
import Leadership from './HOME/leadership'
import VideoSlider from './HOME/videoSlider'
import MissionSlider from './HOME/missionSlider'
import GoodFood from './HOME/goodFood'
import Subsidiaries from './HOME/subsidiaries'
import FarmEvents from './HOME/farmEvents'
import Map from './CONTACT/map'
export default function Home() {
    return (
        <div style={{ marginTop: '-90px' }}>
            <HeroSection />
            <SectionTwo />
            <Leadership />
            <VideoSlider />
            <MissionSlider />
            <GoodFood />
            <Subsidiaries />
            <FarmEvents />
            <Map />



        </div>
    )
}
