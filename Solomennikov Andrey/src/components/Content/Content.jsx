import './Content.css';

import React, { Component } from 'react';

const info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero tortor, ultrices quis vulputate ' +
    'interdum, feugiat eu lacus. Morbi finibus, ligula non gravida tincidunt, ex est dignissim mauris, vitae ultrices ' +
    'sem felis vitae velit. Curabitur id quam sollicitudin tellus bibendum porttitor id eget nunc. Aliquam in ' +
    'iaculis diam. Fusce sapien sapien, sagittis porta urna ut, commodo lobortis sem. Phasellus id magna tincidunt, ' +
    'maximus odio at, tempus est. Nunc in mauris condimentum, ullamcorper sem vitae, auctor neque. Ut porttitor ' +
    'rutrum ex in porta. Integer rhoncus tristique sapien sed mollis. Proin sed ex at magna pulvinar consequat ' +
    'interdum ac ante. Praesent auctor faucibus tincidunt.Mauris lacinia ligula sit amet velit egestas, ac ' +
    'suscipit dolor interdum. Cras cursus feugiat libero, eu fringilla ipsum facilisis vel. Donec ut ex convallis, ' +
    'faucibus lorem a, faucibus urna. Nunc diam nisl, pharetra eu condimentum nec, volutpat vel neque. Proin ' +
    'est tortor, volutpat sit amet lectus at, mollis feugiat sem. In erat libero, tincidunt sed consectetur a, ' +
    'vehicula at ex. Morbi interdum, lacus a dignissim luctus, mauris velit sagittis magna, eu convallis diam ' +
    'mauris non est. Donec quis faucibus ligula. Mauris euismod neque quam, non mollis felis tincidunt sit amet. ' +
    'Phasellus sollicitudin urna sem, eu vehicula erat posuere non. Pellentesque vehicula accumsan diam id suscipit.';

export default class Content extends Component
{
    render() {
        return (
                <div className="article">
                    <img id="logo" src="http://dummyimage.com/700x100/cdd61c" />
                    <p>{info}</p>
                </div>
        );
    }
};