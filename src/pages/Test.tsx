import Link from 'next/link';
import React from 'react'

function Test() {
  return (
    <div>
        <Link href="EmployeeProfile" className="text-gray-600 font-bold hover:text-blue-600">EmployeeProfile</Link>
        <Link href="Group" className="text-gray-600 font-bold hover:text-blue-600">Group</Link>
        <Link href="employer_profile" className="text-gray-600 font-bold hover:text-blue-600">employer_profile</Link>
    </div>
  )
}

export default Test;