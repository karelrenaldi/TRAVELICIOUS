class BlogWindow extends React.Component{
    constructor(props){
        super(props);
        this.changeSpotlight = this.changeSpotlight.bind(this);
    }
    state={
        spotTitle : "Nasi Goreng",
        spotImg : "default.jpg",
        spotDesc : "lorem ipsum"
    }
    changeSpotlight(title){
        // console.log(title);
        let target = this.props.data.filter(item=>item.name == title)
        // console.log(target);
        this.setState({
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
                    image = {this.state.spotImg}
                    text = {this.state.spotDesc}
                />
                <Gallery
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
                    <img src={"img/"+this.props.image}></img>
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
            <div className="card" onClick={()=>this.props.onClick(this.props.title)}>
                <div className="card-img">
                    <img src={"img/"+this.props.image} alt=""></img>
                </div>
                <div className="card-title">{this.props.title}</div>
            </div>
        )
    }
}