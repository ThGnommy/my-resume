import React from 'react'
import './Title.css'

const title = (props) => {
    return (
        <div>
            <header>
                <h1>{props.name} <span>Resume</span></h1>
            </header>
        </div>
    )
}
export default title
