package com.model;

public class Connection {
	private int connectionNum;
	private String custName;
	private String planName;
	private String connectionType;
	public Connection(int connectionNum, String custName, String planName, String connectionType) {
		super();
		this.connectionNum = connectionNum;
		this.custName = custName;
		this.planName = planName;
		this.connectionType = connectionType;
	}
	public int getConnectionNum() {
		return connectionNum;
	}
	public void setConnectionNum(int connectionNum) {
		this.connectionNum = connectionNum;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	public String getConnectionType() {
		return connectionType;
	}
	public void setConnectionType(String connectionType) {
		this.connectionType = connectionType;
	}	 	  	    	  		      	 	

	public Connection()
	{
		
	}
}
