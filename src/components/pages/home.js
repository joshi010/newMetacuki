import React from "react";
import './home-sources/home.css';
import mexCuk from './home-sources/mexCuki.png';
import cock from './home-sources/cock2-f.png';
import tarjeta from './home-sources/tarjeta.png';
import nft from "./home-sources/nft.png";
import translate from './home-sources/translate.png';
import mbuk from './home-sources/mbuks.png';
import quest from './home-sources/question.png';


export default function Home(){
    const cards = [{image: '/images/cukoBad.png', title: 'Evil Cuki 😈', description: 'ss', shopUrl: 'shop'},
    {image: '/images/cukoCheff.png', title: 'Cheff Cuki 👨‍🍳', description: 'ass', shopUrl: 'shop'},
    {image: '/images/cukoGabacho.png', title: 'Construction Cuki 👷‍♂️', description: 'ass', shopUrl: 'shop'},
    {image: '/images/cukoMex.png', title: 'Mexican Cuki 🌮', description: 'ass', shopUrl: 'shop'},
    {image: '/images/cukohippie.png', title: 'Hippie Cuki ☮', description: 'ass', shopUrl: 'shop'}
  ];


    return(
        <div>
            <div className="jumbo-container">
                <div className="back-cont bottom">
                    <img src={mexCuk} />
                </div>
                <div className="jumbo">
                    <div className="title">
                        <h2>WELCOME TO</h2>
                        <h1>METACUKI</h1>
                    </div>
                        <a className="big-disp-link" href="./shop">Shop Now</a>
                </div>
                <div className="back-cont top">
                    <img src={cock} />
                </div>
            </div>
            <div className="every-anim">
                <div className="height-100vh hidden">
                    <h2>WHAT IS METACUKI?</h2>
                    <div className="bg-cuk">
                    
                    </div>
                    <div className="about">
                    <p>
                        I'ts 2020, youre stuck in a global pandemic with nothing to spend your time on. Every day feels like it is repeating itself over and over and you are fed up with your rutine.
                        Online School, homework, and games, everyday for over three months. One day, without you knowing everything changes. Your school makes an online yearbook and when you open it you see 
                        the thing that would change your life forever, <strong>CUKI</strong>.


                    </p>
                    <a href='./about' className="default">Learn More {'>'}</a>
                    </div>
                </div>
                <div className='height-100vh hidden'>
                    <div className="margin-bottom1 lelbre">
                        <h2 className="hidden">THESE ARE THE CUKI-CARDS</h2>
                        <p className="hidden">Cuki-Cards serve for collection, each one is unique and has its own story. Collect them all to know all the history behind Cuki.</p>
                    </div>
                    <div className="card-cont">
                        {cards.map(x => {
                            return(
                            <div key={x.title} className="card hidden">
                            <div className="image">
                                <img src={x.image} />
                            </div>
                            <h3>{x.title}</h3>
                            <a className="default" href={x.shopUrl}>See More {'>'}</a>
                        </div>
                            )
                        })}
                    </div>
                </div>
                    <div className="height-100vh hidden">
                        <h2 className="marigin-bottom1">HOW DOES IT WORK?</h2>
                        <div className="grid">
                            <div className="image-container hidden def">
                                <img src={tarjeta} />
                            </div>
                            <div className="def hidden backstab">
                                <p>
                                    Every Cuki-Card comes with a unique 9 alphanumeric code on the flipside. Use that code to unlock the cards to your collection and to read the fraction of his story regarding that card.
                                    Once you unlock all Cuki-Cards a secret Cuki will be given to you with a free t-shirt. You can exchange or sell cards that you already own, but remember, your objective is to own them all.
                                </p>
                                <div className="down-right">
                                    <a href="./shop" className="default">Get your code {'>'}</a>                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="height-100vh hidden">
                        <h2 className="margin-bottom1">CHECK OTHER METACUKI PROJECTS</h2>
                        <div className="grid2">
                            <div className="p-card hidden">
                                <div className="p-img-cont">
                                    <img src={nft}/>
                                </div>
                                <h3>NFT Collection</h3>
                                <a className="default">Go Now</a>
                            </div>
                            <div className="p-card hidden">
                                <div className="p-img-cont">
                                    <img src={translate}/>
                                </div>
                                <h3>Monkey Translate</h3>
                                <a className="default">Go Now</a>
                            </div>
                            <div className="p-card hidden">
                                <div className="p-img-cont">
                                    <img src={mbuk}/>
                                </div>
                                <h3>Mbuks</h3>
                                <a className="default">Go Now</a>
                            </div>
                            <div className="p-card hidden">
                                <div className="p-img-cont">
                                    <img src={quest}/>
                                </div>
                                <h3>Metacuki Question</h3>
                                <a className="default">Go Now</a>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

    );
}