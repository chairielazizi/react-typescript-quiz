// create logic for fetching data from the API
// export{};

import {shuffleArray} from './utils';

export type Question = {
    category: string;
    correctAnswer: string;
    difficulty: string;
    incorrectAnswer: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
    EASY =  'easy',
    MEDIUM = 'medium',
    HARD =  'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // await the fetch and convert to json
    const data = await (await fetch(endpoint)).json();
    // console.log(data);
    return data.results.map((question: Question) => (
        {
            ...question, // spread
            answers: shuffleArray([...question.incorrectAnswer, question.correctAnswer]),
        }
    ));
}