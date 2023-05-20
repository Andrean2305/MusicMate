const PostTask =({title, setTitle, description,
    setDescription,handleFileSelect, togglePopup, handleUpload
    } )=> {
        return(
            <>
            <h2>Title</h2>
                <input
                    type="text"
                    className="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <h3>Description</h3>
                <input
                    type="text"
                    className="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <input type="file" onChange={handleFileSelect} />
                <div class = "popup-footer">
                                    
                                    <button onClick={togglePopup}>Close</button>

                                    <button className="post-tweet" onClick={handleUpload}>Upload</button>
                </div>

            </>

        )
}
export default PostTask;