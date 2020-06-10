pragma solidity ^0.5.0;

contract Blog{
    // map - posts
    // struck posts ka - id ,content, address, amount
    // events - Post Created- use msg.sender
    //event Post tipped- someone can tip a post
    uint public postCount = 0;

    struct POST{
        uint id;
        string content;
        address payable blog_creater;
        uint amount;
    }

    mapping(uint => POST) public posts;


    constructor () public{
        postCount += 1;
        posts[postCount] = POST(1,"First Temporary Post",msg.sender,0);
    }
    
    event POST_CREATED(
        uint id,
        string content,
        address payable blog_creater,
        uint amount
    );

    event POST_TIPPED(
        uint id,
        string content,
        address payable blog_creater,
        uint amount
    );

    function create_post(string memory _content) public {
        require(bytes(_content).length > 0,"Please enter a valid Blog Post");
        postCount++;
        posts[postCount] = POST(postCount,_content,msg.sender,0);
        emit POST_CREATED(postCount,_content,msg.sender,0);
    }

    function tip_post(uint _id) public payable{
        require(_id>0 && _id <= postCount,"Haha");
        address(posts[_id].blog_creater).transfer(msg.value);
        posts[_id].amount += msg.value;
        emit POST_TIPPED(postCount,posts[_id].content,posts[_id].blog_creater,posts[_id].amount);
    }
    //rto vehicle 
}