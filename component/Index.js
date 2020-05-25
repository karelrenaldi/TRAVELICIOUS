class LinkHalf extends React.Component{
    render(){
        return(
            <a href={this.props.target} className="half">
                <div className="button">
                    {this.props.text}
                </div>
            </a>
        )
    }
}

class Index extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="splashscreen">
                    <div className="title">TOURTIZING</div>
                    <div className="desc">MAKE YOUR TOUR APPETIZING</div>
                    <div className="buttonContainer">
                        <LinkHalf target={"map.html"} text={"Explore The World!"}/>
                        <LinkHalf target={"itinerary.html"} text={"Create Your Itinerary!"}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class Backdrop extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="header">
                    <img src="img\index\header.png" alt="header"></img>
                </div>
                <div className="footer">
                    <img src="img\index\footer.png" alt="footer"></img>
                </div>
            </React.Fragment>
        )
    }
}