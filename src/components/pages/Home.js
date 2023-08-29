import React from 'react'
import Welcome from '../elemenets-component/home-welcome-component'
import WelcomeTwo from '../elemenets-component/home-welcome-component-2'
import CardsCon from '../elemenets-component/home-nofication-cards'
import JourneyCon from '../elemenets-component/journey-container'
import InstitudeDesc from '../elemenets-component/institude-description'

export default function Home() {
  return (
    <>
      <Welcome></Welcome>
      <WelcomeTwo></WelcomeTwo>
      <CardsCon></CardsCon>
      <JourneyCon></JourneyCon>
      <InstitudeDesc></InstitudeDesc>
    </>
  )
}
