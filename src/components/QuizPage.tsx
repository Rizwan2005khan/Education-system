import React, { useState } from 'react';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './Figma/ImageWithFallback';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onNavigate }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes

  const questions = [
    {
      question: "What is the value of x in the equation 2x + 5 = 15?",
      options: ["x = 5", "x = 10", "x = 7.5", "x = 3"],
      correctAnswer: 0,
      explanation: "To solve 2x + 5 = 15, subtract 5 from both sides: 2x = 10, then divide by 2: x = 5"
    },
    {
      question: "Which of the following is a prime number?",
      options: ["15", "21", "17", "27"],
      correctAnswer: 2,
      explanation: "17 is a prime number because it can only be divided by 1 and itself without remainder."
    },
    {
      question: "What is the area of a rectangle with length 8cm and width 5cm?",
      options: ["13 cm²", "26 cm²", "40 cm²", "30 cm²"],
      correctAnswer: 2,
      explanation: "Area of rectangle = length × width = 8 × 5 = 40 cm²"
    },
    {
      question: "Simplify: 3(x + 4) - 2x",
      options: ["x + 12", "5x + 12", "x + 4", "3x + 2"],
      correctAnswer: 0,
      explanation: "3(x + 4) - 2x = 3x + 12 - 2x = x + 12"
    },
    {
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1,
      explanation: "25% of 80 = (25/100) × 80 = 0.25 × 80 = 20"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) return { message: "Excellent work! 🎉", color: "text-green-600" };
    if (percentage >= 60) return { message: "Good job! 👏", color: "text-blue-600" };
    if (percentage >= 40) return { message: "Keep practicing! 💪", color: "text-yellow-600" };
    return { message: "Need more practice 📚", color: "text-red-600" };
  };

  if (quizCompleted) {
    const scoreData = getScoreMessage();
    const passed = getScorePercentage() >= 60;

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="p-8">
              {passed && (
                <div className="mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbW90aXZhdGlvbiUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTgwMjI2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Success celebration"
                    className="w-48 h-48 mx-auto rounded-lg object-cover"
                  />
                </div>
              )}
              
              <div className="mb-6">
                <Award className={`h-16 w-16 mx-auto mb-4 ${passed ? 'text-green-500' : 'text-gray-400'}`} />
                <h1 className="text-3xl mb-2">Quiz Completed!</h1>
                <p className={`text-xl ${scoreData.color}`}>{scoreData.message}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-2xl font-semibold text-blue-600">{score}</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-2xl font-semibold text-green-600">{getScorePercentage()}%</div>
                  <div className="text-sm text-gray-600">Final Score</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-2xl font-semibold text-purple-600">{questions.length}</div>
                  <div className="text-sm text-gray-600">Total Questions</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Question Review</h3>
                {questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={index} className="text-left p-4 border rounded-lg">
                      <div className="flex items-start">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2">{question.question}</p>
                          <p className="text-sm text-gray-600 mb-1">
                            Your answer: {question.options[userAnswer || 0]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-600 mb-1">
                              Correct answer: {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <p className="text-xs text-gray-500">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={() => onNavigate('dashboard')}
                  variant="outline"
                  className="flex-1"
                >
                  Back to Dashboard
                </Button>
                <Button 
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            onClick={() => onNavigate('dashboard')}
            variant="ghost"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              {formatTime(timeRemaining)}
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Mathematics Quiz</h1>
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonClass = "w-full text-left p-4 border rounded-lg transition-colors hover:bg-gray-50";
                
                if (showFeedback) {
                  if (index === questions[currentQuestion].correctAnswer) {
                    buttonClass += " bg-green-100 border-green-500 text-green-700";
                  } else if (index === selectedAnswer && index !== questions[currentQuestion].correctAnswer) {
                    buttonClass += " bg-red-100 border-red-500 text-red-700";
                  }
                } else if (selectedAnswer === index) {
                  buttonClass += " bg-blue-100 border-blue-500";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-3 text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                      {showFeedback && index === questions[currentQuestion].correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                      )}
                      {showFeedback && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500 ml-auto" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
                <p className="text-blue-800 text-sm">{questions[currentQuestion].explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <Button 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                variant="outline"
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {!showFeedback ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};