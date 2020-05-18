class InfoWindow extends React.Component{
    constructor(props){
        super(props);

    }

    state={
        country : this.props.country,
        mode : 'index',
    }

    render(){
        return(
            <div className = "infoWindow">
                <div className = "info-container">
                    <div class="cross">X</div>
                    <div class="country">{this.state.country}</div>
                    <div class="button-container">
                        <div class="button">
                            Place to Visit
                        </div>
                        <div class="button">
                            Food to eat
                        </div>
                        <div class="button">
                            Culture
                        </div>
                        <div class="button">
                            Do's and Dont's
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class BlogWindow extends React.Component{
    constructor(props){
        super(props);
        this.changeSpotlight = this.changeSpotlight.bind(this);
    }
    state={
        data : this.props.data,
        title : "Indonesia best food",
        image : "default.jpg",
        text : "lorem ipsum"
    }
    changeSpotlight(title){
        target = data.filter(item=>item.title == title)
        this.setState({
            image : target.image,
            text : target.text
        })
    }
    render(){
        return(
            <div className = "blogWindow">
                <div className = "blog-container">
                    <div className = "cross">X</div>
                    <div className = "title">{this.state.title}</div>
                    <Spotlight
                        image = {this.state.image}
                        text = {this.state.text}
                    />
                    <Gallery
                        data = {this.state.gallerydata}
                        onClick = {this.changeSpotlight}
                    />
                </div>
            </div>
        )
    }
}

class SpotLight extends React.Component{
    render(){
        return(
            <div className="spotlight">
                <div className="spot-img">
                    <img src={this.props.image}></img>
                </div>
                <div className="spot-text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

class Gallery extends React.Component{
    render(){
        let component = this.props.data.map((item, index) =>{
            <Card
                image = {item.image}
                title = {item.title}
                onClick = {this.props.onClick}
            />
        })
        return(
            <div className="gallery">
                {component}
            </div>
        )
    }
}

class Card extends React.Component{
    render(){
        return(
            <div className="card" onClick={()=>this.props.onClick(this.props.title)}>
                <div className="card-img">
                    <img src={this.props.image} alt=""></img>
                </div>
                <div class="card-title">{this.props.title}</div>
            </div>
        )
    }
}