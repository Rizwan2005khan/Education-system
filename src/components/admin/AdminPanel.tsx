import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Brain, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2, 
  Upload,
  Video,
  FileText,
  Settings,
  LogOut,
  Link,
  Image,
  Check,
  X,
  Save,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ImageWithFallback } from '../Figma/ImageWithFallback';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { toast } from "sonner";

interface AdminPanelProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [contentTab, setContentTab] = useState('lessons');
  
  // Form states for content creation
  const [lessonForm, setLessonForm] = useState({
    title: '',
    subject: '',
    description: '',
    thumbnail: null,
    duration: ''
  });
  
  const [videoForm, setVideoForm] = useState({
    title: '',
    videoFile: null,
    videoLink: '',
    description: '',
    assignedLesson: '',
    useLink: false
  });
  
  const [noteForm, setNoteForm] = useState({
    title: '',
    pdfFile: null,
    assignedLesson: ''
  });
  
  const [quizForm, setQuizForm] = useState({
    title: '',
    selectedLesson: '',
    questions: []
  });
  
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  // Success handlers
  const handleSuccess = (message: string) => {
    toast.success(message, {
      description: "Content has been successfully created and published.",
      duration: 3000,
    });
  };

  const handleAddQuestion = () => {
    if (currentQuestion.question && currentQuestion.options.every(opt => opt.trim())) {
      setQuizForm(prev => ({
        ...prev,
        questions: [...prev.questions, { ...currentQuestion, id: Date.now() }]
      }));
      setCurrentQuestion({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: 0
      });
      toast.success("Question added successfully!");
    } else {
      toast.error("Please fill in all question fields.");
    }
  };

  const handleRemoveQuestion = (id: number) => {
    setQuizForm(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== id)
    }));
  };

  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { title: 'Total Teachers', value: '45', icon: Users, color: 'bg-green-500', change: '+5%' },
    { title: 'New Lessons This Week', value: '23', icon: BookOpen, color: 'bg-purple-500', change: '+8%' },
    { title: 'Quizzes Conducted', value: '156', icon: Brain, color: 'bg-orange-500', change: '+15%' },
  ];

  const lessons = [
    { id: 1, title: 'Introduction to Algebra', subject: 'Mathematics', duration: '15 min', students: 45, status: 'Published' },
    { id: 2, title: 'Basic Chemistry', subject: 'Science', duration: '20 min', students: 38, status: 'Published' },
    { id: 3, title: 'Grammar Fundamentals', subject: 'English', duration: '18 min', students: 52, status: 'Draft' },
    { id: 4, title: 'World War II', subject: 'History', duration: '25 min', students: 29, status: 'Published' },
  ];

  const quizzes = [
    { id: 1, title: 'Algebra Basics Quiz', subject: 'Mathematics', questions: 10, attempts: 234, avgScore: '78%' },
    { id: 2, title: 'Chemical Reactions', subject: 'Science', questions: 15, attempts: 189, avgScore: '72%' },
    { id: 3, title: 'Grammar Test', subject: 'English', questions: 12, attempts: 267, avgScore: '85%' },
  ];

  const recentStudents = [
    { name: 'Priya Sharma', grade: 'Class 10', progress: 85, lastActive: '2 hours ago' },
    { name: 'Arjun Patel', grade: 'Class 9', progress: 72, lastActive: '1 day ago' },
    { name: 'Anita Singh', grade: 'Class 11', progress: 91, lastActive: '3 hours ago' },
    { name: 'Raj Kumar', grade: 'Class 10', progress: 68, lastActive: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Admin Panel</h1>
              <p className="text-sm text-gray-400">EduConnect</p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button
              onClick={() => setActiveTab('overview')}
              variant={activeTab === 'overview' ? 'secondary' : 'ghost'}
              className="w-full justify-start text-left"
            >
              <BarChart3 className="h-4 w-4 mr-3" />
              Dashboard
            </Button>
            <Button
              onClick={() => setActiveTab('add-content')}
              variant={activeTab === 'add-content' ? 'secondary' : 'ghost'}
              className="w-full justify-start text-left"
            >
              <Plus className="h-4 w-4 mr-3" />
              Add Content
            </Button>
            <Button
              onClick={() => setActiveTab('lessons')}
              variant={activeTab === 'lessons' ? 'secondary' : 'ghost'}
              className="w-full justify-start text-left"
            >
              <BookOpen className="h-4 w-4 mr-3" />
              Manage Lessons
            </Button>
            <Button
              onClick={() => setActiveTab('quizzes')}
              variant={activeTab === 'quizzes' ? 'secondary' : 'ghost'}
              className="w-full justify-start text-left"
            >
              <Brain className="h-4 w-4 mr-3" />
              Manage Quizzes
            </Button>
            <Button
              onClick={() => setActiveTab('students')}
              variant={activeTab === 'students' ? 'secondary' : 'ghost'}
              className="w-full justify-start text-left"
            >
              <Users className="h-4 w-4 mr-3" />
              Manage Users
            </Button>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-medium text-sm">AD</span>
            </div>
            <div>
              <p className="font-medium">Admin User</p>
              <p className="text-sm text-gray-400">admin@educonnect.com</p>
            </div>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline"
            size="sm"
            className="w-full text-gray-300 border-gray-600 hover:bg-gray-800"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {activeTab === 'overview' ? 'Admin Dashboard' : 
                 activeTab === 'add-content' ? 'Create New Content' :
                 activeTab === 'lessons' ? 'Manage Lessons' :
                 activeTab === 'quizzes' ? 'Manage Quizzes' :
                 'Manage Users'}
              </h1>
              <p className="text-gray-600">
                {activeTab === 'overview' ? 'Monitor your educational platform performance' :
                 activeTab === 'add-content' ? 'Add new lessons, videos, notes, and quizzes' :
                 activeTab === 'lessons' ? 'View and edit existing lessons' :
                 activeTab === 'quizzes' ? 'View and edit existing quizzes' :
                 'Manage students and teachers'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Welcome back!</p>
                <p className="text-sm text-gray-500">Admin Panel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Admin Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.title}</p>
                          <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                        </div>
                        <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                          <stat.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Student Activity</CardTitle>
                    <CardDescription>Latest student progress and engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentStudents.map((student, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-medium">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-gray-600">{student.grade}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{student.progress}%</p>
                            <p className="text-xs text-gray-500">{student.lastActive}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Teacher Illustration */}
                <Card>
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1664382951771-40432ecc81bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1ODAwMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Teacher in classroom"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold mb-2">Empowering Rural Education</h3>
                      <p className="text-sm text-gray-600">
                        Your lessons are making a difference in students' lives. Keep up the great work!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Add Content Tab */}
          {activeTab === 'add-content' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-gray-900 mb-4">Create New Content</h2>
                <p className="text-xl text-gray-600">
                  Add lessons, videos, notes, and quizzes for your students
                </p>
              </div>

              <Tabs value={contentTab} onValueChange={setContentTab}>
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="lessons" className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Lessons
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Video Lectures
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Notes (PDF)
                  </TabsTrigger>
                  <TabsTrigger value="quiz-builder" className="flex items-center">
                    <Brain className="h-4 w-4 mr-2" />
                    Quizzes
                  </TabsTrigger>
                </TabsList>

                {/* Create Lesson */}
                <TabsContent value="lessons">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                        Create New Lesson
                      </CardTitle>
                      <CardDescription>
                        Design comprehensive lessons with structured content for your students
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="lesson-title">Lesson Title *</Label>
                            <Input 
                              id="lesson-title"
                              placeholder="e.g., Introduction to Quadratic Equations"
                              value={lessonForm.title}
                              onChange={(e) => setLessonForm(prev => ({ ...prev, title: e.target.value }))}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="lesson-subject">Subject *</Label>
                            <Select value={lessonForm.subject} onValueChange={(value) => setLessonForm(prev => ({ ...prev, subject: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="mathematics">Mathematics</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                                <SelectItem value="geography">Geography</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="lesson-duration">Duration (minutes)</Label>
                            <Input 
                              id="lesson-duration"
                              type="number"
                              placeholder="30"
                              value={lessonForm.duration}
                              onChange={(e) => setLessonForm(prev => ({ ...prev, duration: e.target.value }))}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Lesson Thumbnail</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                              <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">Upload thumbnail image</p>
                              <p className="text-xs text-gray-500 mb-4">PNG, JPG up to 2MB</p>
                              <Button variant="outline" size="sm">
                                <Upload className="h-4 w-4 mr-2" />
                                Choose Image
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lesson-description">Description *</Label>
                        <Textarea 
                          id="lesson-description"
                          placeholder="Provide a detailed description of what students will learn in this lesson..."
                          rows={4}
                          value={lessonForm.description}
                          onChange={(e) => setLessonForm(prev => ({ ...prev, description: e.target.value }))}
                        />
                      </div>

                      <div className="flex justify-end space-x-4 pt-6 border-t">
                        <Button variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button 
                          onClick={() => handleSuccess("Lesson created successfully!")}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save & Publish
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Continue with other tabs... */}
                <TabsContent value="videos">
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Upload</CardTitle>
                      <CardDescription>Upload video content for your lessons</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Video upload form would go here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes">
                  <Card>
                    <CardHeader>
                      <CardTitle>PDF Notes</CardTitle>
                      <CardDescription>Upload study materials and notes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">PDF upload form would go here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quiz-builder">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quiz Builder</CardTitle>
                      <CardDescription>Create interactive quizzes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Quiz builder would go here...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Manage Lessons Tab */}
          {activeTab === 'lessons' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Manage Lessons</h2>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Lesson
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Lessons</CardTitle>
                  <CardDescription>Manage your existing lessons</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lessons.map((lesson) => (
                        <TableRow key={lesson.id}>
                          <TableCell className="font-medium">{lesson.title}</TableCell>
                          <TableCell>{lesson.subject}</TableCell>
                          <TableCell>{lesson.duration}</TableCell>
                          <TableCell>{lesson.students}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              lesson.status === 'Published' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {lesson.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Manage Quizzes Tab */}
          {activeTab === 'quizzes' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Manage Quizzes</h2>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Quiz
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Quizzes</CardTitle>
                  <CardDescription>Manage your quiz content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Questions</TableHead>
                        <TableHead>Attempts</TableHead>
                        <TableHead>Avg Score</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {quizzes.map((quiz) => (
                        <TableRow key={quiz.id}>
                          <TableCell className="font-medium">{quiz.title}</TableCell>
                          <TableCell>{quiz.subject}</TableCell>
                          <TableCell>{quiz.questions}</TableCell>
                          <TableCell>{quiz.attempts}</TableCell>
                          <TableCell>{quiz.avgScore}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Manage Users Tab */}
          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Manage Users</h2>
                <div className="flex space-x-2">
                  <Input placeholder="Search users..." className="w-64" />
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {recentStudents.map((student, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-medium">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.grade}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{student.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">Last active: {student.lastActive}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};