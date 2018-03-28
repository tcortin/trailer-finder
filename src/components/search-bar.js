import React,{Component} from "react"

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText:"", 
            placeHolder:"Rechercher",
            intervalBeforeRequest:1000,
            lockRequest: false
    }
    }
    render(){
        return (
        <div className="row">
            <div className="col-md-8">
                <input type="text" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                <button onClick={this.handleOnClick.bind(this)}>Go</button>
            </div>
        </div>
        );
    }
    handleChange(e){
        this.setState({searchText:e.target.value});
        if(!this.state.lockRequest){
            this.setState({lockRequest: true})
            setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRequest)
        }
    }
    handleOnClick(e){
        this.search();
    }
    search(){
        this.props.callback(this.state.searchText);
        this.setState({lockRequest: false})
    }
}

export default SearchBar;