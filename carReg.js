// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
//GitHub=CarReg
//CardList=CarPeopleList
//Card=Car
//make carreg.com or a place wher the car reg and owners are 
const carPeopleList = (props) => (
	<div>
  	{props.profiles.map(profile => <Car key={profile.id} {...profile}/>)}
	</div>
);

class Car extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="carreg-profile">
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    //const resp = await axios.get(`https://api.carreg.com/users/${this.state.userName}`);
    //need to call/get data in here? 
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="CarReg username" 
          required 
        />
        <button>Add car</button>
    	</form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The Car Reg App" />,
  mountNode,
);