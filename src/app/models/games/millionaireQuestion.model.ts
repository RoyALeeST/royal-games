export class MillionaireQuestion{
    _id?: string;
    question?: string;
    questionImgUrl?: string;
    type?: string;
    difficulty?: number;
    invalidAnswers?: [string];
    correctAnswer: string;
}