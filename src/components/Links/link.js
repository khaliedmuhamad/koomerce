import React from 'react'

function Link(props) {
    return (
        <a href={props.href} className={props.class} target={props.target} style={props.style}>{props.text} {props.children}</a> 
    )
}

export default Link;
