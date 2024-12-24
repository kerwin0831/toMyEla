import Card from "./cards";
import React, { useRef } from 'react';
const LoveActually = () => {
  const audioRef = useRef(null);

  const cards = [
    {
      div: <div> Hi you <br/> <span style={{ color: 'gray', fontSize: "12px" }}> (swipe left)</span>  </div>
    },
    {
        div: <div> Growing up, I dreamed I'd end up with someone like this </div>
    },
    {
      div: <div> 
        <img 
        style={{
          width:"300px",
          height:"300px",
          objectFit:"contain"
        }}
        alt="love-actually-1"
        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/pjimage-2021-02-19T174626.661-1.jpg" />
        </div>
    },
    {
      div: <div> Now I fear It'll be more like this </div>
  },
  {
    div: <div>
      <img 
        style={{
          width: "250px",
          height: "auto",
          objectFit: "contain"
        }}
        alt="love-actually-2"
        src="https://scontent-sin2-1.xx.fbcdn.net/v/t39.30808-6/460826164_7398836476886534_6482392898617403982_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=FVdl1br7hF8Q7kNvgHiqVYK&_nc_zt=23&_nc_ht=scontent-sin2-1.xx&_nc_gid=A0xrTlfq53NL-bQ4dqmxFp4&oh=00_AYCdyH3y4UvZSRlAGEIQWN8gKe7othZEJXe0xAOkXU_sHw&oe=67707455" />
    </div>
  },
  {
      div: <div> But becuase its christmas </div>
  },
  {
      div: <div> And on Christmas you tell the truth </div>
  },
  {
      div: <div> To me, You're Perfect </div>
  },
  {
      div: <div> And my wasted heart will love you </div>
  },
  {
      div: <div> Until you look like this... </div>
  },
  {
    div: <div>
      <img 
      
      style={{
        width: "250px",
        height: "auto",
        objectFit: "contain"
      }}
      alt="love-actually-3"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/TheElderLady-61070-FrontView-PlateXCVII-TheRoyalMummies-1912.gif/699px-TheElderLady-61070-FrontView-PlateXCVII-TheRoyalMummies-1912.gif" />
    </div>
  },
  {
      div: <div> Even if I don't say it I'll show my love</div>
  },
  {
      div: <div> By sending you reel or memes everyday</div>
  },
  {
      div: <div> I dont' have much and you deserve the world</div>
  },
  {
      div: <div> But just you know in any life</div>
  },
  {
      div: <div> I would realy like just doing dishes and laundry with you</div>
  },
  {
      div: <div> Merry Christmas</div>
  },
   
];
  cards.reverse();
  return (
    <div 
      style={{
        margin: 0,
        padding: 0,
        top:0,
        display: "flex",
        justifyContent: "center",
        height: '100vh',
        width: "100vw",
        
        backgroundImage: `url("https://i.giphy.com/WWNObA6zP3wNZBYWlU.webp")`,
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
                width: '500px',
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

export default LoveActually;