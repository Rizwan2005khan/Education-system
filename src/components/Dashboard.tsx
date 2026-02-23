import React from 'react';
import { BookOpen, Brain, Award, Clock, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { ImageWithFallback } from './Figma/ImageWithFallback';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const subjects = [
    { name: 'Mathematics', progress: 75, lessons: 12, total: 16, color: 'bg-blue-500', icon: Brain },
    { name: 'Science', progress: 60, lessons: 9, total: 15, color: 'bg-green-500', icon: BookOpen },
    { name: 'English', progress: 80, lessons: 16, total: 20, color: 'bg-purple-500', icon: BookOpen },
    { name: 'History', progress: 45, lessons: 7, total: 14, color: 'bg-orange-500', icon: BookOpen },
  ];

  const upcomingQuizzes = [
    { subject: 'Mathematics', topic: 'Algebra Basics', due: '2 days', difficulty: 'Medium' },
    { subject: 'Science', topic: 'Chemical Reactions', due: '5 days', difficulty: 'Hard' },
    { subject: 'English', topic: 'Grammar Rules', due: '1 week', difficulty: 'Easy' },
  ];

  const motivationalQuotes = [
    "The expert in anything was once a beginner.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Success is the sum of small efforts repeated day in and day out."
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">
            Welcome back, Student! 👋
          </h1>
          <p className="text-gray-600">
            Continue your learning journey and achieve your goals
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Lessons</p>
                  <p className="text-2xl font-semibold">44</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Quizzes Completed</p>
                  <p className="text-2xl font-semibold">28</p>
                </div>
                <Award className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Study Hours</p>
                  <p className="text-2xl font-semibold">156</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Overall Progress</p>
                  <p className="text-2xl font-semibold">65%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subject Progress */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  Your Progress
                </CardTitle>
                <CardDescription>
                  Track your learning progress across all subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjects.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`${subject.color} w-8 h-8 rounded-full flex items-center justify-center mr-3`}>
                            <subject.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">{subject.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {subject.lessons}/{subject.total} lessons
                        </span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{subject.progress}% complete</span>
                        <Button 
                          onClick={() => onNavigate('lessons')}
                          variant="link" 
                          className="p-0 h-auto text-green-600"
                        >
                          Continue →
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Motivational Quote */}
            <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="ml-3 font-semibold">Daily Motivation</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  "{randomQuote}"
                </p>
              </CardContent>
            </Card>

            {/* Motivation Image */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbW90aXZhdGlvbiUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTgwMjI2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student success celebration"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Keep Going!</h3>
                  <p className="text-sm text-gray-600">
                    You're making great progress. Every lesson completed brings you closer to your goals.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Quizzes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Quizzes</CardTitle>
                <CardDescription>
                  Don't miss these important assessments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingQuizzes.map((quiz, index) => (
                    <div key={index} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{quiz.topic}</h4>
                        <p className="text-xs text-gray-600">{quiz.subject}</p>
                        <div className="flex items-center mt-1">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            quiz.difficulty === 'Easy' ? 'bg-green-500' :
                            quiz.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></span>
                          <span className="text-xs text-gray-500">{quiz.difficulty}</span>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600 font-medium">{quiz.due}</span>
                    </div>
                  ))}
                  <Button 
                    onClick={() => onNavigate('quizzes')}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Take Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};