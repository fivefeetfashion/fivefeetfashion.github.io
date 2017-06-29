import React                    from 'react';
import FollowButtonContainer    from './FollowButtonContainer';
import FollowIcon               from './FollowIcon';

export default function Follow() {
    return (
        <FollowButtonContainer>
            <a  href="https://www.facebook.com/fivefeetfashion/" 
                target="_blank" rel="noopener noreferrer">
                    <FollowIcon className="icon-facebook-1"> 
                        &#xf09a; 
                    </FollowIcon>
            </a>

            <a  href="https://www.instagram.com/anokhibhardwaj/?hl=en" 
                target="_blank" rel="noopener noreferrer">
                    <FollowIcon className="icon-instagram">
                        &#xf16d;
                    </FollowIcon>
            </a>

            <a  href="mailto:anokhee05@gmail.com" 
                target="_blank" rel="noopener noreferrer">
                    <FollowIcon onClick="" className="icon-envelope-open-o">
                        &#xf2b7;
                    </FollowIcon>
            </a>
        </FollowButtonContainer>
    );
};