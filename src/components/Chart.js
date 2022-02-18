import { Component } from "react";
import ChartRow from "./ChartRow";
import axios from "axios"
let url = "https://jsonplaceholder.typicode.com/users";

class Chart extends Component {
    constructor (){
        super();
        this.state = {moviesList:[]}
    }
    componentDidMount(){
        axios.get(url).then((res)=> {
            const data = res.data;
            console.log(res.data);
            this.setState({moviesList:data})
        })
    }
    render() {
        return (
       
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Año</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* <tr>
                                <th>1</th>
                                <th>Pelicula 1</th>
                                <th>2007</th>
                            </tr> */}
                            {this.state.moviesList.map((movie, i)=> <tr>
                                <th>1</th>
                                <th>{movie.name}</th>
                                <th>2007</th>
                            </tr> )}
                            <tr>
                                <th>1</th>
                                <th>Pelicula 2</th>
                                <th>2007</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>Pelicula 3</th>
                                <th>2007</th>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Año</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Chart;