import React                        from 'react';
import Card                         from './Card';
import CardThumbnail                from './CardThumbnail';
import { CardTitle, CardSummary }   from './CardText';
// import img                          from './img.jpg';
import { getBlogList }              from '../../utils/generate_post.js';



export default function BlogList () {
        var cards = getBlogList().map((item, index) => {
            return (
                 <Card key={'card' + index}>
                    <CardThumbnail key={'thumbnail' + index}>
                        <img src={process.env.PUBLIC_URL + item.img} alt="thumbnail" />
                    </CardThumbnail>
                    <CardTitle key={'title' + index}>
                        {item.title}
                    </CardTitle>
                    <CardSummary key={'summary' + index}>
                        {item.summary}
                        <br/>
                        <span>continue reading</span>
                    </CardSummary>
                </Card>
            );
        });
        return(
            <div>
                {cards}
            </div>
        );
}