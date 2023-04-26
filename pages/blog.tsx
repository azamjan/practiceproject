import {Header, Footer} from '@/components'
import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });
return (
    <>
    < Header />
    <h1> Blog Page</h1>
    < Footer />
    <p>You clicked {count} times</p>
        <br />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <br />
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
)

}
export default Blog;