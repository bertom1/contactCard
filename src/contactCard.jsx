import React from "react"
import PropTypes from 'prop-types'
class ContactCard extends React.Component {

    render() {
        return <h1>
                Name: {this.props.name} <br></br>
                Email: {this.props.email} <br></br>
                phone: {this.props.phone} <br></br>
                Work phone: {this.props.workphone}
            </h1>
    } 
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    workphone: PropTypes.number
}
export default ContactCard;