import'./background.scss';
import Welcome from '../Welcome/Welcome';
function Background() {
  return (
    <div id='BG'>

      <Welcome/>
      {/* <Home/> */}
    <div className="blocker">Landscape Orientation is not supported in this page</div>


    </div>
  )
}

export default Background