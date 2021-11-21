import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

class DishDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDish: null
        }
    }

    render() {
        return (
            this.props.dish && this.props.dish.comments.map(item => {
                return (
                    <div key={item.id} className="col-12">
                        <b>{item.author}</b>
                        <p>{item.comment}</p>
                    </div>
                )
            })
        )
    }
}

export default DishDetail