class Navigating extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Backdrop/>
                <HomeButton page={this.props.page}/>
            </React.Fragment>
        )
    }
}

// class NavBar extends React.Component{
//     redirect(n){
//         location.href = n;
//     }
//     render(){
//         return(
//             <nav>
//                 <div className="navbar">
//                     <div className={this.props.page=='map'?"link active":"link"} onClick={()=>this.redirect("map.html")}>
//                         MAP
//                     </div>
//                     <div className={this.props.page=='map'?"link":"link active"}onClick={()=>this.redirect("itinerary.html")}>
//                         ITINERARY
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

class HomeButton extends React.Component{
    constructor(props){
        super(props);
        this.backHome = this.backHome.bind(this);
    }

    backHome(){
        location.href = "index.html";
    }

    render(){
        return(
            <div className="home bottomleft" onClick={()=>this.backHome()}>
                <img src="img\index\home-solid.svg" alt="home"></img>
            </div>
        )
    }
}