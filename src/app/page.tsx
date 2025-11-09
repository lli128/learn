"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "@/components/BookingDialog";
import {
  Github,
  Shield,
  Eye,
  Home as HomeIcon,
  Box,
  Monitor,
  Wrench,
  Database,
  Radio,
  Cloud,
  ChevronDown,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Maximize,
  AlertCircle,
  Users,
  FileText,
  Layers,
  GraduationCap,
  BookOpen,
  Award,
  Target,
  Brain,
  Sparkles,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  MessageSquare,
  PenTool,
  CheckCircle,
  Globe,
} from "lucide-react";

export default function Home() {
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
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                首页 Home
              </a>
              <Link
                href="/features"
                className="hover:text-cyan-400 transition-colors"
              >
                特色 Features
              </Link>
              <a
                href="#programs"
                className="hover:text-cyan-400 transition-colors"
              >
                课程 Programs
              </a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                关于 About
              </a>
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
      <section
        id="home"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20">
                英语专家 English Language Specialist
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Dr. Li's
                <br />
                Learning Clinic
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6">
                专注英语，成就梦想
                <br />
                Master English, Achieve Your Dreams
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                专业CLB 5/7及雅思口语写作培训。我们专注于帮助学生快速提升英语能力，达到移民、留学和职业发展目标。
                Expert training in CLB 5/7 and IELTS Speaking & Writing. Fast-track your English proficiency for immigration, study, and career goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setBookingOpen(true)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                >
                  免费评估 Free Assessment
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => setBookingOpen(true)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                >
                  <Clock className="mr-2 w-4 h-4" />
                  查看课表 Schedule
                </Button>
              </div>
            </div>

            {/* Mockup Browser */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                <div className="bg-gray-800/50 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-400">
                    canlearn.pro
                  </div>
                </div>
                <div className="bg-black p-8 aspect-video flex flex-col items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      李博士学习诊所
                    </h3>
                    <p className="text-sm text-gray-400">
                      CLB • IELTS • English Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">核心优势 Core Advantages</h2>
            <p className="text-gray-400 text-lg">为什么选择我们的英语培训？ Why Choose Our English Training?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">CELPIP 考官 Official Examiner</h3>
              <p className="text-gray-400 leading-relaxed">
                现任CELPIP写作考官，深谙评分标准和应试策略。Current CELPIP Writing Examiner with deep insights into scoring criteria.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-400 hover:text-green-300 transition-colors cursor-default">口语突破 Speaking Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                针对性口语训练，模拟真实考试场景，快速提升流利度和准确性。Targeted speaking practice with real exam simulations.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <PenTool className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-400 hover:text-orange-300 transition-colors cursor-default">写作提升 Writing Mastery</h3>
              <p className="text-gray-400 leading-relaxed">
                系统写作训练，涵盖所有题型，提供详细批改和个性化反馈。Comprehensive writing training with detailed feedback.
              </p>
            </Card>

            {/* Feature Card 4 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400 hover:text-purple-300 transition-colors cursor-default">定制课程 Customized Plans</h3>
              <p className="text-gray-400 leading-relaxed">
                根据您的当前水平和目标分数，量身定制学习计划。Personalized study plans based on your level and target score.
              </p>
            </Card>

            {/* Feature Card 5 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400 hover:text-blue-300 transition-colors cursor-default">高通过率 High Success Rate</h3>
              <p className="text-gray-400 leading-relaxed">
                95%的学生在3个月内达到目标分数。95% of students achieve their target scores within 3 months.
              </p>
            </Card>

            {/* Feature Card 6 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-400 hover:text-teal-300 transition-colors cursor-default">移民就业 Immigration & Career</h3>
              <p className="text-gray-400 leading-relaxed">
                专注移民和职业发展所需的英语能力培训。Focus on English skills for immigration and career advancement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">专业课程 Specialized Programs</h2>
            <p className="text-gray-400 text-lg">
              选择适合您的英语课程 Choose Your English Program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CLB 5 Program */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center">
                  <div className="text-2xl font-bold">5</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">CLB 5 基础强化</h3>
                  <p className="text-gray-400 text-sm">
                    Canadian Language Benchmark Level 5
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5 mb-4">
                <p className="text-gray-300 mb-4">
                  适合移民申请、工作签证等基础英语要求。Perfect for immigration applications and work permits.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>口语 Speaking: 日常对话、工作交流 Daily & Work Communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-cyan-400" />
                    <span>写作 Writing: 基础书信、简单报告 Letters & Simple Reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>目标达成时间 Timeline: 2-3个月 2-3 months</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* CLB 7 Program */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <div className="text-2xl font-bold">7</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors cursor-default">CLB 7 高级进阶</h3>
                  <p className="text-gray-400 text-sm">
                    Canadian Language Benchmark Level 7
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5 mb-4">
                <p className="text-gray-300 mb-4">
                  适合快速移民通道、专业认证等高级要求。For Express Entry and professional certification.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    <span>口语 Speaking: 复杂话题、专业讨论 Complex Topics & Professional Discussions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-purple-400" />
                    <span>写作 Writing: 学术写作、商务报告 Academic & Business Writing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>目标达成时间 Timeline: 3-4个月 3-4 months</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* IELTS Speaking */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors cursor-default">雅思口语 IELTS Speaking</h3>
                  <p className="text-gray-400 text-sm">
                    Part 1, 2 & 3 Mastery
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5 mb-4">
                <p className="text-gray-300 mb-4">
                  全面覆盖三个部分，真题模拟，考官级反馈。Complete coverage with examiner-level feedback.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-400" />
                    <span>Part 1: 日常话题快速应答 Quick Response to Daily Topics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-400" />
                    <span>Part 2: 独白演讲技巧 Monologue Speech Techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-400" />
                    <span>Part 3: 深度讨论能力 In-depth Discussion Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>目标 Target: 6.5-8.0分 Band Score</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* IELTS Writing */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                  <PenTool className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors cursor-default">雅思写作 IELTS Writing</h3>
                  <p className="text-gray-400 text-sm">
                    Task 1 & Task 2 Excellence
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5 mb-4">
                <p className="text-gray-300 mb-4">
                  任务1和2全面突破，高分模板和批改服务。High-scoring templates with detailed corrections.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    <span>Task 1: 图表描述、流程图、地图 Charts, Processes, Maps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    <span>Task 2: 议论文、观点分析 Essays & Opinion Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    <span>逐篇批改 Individual Essay Correction & Feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>目标 Target: 6.5-8.0分 Band Score</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing/Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">课时安排 Session Options</h2>
            <p className="text-gray-400 text-lg">
              灵活的课程安排和优惠套餐 Flexible Sessions & Package Deals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Session Types */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                课程选项 Course Options
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                    1:1
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1 text-white">一对一课程 One-on-One</div>
                    <div className="text-sm text-gray-400">
                      60分钟/课 60 min - 个性化定制 Personalized
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                    1:3
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1 text-white">小班课程 Small Group</div>
                    <div className="text-sm text-gray-400">
                      90分钟/课 90 min - 3-5人小组 3-5 students
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                    冲刺
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1 text-white">考前冲刺 Intensive Prep</div>
                    <div className="text-sm text-gray-400">
                      2小时/课 2 hours - 模拟考试 Mock Tests
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                联系方式 Contact Information
              </h3>
              <p className="text-gray-400 mb-6">
                欢迎咨询课程详情和价格。提供免费英语水平评估和学习规划。
                <br />
                Contact us for pricing. Free English level assessment and study planning available.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="text-sm text-cyan-400 mb-2">电话 Phone</div>
                  <div className="font-mono text-lg text-white">
                    (548) 377-2188
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="text-sm text-cyan-400 mb-2">邮箱 Email</div>
                  <div className="font-mono text-lg text-white">
                    li81@uwindsor.ca
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="text-sm text-cyan-400 mb-2">微信 WeChat</div>
                  <div className="font-mono text-lg text-white">
                    linl71
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-default">授课方式 Teaching Methods</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">线上授课</div>
                  <div className="text-sm text-gray-400">Online via Zoom</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">线下面授</div>
                  <div className="text-sm text-gray-400">In-Person</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">口语陪练</div>
                  <div className="text-sm text-gray-400">Speaking Practice</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <PenTool className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">作文批改</div>
                  <div className="text-sm text-gray-400">Essay Correction</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-teal-950/30 to-cyan-950/30 border-cyan-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                15+
              </div>
              <div className="text-gray-400">年专注英语</div>
              <div className="text-sm text-gray-500">Years of Experience</div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border-blue-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">
                800+
              </div>
              <div className="text-gray-400">成功学员</div>
              <div className="text-sm text-gray-500">Successful Students</div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-purple-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-400">达标率</div>
              <div className="text-sm text-gray-500">Pass Rate</div>
            </Card>

            <Card className="bg-gradient-to-br from-pink-950/30 to-rose-950/30 border-pink-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">3个月</div>
              <div className="text-gray-400">平均达标</div>
              <div className="text-sm text-gray-500">Avg. Time to Goal</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">学生反馈 Student Success Stories</h2>
            <p className="text-gray-400 text-lg">
              听听我们学生的真实评价 Hear from Our Students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold">
                  张
                </div>
                <div>
                  <div className="font-semibold text-white">张伟 David Zhang</div>
                  <div className="text-sm text-gray-400">CLB 7 达标 Achieved</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-2">
                "在李博士的帮助下，我从CLB 5提升到CLB 7只用了3个月！口语和写作都有显著进步，成功通过了快速移民通道。"
              </p>
              <p className="text-gray-400 text-sm">
                "With Dr. Li's help, I improved from CLB 5 to CLB 7 in just 3 months! Both speaking and writing improved significantly, and I successfully qualified for Express Entry."
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold">
                  李
                </div>
                <div>
                  <div className="font-semibold text-white">李梅 Mei Li</div>
                  <div className="text-sm text-gray-400">IELTS 7.0 口语 Speaking</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-2">
                "雅思口语从5.5提高到7.0！李老师的教学方法非常有效，特别是Part 2和Part 3的技巧训练让我信心倍增。"
              </p>
              <p className="text-gray-400 text-sm">
                "My IELTS Speaking improved from 5.5 to 7.0! Dr. Li's teaching methods are very effective, especially the Part 2 and Part 3 technique training boosted my confidence."
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center font-bold">
                  王
                </div>
                <div>
                  <div className="font-semibold text-white">王强 Kevin Wang</div>
                  <div className="text-sm text-gray-400">IELTS 7.5 写作 Writing</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-2">
                "写作Task 2一直是我的弱项，在李博士的指导下，我掌握了高分模板和论证技巧，最终写作拿到了7.5分！"
              </p>
              <p className="text-gray-400 text-sm">
                "Writing Task 2 was always my weakness. With Dr. Li's guidance, I mastered high-scoring templates and argumentation techniques, and finally scored 7.5 in Writing!"
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center font-bold">
                  陈
                </div>
                <div>
                  <div className="font-semibold text-white">陈晓 Grace Chen</div>
                  <div className="text-sm text-gray-400">CLB 5 快速达标 Achieved</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-2">
                "两个月就达到了CLB 5的要求！李老师针对我的薄弱环节制定了学习计划，口语和写作都有了质的飞跃。"
              </p>
              <p className="text-gray-400 text-sm">
                "I achieved CLB 5 requirements in just 2 months! Dr. Li created a study plan targeting my weak areas, and both my speaking and writing improved dramatically."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">关于李博士 About Dr. Li</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                李博士拥有心理学与教育研究博士学位，专注CLB和雅思培训15年以上。作为现任CELPIP写作考官和安大略省TESL认证教师，他深谙评分标准，能够精准把握学生的提升方向。
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Dr. Li holds a PhD in Psychology and Educational Studies with 15+ years specializing in CLB and IELTS training. As a current CELPIP Writing Examiner and Ontario TESL Certified Teacher, he has deep insights into scoring criteria and can precisely guide students to improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">心理学与教育研究博士 PhD in Psychology & Educational Studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    现任CELPIP写作考官 Current CELPIP Writing Examiner
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">安大略省TESL认证教师 Ontario TESL Certified Teacher</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">800+学生成功案例 800+ Success Stories</span>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center font-bold text-2xl">
                  李
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">李博士学习诊所</h3>
                  <p className="text-sm text-gray-400">
                    Dr. Li's Learning Clinic
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 rounded-lg p-6 mb-6">
                <p className="text-center text-lg italic text-gray-300">
                  "专注英语，让每一位学生都能达到移民和职业发展的语言目标"
                </p>
                <p className="text-center text-sm text-gray-400 mt-2">
                  "Focused on English excellence, helping every student achieve their immigration and career language goals"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    CLB
                  </div>
                  <div className="text-xs text-gray-400">5 & 7</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    CELPIP
                  </div>
                  <div className="text-xs text-gray-400">Examiner</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-1">
                    TESL
                  </div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center font-bold text-sm">
                  李
                </div>
                <span className="text-xl font-bold">Dr. Li's Learning Clinic</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                专注英语，成就梦想。CLB和雅思专业培训，助您实现移民和职业目标。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">快速链接 Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-cyan-400 transition-colors">
                    核心优势 Advantages
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-cyan-400 transition-colors">
                    专业课程 Programs
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">
                    关于我们 About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-4">课程项目 Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    CLB 5 基础强化
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    CLB 7 高级进阶
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    雅思口语写作 IELTS
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">联系我们 Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="tel:+15483772188" className="hover:text-cyan-400 transition-colors">
                    电话 (548) 377-2188
                  </a>
                </li>
                <li>
                  <a href="mailto:li81@uwindsor.ca" className="hover:text-cyan-400 transition-colors">
                    li81@uwindsor.ca
                  </a>
                </li>
                <li className="hover:text-cyan-400 transition-colors">
                  微信 WeChat: linl71
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Dr. Li's Learning Clinic. 版权所有 All Rights Reserved
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
