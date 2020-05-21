class InfoWindow extends React.Component{
    constructor(props){
        super(props);
        this.changeMode = this.changeMode.bind(this);
    }

    state={ 
        mode : 'index',
    }

    changeMode(target){
        this.setState({
            mode : target,
        })
    }

    render(){
        let data = {
            country : "Indonesia",
            place : [{
                name : "bali",
                img : "bali.jpg",
                desc : "Known as the one of the most beautiful island in Indonesia"
            },
            {
                name : "Kepulauan seribu",
                img : "pulauseribu.jpg",
                desc : "Thousand island, thousand journey awaits!"
            }],
            food : [{
                name : "nasi goreng",
                img : "nasigoreng.jpg",
                desc : "Indonesian signature friend rice"
            },
            {
                name : "Rendang",
                img : "rendang.jpg",
                desc : "The best dish in the world!"
            }]
        }
        if(this.state.mode == 'index'){
            return(
                <React.Fragment>
                    <InfoContainer
                        country = {this.props.country}
                        mode = {this.state.mode}
                        onClick = {this.changeMode}
                    />
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <InfoContainer
                        country = {this.props.country}
                        mode = {this.state.mode}
                        onClick = {this.changeMode}
                    />
                    <BlogWindow
                        data = {this.state.mode=='food'?data.food:data.place}
                        title = {this.props.country+(this.state.mode=='food'?" Must Try Food!":" Must Visit Place!")}
                    />
                </React.Fragment>
            )
        }
    }
}

class InfoContainer extends React.Component{
    render(){
        return(
            <div className = "info-container">
                <div className="cross" onClick={()=>{
                    this.props.onClick('index'); 
                    removeModal("info");                          
                }}>X</div>
                <div className="country">{this.props.country}</div>
                <div className="button-container">
                    <ImgButton 
                        onClick={this.props.onClick}
                        text={"5 Must Try Food!"}
                        target={"food"}
                        src={"food.jpg"}
                        active={this.props.mode == "food"}
                    />
                    <ImgButton 
                        onClick={this.props.onClick}
                        text={"5 Must Visit Place!"}
                        target={"place"}
                        src={"place.jpg"}
                        active={this.props.mode == "place"}
                    />
                </div>
            </div>
        )
    }
}