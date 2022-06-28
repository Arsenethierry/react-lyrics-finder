export function ContextController({ children }) {
    let intialState = {
      track_list: [],
      heading: ""
      // dispatch: action => this.setState(state => reducer(state, action))
    };
  
    const [state, setState] = useState(intialState);
  
    useEffect(() => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
        )
        .then(res => {
          // console.log(res.data);
          setState({
            track_list: res.data.message.body.track_list,
            heading: "Top 10 Tracks"
          });
        })
        .catch(err => console.log(err));
    }, []);
  
    return (
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
  }