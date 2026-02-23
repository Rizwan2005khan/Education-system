import React from 'react';
import { 
  Search, 
  Play, 
  BookOpen, 
  Brain, 
  Award, 
  ChevronRight, 
  Star, 
  Download, 
  Video, 
  FileText 
} from 'lucide-react';
import { Button } from './ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from './ui/card';
import { ImageWithFallback } from './Figma/ImageWithFallback';

interface HomepageProps {
  onNavigate: (page: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  const subjects = [
    { name: 'Mathematics', icon: Brain, lessons: 45, color: 'bg-blue-500' },
    { name: 'Science', icon: BookOpen, lessons: 38, color: 'bg-green-500' },
    { name: 'English', icon: BookOpen, lessons: 32, color: 'bg-purple-500' },
    { name: 'History', icon: BookOpen, lessons: 28, color: 'bg-orange-500' },
  ];

  const featuredVideos = [
    { title: 'Introduction to Algebra', duration: '15 min', subject: 'Mathematics' },
    { title: 'Basic Chemistry', duration: '20 min', subject: 'Science' },
    { title: 'Grammar Fundamentals', duration: '18 min', subject: 'English' },
  ];

  const videoLectures = [
    { 
      id: 1,
      title: 'Advanced Algebra Concepts',
      subject: 'Mathematics',
      duration: '22 min',
      instructor: 'Dr Irfan Malik',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    { 
      id: 2,
      title: 'Organic Chemistry Basics',
      subject: 'Science',
      duration: '28 min',
      instructor: 'Prof. Rajesh Kumar',
      thumbnail: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGxlY3R1cmUlMjBvbmxpbmUlMjBjbGFzc3xlbnwxfHx8fDE3NTgxMDA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      id: 3,
      title: 'English Literature Analysis',
      subject: 'English',
      duration: '25 min',
      instructor: 'Ms. Anita Sharma',
      thumbnail: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGxlY3R1cmUlMjBvbmxpbmUlMjBjbGFzc3xlbnwxfHx8fDE3NTgxMDA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      id: 4,
      title: 'Modern Indian History',
      subject: 'History',
      duration: '30 min',
      instructor: 'Dr. Vikram Singh',
      thumbnail: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGxlY3R1cmUlMjBvbmxpbmUlMjBjbGFzc3xlbnwxfHx8fDE3NTgxMDA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const pdfNotes = [
    { id: 1, title: 'Quadratic Equations - Complete Guide', subject: 'Mathematics', pages: 24, size: '2.3 MB' },
    { id: 2, title: 'Periodic Table & Chemical Bonding', subject: 'Science', pages: 18, size: '1.8 MB' },
    { id: 3, title: 'Shakespeare Sonnets Analysis', subject: 'English', pages: 32, size: '3.1 MB' },
    { id: 4, title: 'Independence Movement Timeline', subject: 'History', pages: 28, size: '2.7 MB' },
    { id: 5, title: 'Geometry Formulas & Theorems', subject: 'Mathematics', pages: 16, size: '1.5 MB' },
    { id: 6, title: 'Physics Laws & Applications', subject: 'Science', pages: 22, size: '2.1 MB' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', grade: 'Class 10', text: 'EduConnect helped me improve my math scores significantly!', rating: 5 },
    { name: 'Arjun Patel', grade: 'Class 9', text: 'The video lessons are so easy to understand and follow.', rating: 5 },
    { name: 'Anita Singh', grade: 'Class 11', text: 'I love the interactive quizzes. They make learning fun!', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
                Learn Anywhere, 
                <span className="text-green-600 block">Anytime</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Quality education for rural students. Access lessons, take quizzes, and track your progress all in one place.
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search lessons, subjects, topics..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <Button 
                onClick={() => onNavigate('dashboard')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                Start Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629359652978-a5d383151c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwb25saW5lJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc1ODAxNDUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning online"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Explore Subjects
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum aligned with your syllabus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className={`${subject.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <subject.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                  <CardDescription>{subject.lessons} lessons available</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => onNavigate('lessons')}
                    variant="outline" 
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive video lectures and study materials to support your learning
            </p>
          </div>

          {/* Video Lectures */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">Video Lectures</h3>
                  <p className="text-gray-600">Expert-led video lessons from experienced teachers</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwbGVjdHVyZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgxMDA1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Teacher giving lecture"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoLectures.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative">
                    <ImageWithFallback
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 line-clamp-2">{video.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{video.subject}</p>
                    <p className="text-xs text-gray-500">by {video.instructor}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PDF Notes & Study Materials */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">Study Notes & Materials</h3>
                  <p className="text-gray-600">Downloadable PDF notes and comprehensive study guides</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642439986788-825f9075691e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcmVhZGluZyUyMG5vdGVzJTIwc3R1ZHl8ZW58MXx8fHwxNzU4MTAwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student reading notes"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfNotes.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                          <span className="text-red-600 text-lg">📄</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1 line-clamp-2">{note.title}</h4>
                          <p className="text-xs text-gray-600">{note.subject}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{note.pages} pages</span>
                      <span>{note.size}</span>
                    </div>

                    <Button 
                      onClick={() => onNavigate('lessons')}
                      size="sm" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => onNavigate('lessons')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                View All Resources
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Featured Videos
            </h2>
            <p className="text-xl text-gray-600">
              Popular lessons to get you started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{video.subject}</p>
                  <p className="text-green-600 text-sm">{video.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Test Your Knowledge
            </h2>
            <p className="text-xl text-gray-600">
              Interactive quizzes to reinforce your learning
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl mb-4">
              Ready for a Challenge?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Take quizzes to test your understanding and earn points
            </p>
            <Button 
              onClick={() => onNavigate('quizzes')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our learning community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-semibold">EduConnect</span>
              </div>
              <p className="text-gray-400">
                Empowering rural students with quality education and digital learning resources.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Teachers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 support@educonnect.com</p>
                <p>📞 +91 12345 67890</p>
                <p>📍 Rural Education Hub, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};