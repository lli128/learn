"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  Star,
  MessageSquare,
  PenTool,
  Clock,
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Home as HomeIcon,
  Award,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function ProgramsPage() {
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
                className="hover:text-cyan-400 transition-colors"
              >
                特色 Features
              </Link>
              <Link
                href="/programs"
                className="text-cyan-400 transition-colors"
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
              专业课程
              <br />
              Specialized Programs
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              选择适合您的英语课程，快速达到移民、留学和职业发展的语言目标
              <br />
              Choose the right English program to achieve your immigration, study, and career language goals
            </p>
          </div>
        </div>
      </section>

      {/* CLB 5 Program - Detailed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-cyan-500/20 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center">
                    <div className="text-4xl font-bold">5</div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">CLB 5 基础强化</h2>
                    <p className="text-gray-400 text-lg">Canadian Language Benchmark Level 5</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    适合移民申请、工作签证等基础英语要求。CLB 5是加拿大移民系统的重要门槛，我们帮助您快速达标。
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Perfect for immigration applications and work permits. CLB 5 is an important threshold in the Canadian immigration system, and we help you achieve it quickly.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-6 border border-white/5">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">课程亮点 Program Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">目标达成时间：2-3个月 Timeline: 2-3 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">平均提升：从CLB 3-4到CLB 5 Average improvement: CLB 3-4 to CLB 5</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">通过率：98% Success rate: 98%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-black/30 border-white/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold">口语 Speaking</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>日常对话练习 Daily conversation practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>工作场景交流 Workplace communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>发音和语调训练 Pronunciation & intonation training</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-black/30 border-white/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <PenTool className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold">写作 Writing</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>基础书信写作 Basic letter writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>简单报告撰写 Simple report writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>常用句型和模板 Common sentence patterns & templates</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CLB 7 Program - Detailed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <div className="text-4xl font-bold">7</div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">CLB 7 高级进阶</h2>
                    <p className="text-gray-400 text-lg">Canadian Language Benchmark Level 7</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    适合快速移民通道、专业认证等高级要求。CLB 7能为您的Express Entry加分，大幅提高移民成功率。
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    For Express Entry and professional certification. CLB 7 adds points to your Express Entry profile, significantly increasing your immigration success rate.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-6 border border-white/5">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">课程亮点 Program Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">目标达成时间：3-4个月 Timeline: 3-4 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">平均提升：从CLB 5-6到CLB 7 Average: CLB 5-6 to CLB 7</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">通过率：95% Success rate: 95%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-black/30 border-white/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold">口语 Speaking</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span>复杂话题讨论 Complex topic discussions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span>专业场景模拟 Professional scenario simulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span>高级表达技巧 Advanced expression techniques</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-black/30 border-white/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <PenTool className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold">写作 Writing</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span>学术写作训练 Academic writing training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span>商务报告撰写 Business report writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span>高级语法和词汇 Advanced grammar & vocabulary</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* IELTS Speaking Program - Detailed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-green-500/20 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                    <MessageSquare className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">雅思口语 IELTS Speaking</h2>
                    <p className="text-gray-400 text-lg">Part 1, 2 & 3 Mastery</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    全面覆盖雅思口语三个部分，真题模拟，考官级反馈。帮助您在雅思口语考试中取得6.5-8.0分。
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Complete coverage of all three IELTS speaking parts with real exam simulations and examiner-level feedback. Achieve 6.5-8.0 band scores.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-6 border border-white/5">
                  <h3 className="text-xl font-bold mb-4 text-green-400">目标分数 Target Scores</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <div className="text-3xl font-bold text-green-400 mb-1">6.5</div>
                      <div className="text-sm text-gray-400">移民基准 Immigration</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <div className="text-3xl font-bold text-green-400 mb-1">7.0+</div>
                      <div className="text-sm text-gray-400">学术要求 Academic</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-black/30 border-white/5 p-6">
                  <h3 className="text-lg font-bold mb-4 text-green-400">Part 1: 日常话题 Daily Topics</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>快速应答技巧 Quick response techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>常见话题准备 Common topics preparation</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-black/30 border-white/5 p-6">
                  <h3 className="text-lg font-bold mb-4 text-green-400">Part 2: 独白演讲 Monologue</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>2分钟演讲结构 2-minute speech structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>话题卡应对策略 Cue card strategies</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-black/30 border-white/5 p-6">
                  <h3 className="text-lg font-bold mb-4 text-green-400">Part 3: 深度讨论 Discussion</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>抽象话题分析 Abstract topic analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>高级词汇运用 Advanced vocabulary usage</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* IELTS Writing Program - Detailed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-orange-500/20 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                    <PenTool className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">雅思写作 IELTS Writing</h2>
                    <p className="text-gray-400 text-lg">Task 1 & Task 2 Excellence</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    任务1和2全面突破，高分模板和批改服务。李博士作为CELPIP写作考官，提供考官级别的专业反馈。
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Complete mastery of Task 1 and Task 2 with high-scoring templates and correction services. Dr. Li, as a CELPIP Writing Examiner, provides examiner-level professional feedback.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-6 border border-white/5">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">服务内容 Services Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">逐篇作文批改 Individual essay correction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">考官评分标准讲解 Examiner scoring criteria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">无限次修改润色 Unlimited revisions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-black/30 border-white/5 p-6">
                  <h3 className="text-lg font-bold mb-4 text-orange-400">Task 1: 图表描述 Data Description</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>柱状图/折线图/饼图 Bar/Line/Pie charts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>流程图和地图题 Process diagrams & maps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>数据对比和趋势分析 Data comparison & trend analysis</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-black/30 border-white/5 p-6">
                  <h3 className="text-lg font-bold mb-4 text-orange-400">Task 2: 议论文 Essay Writing</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>观点论证 Opinion & argumentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>利弊分析 Advantages & disadvantages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>问题解决方案 Problem & solution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      <span>双边讨论 Two-part questions</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">课程对比 Program Comparison</h2>
            <p className="text-gray-400 text-lg">选择最适合您的课程 Choose the Best Program for You</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-gray-400">项目 Program</th>
                  <th className="text-center p-4 text-gray-400">时长 Duration</th>
                  <th className="text-center p-4 text-gray-400">目标 Target</th>
                  <th className="text-center p-4 text-gray-400">适用 Best For</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center font-bold">5</div>
                      <span className="font-semibold">CLB 5 基础</span>
                    </div>
                  </td>
                  <td className="text-center p-4">2-3个月</td>
                  <td className="text-center p-4">CLB 5达标</td>
                  <td className="text-center p-4">工作签证、基础移民</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold">7</div>
                      <span className="font-semibold">CLB 7 高级</span>
                    </div>
                  </td>
                  <td className="text-center p-4">3-4个月</td>
                  <td className="text-center p-4">CLB 7达标</td>
                  <td className="text-center p-4">快速通道、专业认证</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-10 h-10 text-green-400" />
                      <span className="font-semibold">IELTS 口语</span>
                    </div>
                  </td>
                  <td className="text-center p-4">2-3个月</td>
                  <td className="text-center p-4">6.5-8.0分</td>
                  <td className="text-center p-4">留学、移民加分</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <PenTool className="w-10 h-10 text-orange-400" />
                      <span className="font-semibold">IELTS 写作</span>
                    </div>
                  </td>
                  <td className="text-center p-4">2-3个月</td>
                  <td className="text-center p-4">6.5-8.0分</td>
                  <td className="text-center p-4">学术申请、移民</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action - Book Now */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-cyan-500/20 p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">找到适合您的课程了吗？</h2>
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Found the Right Program for You?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              立即预约免费评估，李博士将为您推荐最适合的学习方案，帮助您快速达到语言目标！
              <br />
              <span className="text-gray-400">
                Book a free assessment now! Dr. Li will recommend the best learning plan and help you achieve your language goals quickly!
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
