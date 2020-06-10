import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import BLOG from "./abis/Blog.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
      blog: null,
      postCount: 0,
      posts: [],
    };

    this.convertObject = this.convertObject.bind(this);
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  convertObject (post) {
    var _id=post.id.toNumber();
    var _amount=post.amount.toNumber();
    return [_id,post.content,post.blog_creater,_amount];
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({
      account: accounts[0],
    });

    // address from abi,using network id
    // getting network id
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    console.log(this.state.account);
    const network_data = BLOG.networks[networkId]; //for address
    const network_address = network_data.address;

    if (network_data) {
      const blog = web3.eth.Contract(BLOG.abi, network_address); //the abi value and network_address from Blog.json
      const postCount_BN = await blog.methods.postCount().call();
      const postCount = postCount_BN.toNumber();

      //console.log(postCount);
      //console.log(blog)
      this.setState({
        blog: blog,
        postCount: postCount,
      });
      for (var i = 1; i <= postCount; i++) {
        var get_post = await blog.methods.posts(i).call();
        this.setState({
          posts: [...this.state.posts, this.convertObject(get_post)],
        });
        
      }

      this.setState({
        posts: this.state.posts.sort((a, b) => {
          return b - a;
        }),
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.account}<br />
        {this.state.postCount}<br />
        {this.state.posts}
      </div>
    );
  }
}

export default App;
