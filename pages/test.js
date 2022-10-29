import { useState, useEffect } from 'react'
import styles from '../styles/test.module.css'

const getRandomColor = () => {
    const digits = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ];

    const color = new Array(6)
        .fill('')
        .map(() => digits[Math.floor(Math.random() * digits.length)])
        .join("")
    
    return `#${color}`;
}

export default function () {
    const [color, setColor] = useState("");
    const [answers, setAnswers] = useState([]);
    const [isWrong, setIsWrong] = useState(false);

    const pickColor = () => {
        const actualColor = getRandomColor();
        setColor(actualColor);
        setAnswers(
            [actualColor, getRandomColor(), getRandomColor()].sort(
                () => 0.5 - Math.random()
            )
        );
    }

    useEffect(() => {
        pickColor();
    }, [])

    const handleAnswerClicked = (answer) => {
        if (answer === color) {
            setIsWrong(false);
            pickColor();
        } else {
            setIsWrong(true)
        }
    };

    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <div>
                    <div className={`${styles.guessMe} mb-2`} style={{background: color}}></div>
                    {answers.map(answer  => (
                        <button 
                            onClick={() => handleAnswerClicked(answer)}
                            className='bg-dark-blue-50 border border-black m-3 first:ml-1 font-sans' 
                            key={answer}>{answer}</button>
                    ))}
                    {isWrong && <div style={{color: 'red'}} className='text-xl text-center'>Wrong Answer</div>}
                </div>
            </div>
        </>
    )
}
