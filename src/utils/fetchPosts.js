export const fetchPosts = async(page,limit)=>{
try {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    if(!posts.ok){
        throw new Error('Error fetching posts',posts.statusText)
    }

    const response = await posts.json();
    return response;
} catch (error) {
    console.log(error)
    
}
}