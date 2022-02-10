import profile from './profile.png';
import './App.css';
// import profile from './logo.svg'

function App() {
  return (
    <div >
      <div class="flex h-screen">
        <div class="m-auto">
          <div>
            <img src={profile} alt="Girl in a jacket" width="200" height="300"></img>
            <br></br>
            <h1 className="text-3xl font-sans BlinkMacSystemFont font-bold">
              Software Engineer
            </h1>
        
            <div>
              Name: Nunthawat
            </div>
            <div >
              Lastname: Lhasiw
            </div>
            <div>
              Nickname: Tao
            </div>
            <div>
              Birthday: 12 Jul 1996
            </div>
            <div>
              063114088
            </div>
            <div>
              https://www.linkedin.com/in/nunthawat-lhasiw-082655146/
            </div>
            <div>
              https://github.com/
            </div>
            <div>
              https://www.figma.com/
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
