package com.model;

public class Course {
	
	private int courseId;
	private String coursename;
	private double courseFees;
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public double getCourseFees() {
		return courseFees;
	}
	public void setCourseFees(double courseFees) {
		this.courseFees = courseFees;
	}
	
	public Course(int courseId, String coursename, double courseFees) {
		super();
		this.courseId = courseId;
		this.coursename = coursename;
		this.courseFees = courseFees;
	}
	
	
	public Course()
	{
		
	}

}
