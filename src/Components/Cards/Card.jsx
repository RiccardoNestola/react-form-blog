import React from 'react';
import CardInfo from './CardInfo';


const Card = ({ post, onDelete }) => {


    return (
        <>
            {post.published && <CardInfo key={post.id} {...post} onDelete={onDelete} />}
        </>
    )
}



export default Card