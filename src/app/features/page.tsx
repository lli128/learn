"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import Link from "next/link";
import {
  Award,
  Target,
  CheckCircle,
  Globe,
  MessageSquare,
  PenTool,
  GraduationCap,
  BookOpen,
  Brain,
  Users,
  Clock,
  TrendingUp,
  Star,
  Calendar,
  Monitor,
  Home as HomeIcon,
  Sparkles,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function FeaturesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center font-bold text-sm">
                李
              </div>
              <span className="text-xl font-bold">Dr. Li's Learning Clinic</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                首页 Home
              </Link>
              <Link
                href="/features"
                className="text-cyan-400 transition-colors"
              >
                特色 Features
              </Link>
              <Link
                href="/#programs"
                className="hover:text-cyan-400 transition-colors"
              >
                课程 Programs
              </Link>
              <Link href="/#about" className="hover:text-cyan-400 transition-colors">
                关于 About
              </Link>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">预约 Book Now</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              核心特色
              <br />
              Core Features
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              探索李博士学习诊所的专业英语培训优势，了解我们如何帮助您实现语言学习目标
              <br />
              Discover the professional advantages of Dr. Li's Learning Clinic and how we help you achieve your language goals
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: CELPIP Examiner */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">CELPIP 考官 Official Examiner</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                现任CELPIP写作考官，深谙评分标准和应试策略。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Current CELPIP Writing Examiner with deep insights into scoring criteria.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>了解评分细节和要点 Understanding of scoring details and key points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>提供考官级别的反馈 Examiner-level feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>精准把握提分方向 Precise improvement guidance</span>
                </li>
              </ul>
            </Card>

            {/* Feature 2: Speaking Excellence */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400 hover:text-green-300 transition-colors cursor-default">口语突破 Speaking Excellence</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                针对性口语训练，模拟真实考试场景，快速提升流利度和准确性。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Targeted speaking practice with real exam simulations.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>一对一口语陪练 One-on-one speaking practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>真题模拟训练 Real exam simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>发音和语调纠正 Pronunciation & intonation correction</span>
                </li>
              </ul>
            </Card>

            {/* Feature 3: Writing Mastery */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400 hover:text-orange-300 transition-colors cursor-default">写作提升 Writing Mastery</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                系统写作训练，涵盖所有题型，提供详细批改和个性化反馈。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Comprehensive writing training with detailed feedback.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>逐篇作文批改 Individual essay correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>高分模板和范文 High-scoring templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>写作思路训练 Writing structure training</span>
                </li>
              </ul>
            </Card>

            {/* Feature 4: Customized Plans */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 hover:text-purple-300 transition-colors cursor-default">定制课程 Customized Plans</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                根据您的当前水平和目标分数，量身定制学习计划。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Personalized study plans based on your level and target score.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>入学水平测试 Initial level assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>个性化学习路线 Customized learning path</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>定期进度跟踪 Regular progress tracking</span>
                </li>
              </ul>
            </Card>

            {/* Feature 5: High Success Rate */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 hover:text-blue-300 transition-colors cursor-default">高通过率 High Success Rate</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                95%的学生在3个月内达到目标分数。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                95% of students achieve their target scores within 3 months.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>800+成功案例 800+ success stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>平均提升1-2个等级 Average 1-2 level improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>学员真实反馈 Authentic student testimonials</span>
                </li>
              </ul>
            </Card>

            {/* Feature 6: Immigration & Career */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400 hover:text-teal-300 transition-colors cursor-default">移民就业 Immigration & Career</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                专注移民和职业发展所需的英语能力培训。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Focus on English skills for immigration and career advancement.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>快速通道移民准备 Express Entry preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>职业英语提升 Professional English enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>工作面试辅导 Job interview coaching</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">更多优势 Additional Advantages</h2>
            <p className="text-gray-400 text-lg">
              全方位的学习支持和服务 Comprehensive Learning Support & Services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">灵活时间 Flexible Schedule</h3>
                  <p className="text-gray-400 text-sm">适应您的生活节奏</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>周末和晚上时段可选 Weekend and evening slots available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>线上线下自由切换 Switch between online and in-person</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>可调整课程进度 Adjustable learning pace</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-default">学习资源 Learning Resources</h3>
                  <p className="text-gray-400 text-sm">丰富的学习材料</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>独家备考资料 Exclusive exam preparation materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>真题题库练习 Real exam question bank</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span>课后作业批改 Homework correction</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors cursor-default">技术支持 Tech Support</h3>
                  <p className="text-gray-400 text-sm">先进的教学工具</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>高清视频教学 HD video lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>在线学习平台 Online learning platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>课程录像回放 Lesson recording playback</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors cursor-default">学习社区 Learning Community</h3>
                  <p className="text-gray-400 text-sm">互助学习氛围</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>学习小组交流 Study group discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>经验分享活动 Experience sharing events</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>定期学习讲座 Regular learning seminars</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Book Now */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-cyan-500/20 p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">准备开始您的英语学习之旅？</h2>
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Ready to Start Your English Learning Journey?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              立即预约免费评估，让李博士帮助您制定个性化学习计划，快速达到您的语言目标！
              <br />
              <span className="text-gray-400">
                Book a free assessment now and let Dr. Li help you create a personalized study plan to achieve your language goals quickly!
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg px-8 py-6"
              >
                <Calendar className="mr-2 w-5 h-5" />
                立即预约 Book Now
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-lg px-8 py-6"
                >
                  <HomeIcon className="mr-2 w-5 h-5" />
                  返回首页 Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Booking Dialog */}
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
