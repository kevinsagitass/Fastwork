/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package crud;
import java.sql.*;
/**
 *
 * @author Estructior
 */
public class koneksi {
    private Statement data = null;
    private Connection koneksi = null;
    
    private String Url="jdbc:mysql://localhost:3306/lepkom_11117320?zeroDateTimeBehavior=convertToNull";
    private String DBUser = "root";
    private String DBPassword = "root";
    
    public koneksi(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            koneksi = DriverManager.getConnection(Url, DBUser, DBPassword);
            data = this.koneksi.createStatement();
            System.out.println("Koneksi berhasil");
        }catch(Throwable ex){
            System.out.println("error : "+ex);
            System.exit(1);
        }
    }
    public Connection getConnection(){
        return koneksi;
    }
    
    public Statement getStatement(){
        return data;
    }
}
