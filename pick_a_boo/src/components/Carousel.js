import React, { Component } from 'react'

export default class Carousel extends Component {

    state= { 
        active: 0
    }

    static defaultProps={
        media: ['https://res.cloudinary.com/dci7rk8xe/image/upload/v1631432062/react_myboo/no-image-300X300_fu0uq0.png']
    }

    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index //turns a string into a number
        })
    }
    
    render() {
        const { active } = this.state;
        const photos = this.props.media.length?
            this.props.media.map((item) => { return item.medium? item.medium: item.full })
            : [];
        return (
            <div className="carousel">
                <img src={photos[active]} alt="primary animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            key={photo} src={photo}
                            className = { index === active ? 'active' : '' }
                            alt='animal thumbnail'
                            data-index = {index}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
