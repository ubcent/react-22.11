import React from 'react';
import Main from 'components/Main';
import Welcomeblock from 'components/Welcomeblock';
import Image from 'img/react.jpg';

export default function HomePage() {
    return (
        <Main head="Главная" second="home">
            <img src={Image} alt="" className="img-fluid mb-4" />
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?
            </p>
            <Welcomeblock />
        </Main>
    )
}
