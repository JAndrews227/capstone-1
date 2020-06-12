import React, {Component} from 'react';
import Select from 'react-select';
import Data from '../Data/data.json';


const searchList = Data.map(
    
    ( { title } ) => {
        return{
        
        
            value: title,
            label: title
            
        }
    }
);

class SearchBar extends Component {
    state = {
        selectedOption: null,
    }

    handleChange = selectedOption => {
        this.setState ({ selectedOption })
    }

    render() {
        return (

            <div className='bar'>
                    <Select
                        placeHolder="What's Your Spirit....?"
                        value={this.selectedOption}
                        options={searchList}
                        onChange={this.handleChange}
                        openMenuOnClick={false}
                    />

            </div>
        )


}}

export default SearchBar;




