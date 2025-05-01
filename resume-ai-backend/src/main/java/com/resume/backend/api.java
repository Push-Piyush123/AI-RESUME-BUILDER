package com.resume.backend; // adjust the package if needed

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class api {

    @GetMapping("/")
    public String home() {
        return "✅ Backend is working!";
    }

    @GetMapping("/api/v1/resume/")
    public String hello() {
        return "👋 Hello from Resume AI Backend!";
    }
}
