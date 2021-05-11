import img from './img/home.jpg';

const Home = () => {
    return ( 
        <div className="home">
        <img src="https://images.unsplash.com/photo-1596633608169-2ee5f4ed60e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="home"></img>
        <div className="img-content">
            
            Welcome,<br/>
            This is just a simple project to handel the student details<br/> where Admin can View, Add, Edit and Delete the Student Details.
              
        </div>
        </div>
     );
}
 
export default Home;