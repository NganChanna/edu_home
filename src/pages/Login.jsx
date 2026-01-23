import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, Lock, ChevronRight } from "lucide-react";

import api from "../api/api";
import { ACCESS_TOKEN } from "../constants/constants";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [rootError, setRootError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setRootError("");
    try {
      const res = await api.post("/api/v1/auth/login", values);
      localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
      navigate("/");
    } catch (err) {
      setRootError(
        err.response?.data?.error ||
          "Login failed. Please check your credentials.",
      );
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

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50">
          {/* Header Section */}
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500">
              Enter your credentials to access your account
            </p>
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
                    <FormLabel className="text-slate-700">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          className="pl-10 bg-slate-50/50 focus-visible:ring-indigo-500"
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
                      <FormLabel className="text-slate-700">Password</FormLabel>
                      <Link
                        to="/forgot-password"
                        size="sm"
                        className="text-xs font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 bg-slate-50/50 focus-visible:ring-indigo-500"
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
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-200"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <span className="flex items-center justify-center">
                    Sign In <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                )}
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
              <Link
                to="/register"
                className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-center text-xs text-slate-400 uppercase tracking-widest font-medium">
          &copy; 2026 Edu-Home Platform
        </p>
      </div>
    </div>
  );
};

export default Login;
