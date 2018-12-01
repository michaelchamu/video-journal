import React from 'react';
import { THUMBNAILS } from '../configs/config';
const Comments = props => {
    console.log(props);
    return (
        <div>
            {props.comments.map((comment, index) => {
                return (
                    <div
                        key={index}
                        className="col-xs-4 col-sm-4 col-lg-4 col-md-4"
                    >
                        <img
                            alt={''}
                            onClick={() =>
                                props.updateSrc(
                                    `${comment.commentPath}`,
                                    comment.reactionId
                                )
                            }
                            src={`${THUMBNAILS}${comment.thumbnail}`}
                            className="col-xs-12 col-sm-12"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export { Comments };
