import React, {Component} from "react";




export default class Perfil extends Component{

    constructor() {
        super();
        this.state = {
            user: {},
        }
    }

    email;

    componentDidMount() {
        const token =  localStorage.getItem('token');
        var url = 'http://localhost:8000/api/usuarios';
        console.log(token);
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
            },

        })
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw new Error("Oops ha ocurrido un error");
            })
            /*.then(ususarios => console.log(ususarios))*/
            .then( user => this.setState({user}))
            .catch(e => console.log(e));

    }



    render() {

        const {user} = this.state;

        return (
            <div className="Lineas">
                <h1>Perfil de usuario</h1>

            </div>
        );
    }

}