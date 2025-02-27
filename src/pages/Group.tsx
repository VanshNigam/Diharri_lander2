import React from 'react'
import GroupCard from './Group/GroupCard'
import GroupDescription from './Group/GroupDescription'
import ProjectSamples from './Group/ProjectSamples'
import Experience from './Group/Experience'
import Skill_Interests from './Group/Skill_Interests'
import Members from './Group/Members'
import Navbar from '@/components/Navbar'

function Group() {
  return (
    <div className=' py-4'>
      <Navbar/>
      <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]"> 
          <GroupCard/>
          <GroupDescription/>
          <ProjectSamples/>
          <Experience/>
          <Skill_Interests/>
          <Members/>
      </div>
    </div>
  )
}

export default Group