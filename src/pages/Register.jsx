import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Mail, Lock, User, UserPlus, ChevronRight, GraduationCap } from 'lucide-react';

import api from '../api/api';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import GoogleLoginBtn from '../components/googleLoginBtn';

// 1. Validation Schema
const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [rootError, setRootError] = useState('');
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setRootError('');
    try {
      const { username, email, password } = values;
      await api.post('/api/v1/auth/register', { username, email, password });
      navigate('/login');
    } catch (err) {
      setRootError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-50 px-4 py-10">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[480px]">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600 mb-4 shadow-xl shadow-indigo-100 rotate-3">
             <GraduationCap className="text-white w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-slate-500 mt-2 font-medium">Join our community of learners today</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-10">
          
          {rootError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {rootError}
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Username */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-slate-700 font-semibold ml-1">Username</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                          <Input 
                            placeholder="johndoe" 
                            className="pl-10 h-11 bg-white border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-slate-700 font-semibold ml-1">Email</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                          <Input 
                            placeholder="name@example.com" 
                            className="pl-10 h-11 bg-white border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-semibold ml-1">Password</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10 h-11 bg-white border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-semibold ml-1">Confirm</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10 h-11 bg-white border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98]" 
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <span className="flex items-center justify-center">
                    Get Started <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-wider">OR</span>
            </div>
          </div>

          <div className="space-y-6">
            <GoogleLoginBtn />
            
            <p className="text-center text-sm text-slate-500 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-indigo-600 hover:underline underline-offset-4 transition-all">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-8 text-center text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">
          &copy; 2026 Edu-Home &bull; Intellectual Growth
        </footer>
      </div>
    </div>
  );
};

export default Register;