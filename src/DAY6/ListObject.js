import React from 'react'

export default function ListObject() {
const company = [{ID:1, TEAM:"BTS", LEADER:"RM"},
                {ID:2, TEAM:"BLACKPINK", LEADER:"JISOO"},
                {ID:3, TEAM:"EXO", LEADER:"SUHO"}]

const Display = company.map((member) => <li key={member.ID}> {member.ID} {member.TEAM} {member.LEADER}</li>)
  return (
    <div>
      <ul type ="none">
      {Display}
      </ul>
    </div>
  )
}
