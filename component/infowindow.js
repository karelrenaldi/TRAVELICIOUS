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
        let countryFound = countryList.includes(this.props.country);
        let brief = countryData.filter(countrySet=> countrySet.name==this.props.country)[0];
        let data = {
            "country" : this.props.country
        }
        if(countryFound){
            data = {
                "country" : brief.name,
                "id" : brief.id,
                "desc" : brief.desc,
                "place" : place.filter(country => country.country == brief.name)[0].place,
                "food" : food.filter(country => country.country == brief.name)[0].food
            }
        }
        if(this.state.mode == 'index'){
            return(
                <React.Fragment>
                    <InfoContainer
                        valid = {countryFound?true:false}
                        country = {this.props.country}
                        mode = {this.state.mode}
                        onClick = {this.changeMode}
                    />
                </React.Fragment>
            )
        }else{
            if(countryFound){
                return(
                    <React.Fragment>
                        <InfoContainer
                            country = {this.props.country}
                            mode = {this.state.mode}
                            onClick = {this.changeMode}
                            valid = {true}
                        />
                        <BlogWindow
                            country = {this.props.country}
                            data = {this.state.mode=='food'?data.food:data.place}
                            title = {this.props.country+(this.state.mode=='food'?" Must Try Food!":" Must Visit Place!")}
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
                            valid = {false}
                        />
                    </React.Fragment>
                )
            }
        }
    }
}

class InfoContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.valid){
            return(
                <div className = "info-container">
                    <div className="cross" onClick={()=>{
                        removeModal("info");   
                        setTimeout(()=>{
                            this.props.onClick('index');
                        },1000)
                    }}>X</div>
                    <div className={this.props.valid?"country":"country failed"}>
                        {this.props.country}
                        <br></br>
                        {this.props.valid?"":"Sorry we don't have any data yet"}
                    </div>
                    <div className="button-container">
                        <ImgButton 
                            onClick={this.props.valid? this.props.onClick : this.doNothing}
                            text={"5 Must Try Food!"}
                            target={"food"}
                            src={"food.jpg"}
                            active={this.props.mode == "food"}
                        />
                        <ImgButton 
                            onClick={this.props.valid? this.props.onClick : this.doNothing}
                            text={"5 Must Visit Place!"}
                            target={"place"}
                            src={"place.jpg"}
                            active={this.props.mode == "place"}
                        />
                    </div>
                </div>
            )
        }else{
            return(
                <div className = "info-container">
                    <div className="cross" onClick={()=>{
                        removeModal("info");   
                        setTimeout(()=>{
                            this.props.onClick('index');
                        },1000)
                    }}>X</div>
                    <div className={this.props.valid?"country":"country failed"}>
                        {this.props.country}
                        <br></br>
                        {this.props.valid?"":"Sorry we don't have any data yet"}
                    </div>
                </div>
            )
        }
    }
}