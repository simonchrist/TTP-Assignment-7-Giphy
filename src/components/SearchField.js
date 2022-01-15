import React from 'react';
import axios from 'axios';


class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
        }
    }
//<--------------GifCard Implementation------------------>
    fetchGifs = async () => {
        let input = document.getElementById("gif").value;
        
        await axios
          .get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=vR6XY9gWaPKEgSDrp9whu5XAN8SOMbeD&rating=${document.getElementById("topic").value}`)
          .then(response => {
            this.state.gifs = response.data.data;
          })
        
        this.props.onSubmitSearch(this.state.gifs);
    }
    //<----------------------------Regular Search------------------------------>
    render() {
        return (
            <div className='text-center'>
                <div className='form-options'>
                    <select className="form-select" id='topic'>
                        <option value="funny">Funny</option>
                        <option value="top">Top</option>
                        <option value="new">New</option>
                    </select>
                    <input type="text" id="gif" className="form-control"/>
                    <button type="submit" className='submit-button' onClick={this.fetchGifs}>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchField;