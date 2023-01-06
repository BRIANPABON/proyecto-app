import { useState, useEffect } from 'react';

import './App.css';

export default function App() {
  const [test, setTest] = useState();
  const [test2, setTest2] = useState();

  useEffect(() => {
    console.log('effect was called')

    setTest2('test2');
    console.log('set test 2 called')

    setTest('test');
    console.log('set test 1 called')
  }, [])

  console.log('render')
  return <div>Test</div>;
}