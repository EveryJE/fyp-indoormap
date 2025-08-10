import React from 'react'
import Squares from '~/components/ui/Squares'
// import FlickeringGrid from '~/components/ui/flicking-bg'

const Home = () => {
  return (
    <div>Home

      <div className="relative w-full h-[600px] overflow-hidden rounded-lg border bg-background">
       <Squares/>
      </div>    </div>
  )
}

export default Home