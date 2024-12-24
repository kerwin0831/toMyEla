import Card from "./../love-actually/cards";
import React, { useRef } from 'react';
const Friends = () => {
  const audioRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const cards = [
    {
      div: <div> Hi Guys! <br/> <span style={{ color: 'gray', fontSize: "12px" }}> (swipe right)</span>  </div>
    },
    {
        div: <div> Growing up, I dreamed I'd end up with someone like this </div>
    },
    {
      div: <div> 
        <img 
        style={{
          width:isMobile ? "250px" : "300px",
          height:isMobile ? "250px" : "300px",
          objectFit:"contain"
        }}
        alt="love-actually-1"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Friends_season_one_cast.jpg/330px-Friends_season_one_cast.jpg" />
        </div>
    },
    {
      div: <div> Now I fear It'll be more like this </div>
  },
  {
    div: <div>
      <img 
        style={{
          width:isMobile ? "200px" : "250px",
          height: "auto",
          objectFit: "contain"
        }}
        alt="love-actually-2"
        src="https://pyxis.nymag.com/v1/imgs/8a9/84b/b8d7a72327efba7b8962e97be9399bf199-09-narcos-escobar.2x.rhorizontal.w710.jpg" />
    </div>
  },
  {
      div: <div> But becuase its christmas </div>
  },
  {
      div: <div> And on Christmas you tell the truth </div>
  },
  {
      div: <div> To me, You guys are Perfect </div>
  },
  {
      div: <div> And I will always love you </div>
  },
  {
      div: <div> Until we met like this... </div>
  },
  {
    div: <div>
      <img 
      
      style={{
          width:isMobile ? "100px" : "250px",
          height: "auto",
        objectFit: "contain"
      }}
      alt="love-actually-3"
      src="https://www.tclf.org/sites/default/files/styles/crop_2000x700/public/thumbnails/image/MD_Baltimore_FriendsBurialGround_byPreservationMaryland-Flickr_2015_002_Hero.jpg?itok=UrKwa58r" />
    </div>
  },
  {
      div: <div> Even if we don't see much, I'll show my love</div>
  },
  {
      div: <div> By sending you reel or memes everyday</div>
  },
  {
      div: <div> Merry Christmas</div>
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

export default Friends;