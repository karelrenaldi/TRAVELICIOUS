class Button extends React.Component{
    render(){
        return(
            <div className = "button" onClick={()=>this.props.onClick(this.props.target)}>
                {this.props.text}
            </div>
        )
    }
}

class ImgButton extends React.Component{
    render(){
        return(
            <div className = {this.props.active? "button active" : "button"} onClick={()=>this.props.onClick(this.props.target)}>
                <img src={"img/"+this.props.src}>

                </img>
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}