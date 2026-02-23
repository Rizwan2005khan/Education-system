import React, { useState } from 'react';
import { Play, CheckCircle, ChevronLeft, ChevronRight, FileText, Download, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './Figma/ImageWithFallback';

interface LessonPageProps {
  onNavigate: (page: string) => void;
}

export const LessonPage: React.FC<LessonPageProps> = ({ onNavigate }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentLesson = {
    title: 'Introduction to Algebra',
    subject: 'Mathematics',
    chapter: 'Chapter 3: Linear Equations',
    duration: '15 minutes',
    description: 'Learn the fundamentals of algebra including variables, expressions, and basic equation solving. This lesson covers the building blocks that will help you understand more complex mathematical concepts.',
    progress: 65,
    lessonNumber: 8,
    totalLessons: 16
  };

  const resources = [
    { name: 'Lesson Notes.pdf', type: 'pdf', size: '2.3 MB' },
    { name: 'Practice Exercises.pdf', type: 'pdf', size: '1.8 MB' },
    { name: 'Formula Sheet.pdf', type: 'pdf', size: '856 KB' },
    { name: 'Solution Guide.pdf', type: 'pdf', size: '3.1 MB' },
  ];

  const relatedLessons = [
    { title: 'Basic Arithmetic', completed: true, duration: '12 min' },
    { title: 'Understanding Variables', completed: true, duration: '10 min' },
    { title: 'Solving Simple Equations', completed: false, duration: '18 min' },
    { title: 'Word Problems in Algebra', completed: false, duration: '20 min' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex items-center mb-6">
          <Button 
            onClick={() => onNavigate('dashboard')}
            variant="ghost" 
            className="mr-4"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center text-sm text-gray-600">
            <span>{currentLesson.subject}</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{currentLesson.chapter}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 relative rounded-t-lg overflow-hidden">
                  {!isPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={() => setIsPlaying(true)}
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 w-20 h-20 rounded-full p-0"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="animate-pulse mb-4">
                          <div className="w-8 h-8 bg-white/30 rounded mx-auto"></div>
                        </div>
                        <p>Video Playing...</p>
                        <p className="text-sm opacity-70">Duration: {currentLesson.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                    <Progress value={currentLesson.progress} className="h-1 mb-2" />
                    <div className="flex justify-between text-white text-sm">
                      <span>Lesson {currentLesson.lessonNumber} of {currentLesson.totalLessons}</span>
                      <span>{currentLesson.progress}% Complete</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Info */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">{currentLesson.subject}</span>
                    </div>
                    <CardTitle className="text-2xl mb-2">{currentLesson.title}</CardTitle>
                    <CardDescription className="text-base">
                      {currentLesson.description}
                    </CardDescription>
                  </div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1699369398979-b8153b68d907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rJTIwbGVhcm5pbmclMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU4MDIyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Education illustration"
                    className="w-20 h-20 rounded-lg object-cover ml-4"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Duration: {currentLesson.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Level: Beginner</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Language: English</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={() => setIsCompleted(!isCompleted)}
                    className={`flex-1 ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {isCompleted ? 'Completed' : 'Mark as Complete'}
                  </Button>
                  <Button 
                    onClick={() => onNavigate('quizzes')}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Take Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous Lesson
                  </Button>
                  <span className="text-sm text-gray-600">
                    Lesson {currentLesson.lessonNumber} of {currentLesson.totalLessons}
                  </span>
                  <Button className="flex items-center bg-green-600 hover:bg-green-700">
                    Next Lesson
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Resources
                </CardTitle>
                <CardDescription>
                  Download additional materials for this lesson
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center flex-1">
                        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center mr-3">
                          <FileText className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{resource.name}</p>
                          <p className="text-xs text-gray-500">{resource.size}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Lessons */}
            <Card>
              <CardHeader>
                <CardTitle>Related Lessons</CardTitle>
                <CardDescription>
                  Continue your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {relatedLessons.map((lesson, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="flex items-center flex-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                          lesson.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {lesson.completed && <CheckCircle className="h-4 w-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{lesson.title}</p>
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};