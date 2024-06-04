import React, { useState} from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekday from 'dayjs/plugin/weekday';
import { Button } from 'react-bootstrap'
import { useLocation, useParams } from "react-router-dom";
import NoButton from '../../components/no-button';

dayjs.extend(customParseFormat);
dayjs.extend(weekday);

const CustomizeName = () => {
    const { name } = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type')
    const dateParams = queryParams.get('when')
    const convertDate = () => {
        const day = dateParams.substring(0, 2);
        const month = dateParams.substring(2, 4);
        const year = dateParams.substring(4, 8);

        const date = dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD');

        return date.format('dddd, MMMM D');
    }
    
    const [isYes, setIsYes] = useState(false)

    const onHandleYes = () => {
    setIsYes(true)
    }
    const DateType = () => {
        return (
            <>
                <p><b>{ name },</b > would you join me for a delightful evening on { convertDate() }?</p>
                <img src="https://media.tenor.com/ykO-9BGJFDsAAAAi/bubududu-panda.gif" alt="Animated GIF" />
    
            </>
        )
    }
    const GirlfriendType = () => {
        return (
            <>
                <p>
                    <b>{ name },</b>, would you do me the honor of being my girlfriend?
                </p>
                
                <img src="https://media.tenor.com/Je68nyCU_j8AAAAi/bubu-dudu-bubu-dudu-love.gif" alt="Animated GIF" />
            </>
        )
    }
    
    return (
        <>
        <div className="App">
            <header className="App-header">
            {
                !isYes ? 
                <>
                    {
                        type === "date" ? <DateType /> : <GirlfriendType />
                    }
                </>
                : 
                <>
                {/* <p>
                    Starting today, {formattedDate}
                </p> */}
                <div className="image-container">
                    <img src="https://media.tenor.com/nLKPVCtMbioAAAAi/peach-cat-yay.gif" alt="Animated GIF" />
                </div>
                <p>
                <b>You</b> and <b>I</b> are officially together.
                </p>
                </>
            }
            <div>
                {
                (!isYes) &&
                    (    
                        <> 
                        <Button className="button-pink button-yes" onClick={onHandleYes}>YES</Button>
                        <NoButton />
                        </>
                    )    
                }
                </div>
            </header>
        </div>
        </>
    )
}

export default CustomizeName;