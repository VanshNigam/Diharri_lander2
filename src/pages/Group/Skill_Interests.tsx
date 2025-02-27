import React from 'react'

function Skill_Interests() {
  return (
    <section className="bg-white p-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-black">Skills & Interests</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          {["Web Development", "Software Development", "Python", "UI/UX Design", "JavaScript", "Wordpress", "React", "Wireframing", "User Research"].map(skill => (
            <span
              key={skill}
              className="px-6 py-3 font-semibold border border-blue-500 text-black rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
  )
}

export default Skill_Interests;