import React from 'react'

export default function About(props) {
    return (
        <div  style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cumque maiores totam expedita, ea explicabo, optio rem, sequi culpa repellat necessitatibus quia deleniti earum minima doloremque placeat! Impedit sint, voluptate quam molestias tempore perferendis maiores.</p>
        </div>
    )
}
