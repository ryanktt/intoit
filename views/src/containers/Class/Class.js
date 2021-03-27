import React from 'react';
import style from './Class.module.scss';

const Class = () => {
    return (
        <section className={style.Class}>
            <div className={style.Video}>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"/>
            </div>
            <div></div>
            
        </section>
    )
}

export default Class;
