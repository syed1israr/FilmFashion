import axios from "axios";


const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        
        accept: 'application/json',
        Authorization:'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGFhMzhlZWZiMGMxNDBhNmU0MDBiMDlkNTYyMTcxZSIsInN1YiI6IjY1ZDE5ZWYxNmVlY2VlMDE2NzM4MmIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyx7OIWJxNOSjco-iFLIWxBRm2KcWvLKub6-2zYKKk'
      }
      
})



export default instance;