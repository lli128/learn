import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center font-bold text-sm">
                李
              </div>
              <span className="text-xl font-bold">Dr. Li's Learning Clinic</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                首页 Home
              </a>
              <a
                href="#features"
                className="hover:text-cyan-400 transition-colors"
              >
                特色 Features
              </a>
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
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">预约 Book Now</span>
            </a>
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
                专业辅导 Professional Tutoring
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Dr. Li's
                <br />
                Learning Clinic
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6">
                启发智慧，成就未来
                <br />
                Inspire Minds, Achieve Excellence
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                提供个性化一对一辅导，涵盖数学、科学、英语等科目。我们致力于帮助每位学生发掘潜能，取得学业成功。
                Personalized one-on-one tutoring in Math, Science, English, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                >
                  免费试课 Free Trial
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5"
                >
                  <Clock className="mr-2 w-4 h-4" />
                  查看时间表 Schedule
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
                    drlilearning.com
                  </div>
                </div>
                <div className="bg-black p-8 aspect-video flex flex-col items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
                      李博士学习诊所
                    </h3>
                    <p className="text-sm text-gray-400">
                      Dr. Li's Learning Clinic
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
            <h2 className="text-4xl font-bold mb-4">核心优势 Core Features</h2>
            <p className="text-gray-400 text-lg">为什么选择我们？ Why Choose Us?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">博士级导师 Expert Tutors</h3>
              <p className="text-gray-400 leading-relaxed">
                所有导师均拥有博士学位或硕士学历，教学经验丰富。All tutors hold PhD or Master's degrees with extensive teaching experience.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">个性化教学 Personalized Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                根据每位学生的学习风格和需求定制课程计划。Customized curriculum tailored to each student's learning style and needs.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">显著提升 Proven Results</h3>
              <p className="text-gray-400 leading-relaxed">
                98%的学生成绩提高一个等级以上。98% of students improve by at least one grade level.
              </p>
            </Card>

            {/* Feature Card 4 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">批判性思维 Critical Thinking</h3>
              <p className="text-gray-400 leading-relaxed">
                不仅传授知识，更培养学生的思维能力和学习方法。Focus on developing critical thinking skills and effective learning strategies.
              </p>
            </Card>

            {/* Feature Card 5 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">灵活安排 Flexible Schedule</h3>
              <p className="text-gray-400 leading-relaxed">
                线上线下均可，时间灵活安排，适应您的日程。Both online and in-person options with flexible scheduling to fit your calendar.
              </p>
            </Card>

            {/* Feature Card 6 */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">考试准备 Test Prep Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                SAT、ACT、AP、IB等各类考试专业辅导。Specialized preparation for SAT, ACT, AP, IB, and more.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">课程项目 Our Programs</h2>
            <p className="text-gray-400 text-lg">
              选择适合您的辅导课程 Choose the Right Program for You
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Math Program */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">数学辅导 Mathematics</h3>
                  <p className="text-gray-400 text-sm">
                    从基础到高级，全面覆盖
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    代数 Algebra I & II
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    几何 Geometry
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    微积分 Calculus (AP/IB)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    统计学 Statistics
                  </li>
                </ul>
              </div>
            </Card>

            {/* Science Program */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">科学辅导 Sciences</h3>
                  <p className="text-gray-400 text-sm">
                    物理、化学、生物全科
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    物理 Physics (AP/Honors)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    化学 Chemistry (AP/IB)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    生物 Biology (AP/IB)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    环境科学 Environmental Science
                  </li>
                </ul>
              </div>
            </Card>

            {/* English/Language Arts */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">英语文学 English & Literature</h3>
                  <p className="text-gray-400 text-sm">
                    阅读、写作、语法全面提升
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    阅读理解 Reading Comprehension
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    学术写作 Academic Writing
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    文学分析 Literary Analysis (AP)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    ESL/托福 ESL & TOEFL Prep
                  </li>
                </ul>
              </div>
            </Card>

            {/* Test Prep */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">考试准备 Test Preparation</h3>
                  <p className="text-gray-400 text-sm">
                    标准化考试专业训练
                  </p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-white/5">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    SAT/ACT 备考 Comprehensive Prep
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    AP科目 AP Subject Tests
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    IB课程 IB Diploma Program
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    大学申请 College Application Essays
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
              灵活的课程时长和优惠套餐 Flexible Duration & Package Deals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Session Types */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                课时选择 Session Types
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                    60
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">标准课时 Standard Session</div>
                    <div className="text-sm text-gray-400">
                      60分钟 60 minutes - 一对一辅导
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                    90
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">强化课时 Intensive Session</div>
                    <div className="text-sm text-gray-400">
                      90分钟 90 minutes - 深度学习
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                    120
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">专项突破 Extended Session</div>
                    <div className="text-sm text-gray-400">
                      120分钟 2 hours - 考试冲刺
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
                欢迎咨询课程详情和价格信息。我们提供免费试课和学习评估。
                <br />
                Contact us for detailed pricing and packages. Free trial session and learning assessment available.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="text-sm text-cyan-400 mb-2">电话 Phone</div>
                  <div className="font-mono text-lg">
                    (123) 456-7890
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="text-sm text-cyan-400 mb-2">邮箱 Email</div>
                  <div className="font-mono text-lg">
                    info@drlilearning.com
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="text-sm text-cyan-400 mb-2">地址 Address</div>
                  <div className="text-gray-300">
                    123 Education Avenue, Suite 100
                    <br />
                    San Francisco, CA 94102
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
              <h3 className="text-2xl font-bold">授课方式 Learning Methods</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">线上授课</div>
                  <div className="text-sm text-gray-400">Online Classes</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">线下面授</div>
                  <div className="text-sm text-gray-400">In-Person</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">小组课程</div>
                  <div className="text-sm text-gray-400">Small Groups</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">一对一</div>
                  <div className="text-sm text-gray-400">One-on-One</div>
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
              <div className="text-gray-400">年教学经验</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border-blue-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">
                500+
              </div>
              <div className="text-gray-400">成功学生</div>
              <div className="text-sm text-gray-500">Students Helped</div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-purple-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-400">满意度</div>
              <div className="text-sm text-gray-500">Satisfaction Rate</div>
            </Card>

            <Card className="bg-gradient-to-br from-pink-950/30 to-rose-950/30 border-pink-500/20 p-8 text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">A+</div>
              <div className="text-gray-400">平均提升</div>
              <div className="text-sm text-gray-500">Average Improvement</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">学生反馈 Student Success</h2>
            <p className="text-gray-400 text-lg">
              听听我们学生的真实评价 Hear from Our Students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold">
                  王
                </div>
                <div>
                  <div className="font-semibold">王晓明 Emily Wang</div>
                  <div className="text-sm text-gray-400">高中生 High School Student</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "李博士的辅导让我的SAT数学从650分提高到了790分！他的教学方法清晰易懂，让我真正理解了数学概念。"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                "Dr. Li helped me improve my SAT Math score from 650 to 790! His teaching methods are clear and helped me truly understand mathematical concepts."
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center font-bold">
                  李
                </div>
                <div>
                  <div className="font-semibold">李娜 Sarah Li</div>
                  <div className="text-sm text-gray-400">大学生 College Student</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "在Dr. Li的帮助下，我成功通过了AP化学和AP物理考试，双双获得5分！现在我对理科学习充满信心。"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                "With Dr. Li's help, I scored 5s on both AP Chemistry and AP Physics! Now I feel confident in science subjects."
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center font-bold">
                  张
                </div>
                <div>
                  <div className="font-semibold">张浩 Kevin Zhang</div>
                  <div className="text-sm text-gray-400">中学生 Middle School Student</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "以前我最怕数学，现在它成了我最喜欢的科目！李老师让学习变得有趣，我的成绩从C提高到了A。"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                "Math used to be my biggest fear, now it's my favorite subject! Dr. Li made learning fun, and my grades improved from C to A."
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center font-bold">
                  陈
                </div>
                <div>
                  <div className="font-semibold">陈美华 Michelle Chen</div>
                  <div className="text-sm text-gray-400">家长 Parent</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "作为家长，我非常感激李博士的耐心和专业。我女儿不仅学业进步了，还变得更加自信和独立。"
              </p>
              <p className="text-gray-400 text-sm mt-2">
                "As a parent, I'm grateful for Dr. Li's patience and expertise. My daughter not only improved academically but also became more confident and independent."
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
                李博士拥有斯坦福大学教育学博士学位和15年以上的教学经验。他专注于帮助学生建立扎实的学科基础，培养批判性思维能力，并在标准化考试中取得优异成绩。
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Dr. Li holds a PhD in Education from Stanford University with over 15 years of teaching experience. He specializes in helping students build strong academic foundations, develop critical thinking skills, and excel in standardized tests.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">斯坦福大学教育学博士 PhD in Education, Stanford</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">
                    15+年教学经验 15+ Years Teaching Experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">500+成功案例 500+ Success Stories</span>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center font-bold text-2xl">
                  李
                </div>
                <div>
                  <h3 className="text-xl font-bold">李博士学习诊所</h3>
                  <p className="text-sm text-gray-400">
                    Dr. Li's Learning Clinic
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 rounded-lg p-6 mb-6">
                <p className="text-center text-lg italic text-gray-300">
                  "启发每一位学生的潜能，成就他们的学业梦想"
                </p>
                <p className="text-center text-sm text-gray-400 mt-2">
                  "Unlock every student's potential and help them achieve their academic dreams"
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    个性化
                  </div>
                  <div className="text-xs text-gray-400">Personalized</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    专业
                  </div>
                  <div className="text-xs text-gray-400">Professional</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-1">
                    高效
                  </div>
                  <div className="text-xs text-gray-400">Effective</div>
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
                启发智慧，成就未来。专业的一对一辅导服务，助您实现学业目标。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">快速链接 Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-cyan-400 transition-colors">
                    核心优势 Core Features
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-cyan-400 transition-colors">
                    课程项目 Programs
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
              <h4 className="font-semibold mb-4">课程科目 Subjects</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    数学 Mathematics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    科学 Sciences
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    英语 English
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">联系我们 Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">
                    电话 (123) 456-7890
                  </a>
                </li>
                <li>
                  <a href="mailto:info@drlilearning.com" className="hover:text-cyan-400 transition-colors">
                    info@drlilearning.com
                  </a>
                </li>
                <li className="hover:text-cyan-400 transition-colors">
                  San Francisco, CA
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
    </div>
  );
}
