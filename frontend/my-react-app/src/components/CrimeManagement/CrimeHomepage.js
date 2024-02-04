import React from 'react'
import Dashboard from './Dashboard'
import CaseManagement from './CaseManagement'
import SearchFilter from './SearchFilter'
import MapIntegration from './MapIntegration'
import RegisterPeople from './RegisterPeople'



const CrimeHomepage = () => {
  return (
    <div>
        <Dashboard/>
        <CaseManagement/>
        <SearchFilter/>
        <RegisterPeople/>
        <MapIntegration/>
    </div>
  )
}

export default CrimeHomepage