import React, { Component } from "react";
import axios from"axios";
import "./Card.css"

class Card extends Component {
    constructor(props){

        super(props);
        this.state = {
            github: [],
            login: "",
            data: "",
            avatar_url: {},
            name: "",
            company: "",
            location: "",
            bio: "",
            public_repos: "",
            followers: ""
        };
        this.getGithub = this.getGithub.bind(this);
    }

    //https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy

    componentDidMount(){
        this.getGithub();
    }

   

    async getGithub(){
        const response = await axios.get(`https://api.github.com/search/users?q=${this.props.search}`)
        let e = [];
        response.data.items.map(element => {
            e = [...e, element ];
        })
        this.setState({ github: e });
        
    }

    render(){
        if(this.state.github.length === 1){
            const result = this.state.github[0];
            return(
                <div className="card">
                    <img src={result.avatar_url} alt="foto do usuario" className="card-img" />
    
                    <div className="informations"> 
                        <p><h1>{result.name}</h1></p>
                        <p>{result.login}</p>
                        <p>{result.location}, {result.company}</p>
                    </div>
    
                    <div className="biography">
                        <h1>Biografia</h1>
                        <p>{result.bio}</p>
                   
                    </div>
    
                    <div className="cardm">
                        <div className="cardmenor">{result.public_repos} Repositórios Públicos</div>
                        <div className="cardmenor">{} Repositórios Privados</div>
                        <div className="cardmenor">{result.followers} Seguidores</div>
                    </div>
                </div>
            )
        } else {
            return(
                <h1>Não foi encontrado</h1>
            )
        }
        
    }

   

};


export default Card;