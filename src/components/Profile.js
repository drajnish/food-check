import React from 'react';
import { API_GITHUB } from '../constants';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Rajnish Deshmukh',
        bio: 'Frontend Developer',
      },
    };
  }

  async componentDidMount() {
    const githubApi = await fetch(API_GITHUB);
    const data = await githubApi.json();
    this.setState({
      userInfo: data,
    });
  }

  render() {
    const { name, bio, avatar_url } = this?.state?.userInfo;
    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-2/3 text-center shadow-lg">
          <h1 className="font-bold text-3xl my-2">About Me</h1>
          <img src={avatar_url} alt={name} className="w-32 rounded-full my-5" />
          <h1>{name}</h1>
          <p className="text-[#3e4152] font-light text-sm">{bio}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
