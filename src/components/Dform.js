import React, { Component } from 'react'
import PropTypes from 'prop-types'
const firstName = prompt("type your first name");

export default class Dform extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                 <p> Hello {firstName || "Anonymous"} </p>
       <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
       {!firstName && (
         <form>
           <p> Type your name here </p>
           <input type="text" />
         </form>
       )}
            </div>
        )
    }
}
