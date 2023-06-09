import '../styles/Posted.css'
import '../styles/Link.css'
import './Leftsection'
import LeftSelection from './Leftsection';
import React, { useEffect, useState } from "react";
import PostForm from './PostForm';
import Post from './Post';
import PostList from './PostList';
// import "./PostListStyle.css";


function Posted() {
// the state
    const [post,setPost] = useState([])
    // const [allPost, setAllPost ]= useState([])
    
    
// temp state
    const[searchChat,setSearchChat]=useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    // // temp state
    // const [create,setCreate] = useState('');

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (((title) && (description))||((title) && (description)&& (selectedFile)) ) {
        // Perform upload logic here, such as sending the file to a server
        console.log('Uploading file:', selectedFile);
        togglePopup()
        postT()
        } else {
        console.log('No file selected.');
        }
    };
    // const [attachment, setAttachment]=useState("");

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

// LOGIC -ADD, DELETE, LIKE, COMMENT

    // Add Post
  const postT = () => {
    if((title) && (description)){
      let num = post.length +1;
      let newEntry = { id:num, title: title, description: description, selectedfile : selectedFile}
      setPost([...post, newEntry])
      setTitle('');
      setDescription('');
      setSelectedFile(null);
    }
  } 

    // Remove
    const deleteP = (id) => {
        let createTasks = post.filter ( p => p.id !== id)
        setPost(createTasks);
    } 

    // Latest
    const FilterLatest = (id) =>{
        
    }
    // Like
    const FilterLike = () =>{

    }
    

    return(<div>
        <div class ="Posted">            
        <LeftSelection></LeftSelection>
        <div class = "right-posted">
            <div class="header-posted">
                <div class="yourpost"> TIMELINE</div>
            </div>
            <div class = "container-posted">
                <div class="container-header-posted">
                    {/* <div class="Welcome-posted">
                        <h1>WELCOME!</h1>
                    </div>
                    <div class="username-posted">
                        asep

                    </div> */}

                    {/* <div class="search-posted">
                    <form>
                        <div class="search-your-music-chat">
                            Search your music chat!
                        </div>
                        <div class="search-music-chat">
                        
                            <span class ="search-bar-container">
                            <input
                                type="text"
                                className="search-bar"
                                value={searchChat}
                                onChange={(e) => setSearchChat(e.target.value)}
                                placeholder="Search"
                            /></span>
                            <span class ="search-bar-container2">
                            <button type="submit" class="search-btn">Search</button></span>
                          
                        </div>
                        </form> /
                    </div> */}
                    {/* <div class="Filter-NewPost">
                                <button
                                    className="newpost__btn "
                                    onClick={togglePopup}    
                                >
                                    New Post

                                </button>
                                {isOpen && (
                                    <div className="popup">
                                    <PostList
                                    title={title}
                                    setTitle= {setTitle}
                                    description = {description}
                                    setDescription ={setDescription}
                                    handleFileSelect = {handleFileSelect}
                                    togglePopup = {togglePopup}
                                    handleUpload = {handleUpload}
                                    />
                                 

                                    </div>
                                )}
                        </div> */}
                    <PostForm/>
                    <PostList/>
                </div>
    
            </div>
            
        </div>
       
        </div>
        {/* </section> */}
        {/* <section class ="two-posted">
        <div class ="two-posted-right">
                AYAM
        </div>
        
        </section> */}



    </div>)


}

export default Posted; 
