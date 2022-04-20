import React, { Component } from 'react';

class Header extends Component {
    
    NavBarItem({data, setActive, active}) {
        return(
            <ul className='navbar-nav'>
                {data.map(el => (
                    <li className="nav-item active">
                        <p className='navbar-text h7 p-3' 
                            style={{fontWeight: 600,color: el.split(' ').join('').toLowerCase()===active? "#ffffff":""}}
                            role={"button"} 
                            onClick={()=>setActive(el.split(' ').join('').toLowerCase())}
                        >
                            {el}
                        </p>
                    </li>
                ))}
            </ul>
        )
    }

    Profile({username, setUsername}) {
        return(
            <div className='p-3'>
                <span className='p-2 text-white'>{username}</span>
                <div className='btn btn-primary' onClick={(e)=>setUsername(null)}>
                    Logout
                </div>
            </div>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <p className="navbar-brand p-3" style={{fontSize: 25}}>Toll</p>
                <div className="collapse navbar-collapse">
                    <this.NavBarItem 
                        setActive={this.props.setActive}
                        active={this.props.active}
                        data={this.props.username==="admin"?
                            ["Booth Transaction", "Booth Master", "Company Name", "Toll Name", 
                            "Journey Master", "Vehicle Master", "Toll Plaza Fee Rules", "Users"]
                            :["Booth Transaction"]} />

                </div>
                <this.Profile
                    username={this.props.username}
                    setUsername={this.props.setUsername} />
            </nav>
        );
    }
}

export default Header;