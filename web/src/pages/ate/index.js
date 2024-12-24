import Card from "./../love-actually/cards";
import React, { useRef } from 'react';
const AteFriends = () => {
  const audioRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const cards = [
    {
      div: <div> Hi, Lovely Friends! <br/> <span style={{ color: 'gray', fontSize: "12px" }}> (swipe right)</span>  </div>
    },
    {
        div: <div> I know I don't usually reply to your messages, </div>
    },
    {
        div: <div> Or have at least a minimal energy to message... </div>
    },
    {
        div: <div> But I always think of you... </div>
    },
    {
        div: <div> Your success, </div>
    },
    
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-success"
            src="https://i.pinimg.com/474x/40/64/19/406419cb3ea46578686e2d192a1c067b.jpg" />
            </div>
    },
    {
        div: <div> Your achievements, </div>
    },
    
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-yay"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHB0YWoyNHN4dzVrdmR5NDJva29sOGFnNmQzNmR3bWRyb3B6ZDM5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YnBntKOgnUSBkV7bQH/giphy.webp" />
            </div>
    },
    {
        div: <div> Your kind and encouraging words, </div>
    },
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-yay"
            src="https://imgix.bustle.com/scary-mommy/2020/02/joey-tribbiani-quotes.jpg?w=1200&h=675&fit=crop&crop=faces&fm=jpg" />
            </div>
    },
    {
        div: <div> Your lovable presence, </div>
    },
    
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-yay"
            src="https://i.pinimg.com/736x/94/18/3e/94183e345d02dc6278e7fe91f8dd0ee1.jpg" />
            </div>
    },
    {
        div: <div> and the mere fact that you still remember me. </div>
    },
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-yay"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWs1dGwwd3NjMWhvNHhhZDFycWt2cGxrZ2JsMW82OThhYjVlYjliaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2esraXEeOQzJnfRXwq/giphy.webp" />
            </div>
    },
    {
        div: <div> I love you, and I miss you... </div>
    },
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-yay"
            src="https://i.pinimg.com/564x/78/2e/fa/782efa71ba069c1351afb01c13e1c82e.jpg" />
            </div>
    },
    {
        div: <div> Merry Christmas to you and your family!!! </div>
    },
    {
        div: <div> 
            <img 
            style={{
            width:isMobile ? "250px" : "300px",
            height:isMobile ? "250px" : "300px",
            objectFit:"contain"
            }}
            alt="love-actually-yay"
            src="https://i.pinimg.com/originals/9d/08/69/9d0869a66aac570f23c330ef5589b576.gif" />
            </div>
    },
    {
        div: <div> See you soon, my dear! </div>
    },
    

   
];
  cards.reverse();
  return (
    <div 
      style={{
        paddingLeft: isMobile ? "3%" : 0,
        top:0,
        display: "flex",
        justifyContent: "center",
        height: '100vh',
        alignItems: "center",
        backgroundSize: "cover",
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      }}
    >
      <div
      onClick={()=> {
          if (audioRef.current) {
            audioRef.current.play();
          }
      }}
            style={{
                position: 'relative',
                width: '400px',
                height: '500px',
                margin: '20px auto',

            }}
        >
            {cards.map((card, index) => (
                <Card key={index} >{ card.div }</Card>
            ))}
        </div>
        <audio style={{ display: "none"}} ref={audioRef} controls>
        <source
          src="https://raw.githubusercontent.com/kerwin0831/toMyEla/main/web/public/silentNight.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
        </div>
        
  )
}

export default AteFriends;