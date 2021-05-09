import React, { useState } from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import { location } from "../../../utils/preferences";
import Input from "../input";
import './styles.scss';

export interface LocationFinderProps {
    location: string;
    handleChange: (name: string, value: string) => void;
    locale: string;
}

export const LocationFinder: React.FC<LocationFinderProps> = (props) => {
    const [address, setAddress] = useState('');
    const handleChange = (address: any) => {
        setAddress(address);
    }
    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <Input value={address} name="location" placeholder="Enter City Name/Pincode"
                        label={location.title.english} sub_label={props.locale !== 'english' && location.title[props.locale]}
                        inputClass="container-input" className="input" autocomplete="off"
                        {...getInputProps()}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            // inline style for demonstration purpose
                            const style = suggestion.active ? { backgroundColor: '#42a5f5', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div className="input-suggestion"
                                    {...getSuggestionItemProps(suggestion, {
                                        key: suggestion.id,
                                        style,
                                        onClick: () => props.handleChange('location', suggestion.description)
                                    })}>

                                    <img alt="marker" src={`${process.env.PUBLIC_URL}/assets/location_marker.png`} />
                                    {suggestion.description}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
}