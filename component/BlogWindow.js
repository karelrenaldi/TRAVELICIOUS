class BlogWindow extends React.Component{
    constructor(props){
        super(props);
        this.changeSpotlight = this.changeSpotlight.bind(this);
    }
    state={
        spotKey : "-1",
        spotTitle : "Nasi Goreng",
        spotImg : "default.jpg",
        spotDesc : "lorem ipsum"
    }
    changeSpotlight(title, key){
        // console.log(title);
        let target = this.props.data.filter(item=>item.name == title)
        // console.log(key);
        // console.log(target);
        this.setState({
            spotKey : key,
            spotTitle : target[0].name,
            spotImg : target[0].img,
            spotDesc : target[0].desc
        })
    }
    render(){
        return(
            <div className = "blog-container">
                <div className = "title">{this.props.title}</div>
                <SpotLight
                    country = {this.props.country}
                    image = {this.state.spotImg}
                    text = {this.state.spotDesc}
                />
                <Gallery
                    spotKey = {this.state.spotKey}
                    country = {this.props.country}
                    data = {this.props.data}
                    onClick = {this.changeSpotlight}
                />
            </div>
        )
    }
}

class SpotLight extends React.Component{
    render(){
        return(
            <div className="spotlight">
                <div className="spot-img">
                    <img src={`img/${this.props.country}/${this.props.image}`}>

                    </img>
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
        let component=[];
        this.props.data.map((item, index) =>{
            component.push(
                <Card
                    spotKey = {this.props.spotKey}
                    country = {this.props.country}
                    cardKey = {index}
                    key = {index}
                    image = {item.img}
                    title = {item.name}
                    onClick = {this.props.onClick}
                />
            )
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
            <div className={this.props.spotKey==this.props.cardKey? "card active" : "card"} onClick={()=>this.props.onClick(this.props.title, this.props.cardKey)}>
                <div className="card-img">
                    <img src={`img/${this.props.country}/${this.props.image}`} alt="Something went wrong"></img>
                </div>
                <div className="card-title">{this.props.title}</div>
            </div>
        )
    }
}