"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    testType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      alert("Please select a date");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const appointmentDetails = `
New Appointment Booking - Dr. Li's Learning Clinic

Date: ${format(date, "MMMM dd, yyyy")}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Test Type: ${formData.testType}

---
This booking was submitted from drlilearning.com
    `;

    try {
      // Using mailto as a simple solution
      const mailtoLink = `mailto:lli128@outlook.com?subject=New Appointment Booking - ${format(date, "MMM dd, yyyy")}&body=${encodeURIComponent(appointmentDetails)}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setTimeout(() => {
        onOpenChange(false);
        // Reset form
        setDate(undefined);
        setFormData({ name: "", phone: "", email: "", testType: "" });
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">预约课程 Book an Appointment</DialogTitle>
          <DialogDescription className="text-gray-400">
            选择日期并填写您的信息 Select a date and fill in your information
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Calendar Section */}
          <div className="space-y-3">
            <Label className="text-white flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              选择日期 Select Date
            </Label>
            <div className="flex justify-center p-4 bg-black/30 rounded-lg border border-white/5">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="rounded-md text-white"
              />
            </div>
            {date && (
              <p className="text-sm text-cyan-400 text-center">
                已选日期 Selected: {format(date, "MMMM dd, yyyy")}
              </p>
            )}
          </div>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                姓名 Name *
              </Label>
              <Input
                id="name"
                placeholder="张伟 / John Smith"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-black/30 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                电话 Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(226) 975-0627"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="bg-black/30 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                邮箱 Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-black/30 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="testType" className="text-white">
                课程类型 Test Type *
              </Label>
              <Select value={formData.testType} onValueChange={(value) => handleInputChange("testType", value)} required>
                <SelectTrigger className="bg-black/30 border-white/10 text-white">
                  <SelectValue placeholder="选择课程 Select..." />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  <SelectItem value="CLB 5">CLB 5 基础强化</SelectItem>
                  <SelectItem value="CLB 7">CLB 7 高级进阶</SelectItem>
                  <SelectItem value="CELPIP">CELPIP 考试准备</SelectItem>
                  <SelectItem value="IELTS Speaking">雅思口语 IELTS Speaking</SelectItem>
                  <SelectItem value="IELTS Writing">雅思写作 IELTS Writing</SelectItem>
                  <SelectItem value="General English">综合英语 General English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
              ✓ 预约信息已发送！Opening your email client...
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
              ✗ 发送失败，请重试 Submission failed, please try again
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-white/20 hover:bg-white/5"
            >
              取消 Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !date}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "发送中... Sending..." : "确认预约 Confirm Booking"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
