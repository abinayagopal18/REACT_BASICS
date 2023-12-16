import React from 'react'
import ErrorBrondarieshero from './DAY7/ErrorBrondarieshero'
import Hero from './DAY7/Hero'
import TryCatch from './DAY7/TryCatch'
// import List from './DAY6/List'
// import ListProps from './DAY6/ListProps'
// import ListKeys from './DAY6/ListKeys'
// import ListObject from './DAY6/ListObject'
// import FloatingActionButtons from './MATRIAL UI/DemoUi'
export default function App() {
  return (
    <div>
     {/* <List/>
     <ListProps/>
     <ListKeys/>
     <ListObject/>
     <FloatingActionButtons/> */}
     <ErrorBrondarieshero>
      <Hero heroName = "IYER"></Hero>
     </ErrorBrondarieshero>
     <ErrorBrondarieshero>
      <Hero heroName = "GILL"></Hero>
     </ErrorBrondarieshero>
     <TryCatch player="SKY"/>
    </div>
  )
}
