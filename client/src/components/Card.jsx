import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
    render() {
        return(
            <Link to={"/detail/" + this.props.id}>
            <div key={this.props.id}>
                <h2>{this.props.name}</h2>
                <img src={this.props.img} alt={this.props.img}/>
                {/* {this.props.types.map(t => (
                    <h4>{t}</h4>
                ))} */}
                <h4>{this.props.types}</h4>
            </div>
            </Link>
        )
    }
}

export default Card