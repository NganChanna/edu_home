import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Mail, Lock, ChevronRight, GraduationCap } from 'lucide-react';
import api from '../api/api';
import { ACCESS_TOKEN } from '../constants/constants';
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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [rootError, setRootError] = useState('');
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setRootError('');
    try {
      const res = await api.post('/api/v1/auth/login', values);
      localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
      navigate('/');
    } catch (err) {
      setRootError(err.response?.data?.error || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-50 px-4">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-[420px]">
        
        {/* Brand/Logo Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 mb-4 shadow-lg shadow-indigo-200">
             <GraduationCap className="text-white w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome to Edu-Home</h1>
          <p className="text-slate-500 mt-1">Please sign in to your account</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 p-8">
          {/* Error Message Container */}
          {rootError && (
            <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
              {rootError}
            </div>
          )}

          <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
          <FormControl>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                id="email"
                placeholder="name@example.com"
                className="pl-10 h-11 bg-white border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel className="text-slate-700 font-medium">Password</FormLabel>
            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot?
            </Link>
          </div>

          <FormControl>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-11 bg-white border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button
      type="submit"
      className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-[0.98]"
      disabled={loading}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign In"}
    </Button>
  </form>
</Form>


         

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400 font-medium">Or continue with</span>
            </div>
          </div>

          {/* Secondary Action: Social Login */}
          <div className="space-y-4">
            <GoogleLoginBtn />
            
            <p className="text-center text-sm text-slate-500 mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400 font-medium tracking-widest uppercase">
          &copy; 2026 Edu-Home Platform
        </p>
      </div>
    </div>
  );
};

export default Login;