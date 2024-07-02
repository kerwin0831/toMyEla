import React, { useState} from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekday from 'dayjs/plugin/weekday';
import { Button } from 'react-bootstrap'
import { useLocation, useParams } from "react-router-dom";
import NoButton from '../../components/no-button';
import { MESSAGE_TYPE } from '../../constants';

dayjs.extend(customParseFormat);
dayjs.extend(weekday);

const CustomizeName = () => {
    const { name, type } = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status') || "girlfriend"
    const dateParams = queryParams.get('when')
    const convertDate = () => {
        const date = dayjs(dateParams, ['YYYYMMDD', 'YYYY-MM-DD'], true);
        if (date.isValid()) {
            return date.format('dddd, MMMM D');
        } else {
            return '';
        }
    }
    
    const [isYes, setIsYes] = useState(false)

    const onHandleYes = () => {
    setIsYes(true)
    }
    const toUpperFirstChar = (name) => {
        return `${name.substring(0,1).toUpperCase()}${name.substring(1)}`
    }
    const DateType = () => {
        return (
            <>
                <p><b>{ toUpperFirstChar(name) }</b >, would you join me for a delightful evening{!!convertDate() ? ( ` on ${convertDate()}`) : ""}?</p>
                <img src="https://media.tenor.com/Je68nyCU_j8AAAAi/bubu-dudu-bubu-dudu-love.gif" alt="Animated GIF" />
                {/* <img src="https://media.tenor.com/ykO-9BGJFDsAAAAi/bubududu-panda.gif" alt="Animated GIF" /> */}
    
            </>
        )
    }
    const GirlfriendType = () => {
        return (
            <>
                <p>
                    <b>{ toUpperFirstChar(name) }</b>, would you do me the honor of being my {toUpperFirstChar(status)}?
                </p>
                <img src="https://media.tenor.com/Je68nyCU_j8AAAAi/bubu-dudu-bubu-dudu-love.gif" alt="Animated GIF" />
            </>
        )
    }
     const TakeAPause = () => {
        return (
            <>
                <p>
                <b>{ toUpperFirstChar(name) }</b>, should we hit pause for now?
                </p>
                <img src="https://media.tenor.com/cofRHcGGOfoAAAAi/shy-cute.gif" alt="Animated GIF" />
            </>
        )
     }
     const Reconciliation = () => {
        return (
            <>
                <p>
                <b>{ toUpperFirstChar(name) }</b>, Any chance of a reconciliation?
                </p>
                <img src="https://media.tenor.com/cofRHcGGOfoAAAAi/shy-cute.gif" alt="Animated GIF" />
            </>
        )
     }
    const switchType = (type) => {
        switch (type){
            case "1":
                return <GirlfriendType />
            case "2":
                return <TakeAPause />
            case "3":
                return <Reconciliation />
            default:
                return <DateType />
        }
    }
    return (
        <>
        <div className="App">
            <header className="App-header">
            {
                !isYes ? 
                <>
                    {
                      switchType(type)
                    }
                </>
                : 
                <>
                <div className="image-container">
                    {
                        type === "2" ?  <img src="https://media.tenor.com/HmfOEyNouYIAAAAi/cat-peach.gif" alt="Animated GIF" />
                        :  <img src="https://media.tenor.com/nLKPVCtMbioAAAAi/peach-cat-yay.gif" alt="Animated GIF" />
                    }
                   
                </div>
                <p>
                    {
                        MESSAGE_TYPE[type] === "date" &&
                        (<div>See you soon.</div>) 
                    }
                    {
                        type === "1" &&
                        (<>
                        You are now my  { toUpperFirstChar(status)}, hooray, hooray!
                        </> )
                    }
                    {
                        type === "2" &&
                        (<>
                            Just kidding!
                        </> )
                    }
                
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