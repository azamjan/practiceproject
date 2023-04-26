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
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
)

}
export default Blog;