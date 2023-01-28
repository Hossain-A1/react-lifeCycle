import React from 'react'
import ParentComp from './components/ParentComp';
import LifeCycleMount from './components/LifeCycleMount';
import LifecycleUpdate from './components/LifecycleUpdate';

const App = () => {
  return (
    <>
      {/* <LifeCycleMount/> */}
      {/* <LifecycleUpdate/> */}
    <ParentComp/>
    
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga sequi esse voluptate reprehenderit ipsam! Dolorum veniam iure tempora, fugit omnis ullam atque assumenda temporibus aliquam ut reprehenderit suscipit eum!</p>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In numquam similique hic et officia ducimus architecto error debitis ut explicabo, dolorem rerum modi enim laborum quia ipsum. At, culpa minus.</p>
    </div>
    </>
  )
}

export default App