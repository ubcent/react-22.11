import './NotFound.css';

//React импортируем в каждом файле
import React from 'react';

//stateless
export default function NotFound() {
    return (
        <div className="NotFound">
            <h2>Извините. Страница временно не доступна. Попробуйте зайти позже.</h2>
        </div>
    );
};
