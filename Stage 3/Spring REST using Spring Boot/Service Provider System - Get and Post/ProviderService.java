package com.service;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import com.model.Connection;

@Component
public class ProviderService {

	ArrayList<Connection> connectionList = new ArrayList<Connection>();
	
	public ArrayList<Connection> getConnectionList() {
		return connectionList;
	}

	public void setConnectionList(ArrayList<Connection> connectionList) {
		this.connectionList = connectionList;
	}

	public ProviderService(){
		Connection connectionObj1=new Connection(1,"peter","unlimited","prepaid");
		Connection connectionObj2=new Connection(2,"John","plan500","postpaid");
		connectionList.add(connectionObj1);
		connectionList.add(connectionObj2);
		
	}
	
	public boolean addConnection(Connection connectionObj)
	{
		return connectionList.add(connectionObj);
	}
	
	public ArrayList<Connection> viewAllConnections()
	{
		return connectionList;
	}
	
	public Connection findConnectionById(int connectionNum)
	{
		Connection obj = null;
		for (Connection con : connectionList){
		    if (con.getConnectionNum()==connectionNum){
		        obj=con;
		        break;
		    }
		}
		return obj;
	}
}
