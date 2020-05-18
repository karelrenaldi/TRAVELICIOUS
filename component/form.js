class Button extends React.Component{
    render(){
        return(
            <div className = "button" onClick={()=>this.onClick(this.state.target)}>
                {this.state.text}
            </div>
        )
    }
}