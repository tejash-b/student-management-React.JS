import img from './img/home.jpg';

const Home = () => {
    return ( 
        <div className="home">
        <img src= {img} alt="home"></img>
        <div class="img-content">
            
            Welcome,<br/>
            This is just a simple project to handel the student details<br/> where Admin can View, Add, Edit and Delete the Student Details.
              
        </div>
        </div>
     );
}
 
export default Home;