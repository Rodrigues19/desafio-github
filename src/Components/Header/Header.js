import React, { Component } from "react";
import axios from"axios";
import "./Header.css"
import img from "../img/github-logo.jpg";



class Header extends Component {

   setSearch = (event) => {
    this.props.setSearch(event.target.value)
    
   }

    render() {

        return(
            <div>
                <header id="main-header">
                    <img src={img} alt="logo" className='img' />
                    <input type="text" name="Pesquisar" placeholder="Pesquisar" className="input-pesquisa" onChange={this.setSearch}></input>
            
                    <form>
                        <select className="menu">
                            <option value="users">Usuários</option>
                            <option value="repositories">Repositories</option>
                            <option value="issuesetopics">Issues e Topics</option>
                        </select>
                    </form>
                    
                </header>

                
             </div>
        )
    }
}

export default Header;