import React from 'react';
import { 
  Play, 
  BookOpen, 
  Brain, 
  Download, 
  Clock, 
  Trophy, 
  Target,
  ChevronRight,
  Calendar,
  FileText,
  Video,
  Star,
  Award,
  BarChart3
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './Figma/ImageWithFallback';

interface StudentDashboardProps {
  onNavigate: (page: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ onNavigate }) => {
  const enrolledCourses = [
    { 
      id: 1, 
      name: 'Mathematics', 
      progress: 75, 
      lessonsCompleted: 12, 
      totalLessons: 16,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      nextLesson: 'Quadratic Equations'
    },
    { 
      id: 2, 
      name: 'Science', 
      progress: 60, 
      lessonsCompleted: 9, 
      totalLessons: 15,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      nextLesson: 'Chemical Reactions'
    },
    { 
      id: 3, 
      name: 'English', 
      progress: 85, 
      lessonsCompleted: 14, 
      totalLessons: 16,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      nextLesson: 'Essay Writing'
    },
    { 
      id: 4, 
      name: 'History', 
      progress: 45, 
      lessonsCompleted: 7, 
      totalLessons: 12,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      nextLesson: 'World War II'
    }
  ];

  const recentVideos = [
    { id: 1, title: 'Algebra Fundamentals', duration: '15 min', subject: 'Mathematics', watched: true },
    { id: 2, title: 'Photosynthesis Process', duration: '12 min', subject: 'Science', watched: false },
    { id: 3, title: 'Grammar Rules', duration: '18 min', subject: 'English', watched: true },
    { id: 4, title: 'Ancient Civilizations', duration: '22 min', subject: 'History', watched: false }
  ];

  const availableNotes = [
    { id: 1, title: 'Math Formula Sheet', subject: 'Mathematics', pages: 8, size: '1.2 MB' },
    { id: 2, title: 'Physics Laws Summary', subject: 'Science', pages: 12, size: '2.1 MB' },
    { id: 3, title: 'English Grammar Guide', subject: 'English', pages: 16, size: '1.8 MB' },
    { id: 4, title: 'History Timeline', subject: 'History', pages: 10, size: '1.5 MB' }
  ];

  const upcomingQuizzes = [
    { id: 1, title: 'Algebra Quiz', subject: 'Mathematics', dueDate: 'Tomorrow', questions: 10 },
    { id: 2, title: 'Chemistry Test', subject: 'Science', dueDate: 'In 3 days', questions: 15 },
    { id: 3, title: 'Literature Quiz', subject: 'English', dueDate: 'Next week', questions: 12 }
  ];

  const stats = [
    { title: 'Courses Enrolled', value: '4', icon: BookOpen, color: 'text-blue-600' },
    { title: 'Lessons Completed', value: '42', icon: Trophy, color: 'text-green-600' },
    { title: 'Quizzes Taken', value: '18', icon: Brain, color: 'text-purple-600' },
    { title: 'Study Hours', value: '127', icon: Clock, color: 'text-orange-600' }
  ];

  const overallProgress = 66; // Average of all course progress

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">
                Welcome back, Priya! 👋
              </h1>
              <p className="text-lg text-gray-600">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642439986788-825f9075691e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcmVhZGluZyUyMG5vdGVzJTIwc3R1ZHl8ZW58MXx8fHwxNzU4MTAwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student studying"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl mb-2">Your Overall Progress</h3>
                <p className="text-green-100 mb-4">Keep up the great work! You're doing amazing.</p>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Progress value={overallProgress} className="h-3 bg-white/20" />
                  </div>
                  <span className="text-lg font-semibold">{overallProgress}%</span>
                </div>
              </div>
              <div className="hidden md:block ml-6">
                <Target className="h-16 w-16 text-white/80" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enrolled Courses */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-900">Your Courses</h2>
                <Button 
                  onClick={() => onNavigate('lessons')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                    <CardContent className="p-0">
                      <div className={`${course.color} h-32 rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                        <BookOpen className="h-12 w-12 text-white" />
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-white/20 text-white border-0">
                            {course.progress}%
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{course.lessonsCompleted}/{course.totalLessons} lessons</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Next lesson:</p>
                              <p className="text-sm font-medium">{course.nextLesson}</p>
                            </div>
                            <Button 
                              size="sm" 
                              onClick={() => onNavigate('lessons')}
                              className="group-hover:bg-green-600 transition-colors"
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Videos */}
            <div>
              <h2 className="text-2xl text-gray-900 mb-6">Recent Video Lectures</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {recentVideos.map((video) => (
                  <Card key={video.id} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Video className="h-8 w-8 text-white" />
                          </div>
                          {video.watched && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Star className="h-3 w-3 text-white fill-current" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{video.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{video.subject}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{video.duration}</span>
                            <Button size="sm" variant="outline">
                              {video.watched ? 'Rewatch' : 'Watch'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Study Notes */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-red-600" />
                  Study Notes
                </CardTitle>
                <CardDescription>Download PDFs and study materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {availableNotes.map((note) => (
                  <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-red-600">📄</div>
                      <div>
                        <p className="text-sm font-medium">{note.title}</p>
                        <p className="text-xs text-gray-500">{note.subject} • {note.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Quizzes */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-600" />
                  Upcoming Quizzes
                </CardTitle>
                <CardDescription>Test your knowledge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingQuizzes.map((quiz) => (
                  <div key={quiz.id} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{quiz.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {quiz.questions} questions
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{quiz.subject}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {quiz.dueDate}
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => onNavigate('quizzes')}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Take Quiz
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievement Badge */}
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-0">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Great Progress!</h3>
                <p className="text-sm text-yellow-100 mb-4">
                  You've completed 42 lessons this month
                </p>
                <Badge className="bg-white text-orange-600">
                  Top Performer
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};