import PropTypes from 'prop-types'

import "./Button.css"

const Button = ({color,text,onClick}) => {

    
    return( 
    <button
        onClick = {onClick} //somehow can be used to call a function in the calling body although you are an embedded class
        style = {{backgroundColor:color}} 
        className = 'btn' //this is done with reference to index.css class
    >
            {text}
    </button>
    )
}
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
