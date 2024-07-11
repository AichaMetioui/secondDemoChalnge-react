import { useState } from "react";

function Home() {
    const [posts, setPosts] = useState([]);
    const [count , setCount]=useState(0);


    function PostFun() {
        const result = document.getElementById("inputPost").value;
        document.getElementById("inputPost").value = ""

       
        setPosts([...posts,result]);
        console.log(result)


    }

    function VoteFun() {
        setCount(count+1)


    }
    return (

        <div>

            <h1>Welcome Damin signh</h1>
            <p>Post on Reddit: </p>
            <input type="text" id="inputPost" />
            <button onClick={PostFun}>Post</button>
            <hr />
            <br />
            <br />
            
            
            {posts.map((post) => (<div >
                <p>{post} 
                    <br />
                    <h5> Uploader: {count} Upvotes</h5>
                </p>
                <button onClick={VoteFun}>Upvote</button></div>
            ))}

        </div>
    )
}


export default Home;