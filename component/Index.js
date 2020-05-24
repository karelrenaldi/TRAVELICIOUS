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

class Navigating extends React.Component{
    render(){
        if(this.props.home){
            return(
                <React.Fragment>
                    <div class="header">
                        <img src="img\index\header.png" alt="header"></img>
                    </div>
                    <div class="footer">
                        <img src="img\index\footer.png" alt="footer"></img>
                    </div>
                </React.Fragment>
            )
        }else{

        }
    }
}

class HomeButton extends React.Component{
    render(){
        <div class="home" onClick={()=>location.href("index.html")}>
            <img src="img\index\home-solid.svg" alt="home"></img>
        </div>
    }
}
ReactDOM.render(<Index/>,document.getElementById('app'));