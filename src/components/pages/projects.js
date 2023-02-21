import React from "react";
import './projects/projects.css';

export default function Projects(){
    const pr = 'projects';

    const projects = [
        {title: 'NFT Collection', image: './images/projects/nft.png', url: '/projects/nfts/index.html'},
        {title: 'Monkey Translate', image: './images/projects/translate.png', url: '/projects/translate/index.html'},
        {title: 'Mbuks', image: './images/projects/mbuks.png', url: 'https://mbuks.metacuki.com'},
        {title: 'Metacuki Question', image: './images/projects/question.png', url: 'projects/questions/index.html'},
        {title: 'Random Name Picker', image: './images/projects/picker.png', url: 'projects/question'}
    ]

    return(
        <div className="indent n-bg">
            <div className="margins">
                <h1 className="nombre-1">PROJECTS</h1>
                <div className="p-gr">
                    {projects.map(x => {
                        return(
                            <div className="p-card">
                                <div key={x.title} className="p-img-cont">
                                    <img src={x.image} />
                                </div>
                                <h3>{x.title}</h3>
                                <a className="default" href={x.url}>Start</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}