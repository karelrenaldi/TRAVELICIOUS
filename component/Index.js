class LinkHalf extends React.Component{
    render(){
        return(
            <a href={this.props.target} class="half">
                <div class="button">
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
                <div class="splashscreen">
                    <div class="title">TRAVELICIOUS</div>
                    <div class="desc">YOUR BEST TRAVEL PARTNER</div>
                    <div class="buttonContainer">
                        <LinkHalf target={"map.html"} text={"Explore The World!"}/>
                        <LinkHalf target={"itinerary.html"} text={"Create Your Itinerary!"}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('app'));