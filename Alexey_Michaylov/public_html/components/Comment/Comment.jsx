import React from 'react';
import { Media } from 'reactstrap';

export default function Comment(props) {
    const { avatar, name, body } = props;
    return (
        <Media className="mb-4">
            <Media object src={avatar} alt={name} className="mr-3 rounded-circle" />
            <Media body>
                <Media heading tag="h5" className="mt-0">{name}</Media>{body}
            </Media>
        </Media>
    )
}

Comment.defaultProps = {
    avatar: 'http://placehold.it/50x50',
};
