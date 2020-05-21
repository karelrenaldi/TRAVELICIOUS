class WorldMap extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="map">
                    <div id="world-map"></div>
                </div>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<WorldMap/>,document.getElementById('app'));