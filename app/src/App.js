import { connect } from 'react-redux'
import './App.css';
import GifList from './components/GifList';
import GifForm from './components/GifForm'
import { useEffect } from 'react'
import { getGifs } from './actions'


function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = "";
  const { loading, error, getGifs } = props;

  // thunk
  useEffect(()=> {
    getGifs('dogs');
    // props.fetchStart();
    // axios.get(`https://api.giphy.com/v1/gifs/search?api_key=eF68i1SpJhoVnYQRTDKYcXdtpZlGeJDP&q=cats`)
    // .then(res=>{
    //   props.fetchSuccess(res.data.data)
    // })
  }, []);



  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm/>


      {
    (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

// const mapActionsToProps = () => {
//   return {
//    getGifs
//   }
// }

export default connect(mapStateToProps, {getGifs})(App);
