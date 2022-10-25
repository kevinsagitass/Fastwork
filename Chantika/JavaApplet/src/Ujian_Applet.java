/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.applet.*;
import java.awt.Color;
import java.awt.Graphics;
import java.util.Random;

/**
 *
 * @author acer
 */
public class Ujian_Applet extends Applet implements Runnable {

    int xKotak, yKotak, arahXKotak, arahYKotak, widthKotak, heightKotak;
    boolean isMalam = false, isCarVisible = true, isAwanVisible = true, awanDanMobilJalan = false, isMatahariVisible = true;
    int tipeAnimasiMatahari = 0;
    int xMatahari, yMatahari, arahXMatahari, arahYMatahari, widthMatahari, heightMatahari;
    int xAwan, yAwan, arahXAwan;
    
    /**
     * Initialization method that will be called after the applet is loaded into
     * the browser.
     */
    public void init() {
        xKotak = 230;
        yKotak = 190;
        widthKotak = 20;
        heightKotak = 20;
        arahXKotak = -2;
        arahYKotak = -1;
        xMatahari = 150;
        yMatahari = 150;
        arahXMatahari = 1;
        arahYMatahari = 5;
        widthMatahari = 10;
        heightMatahari = 10;
        xAwan = 40;
        yAwan = 30;
        arahXAwan = 2;
        Thread t = new Thread(this);
        t.start();
        
    }
    
    public void paint(Graphics g) {
        // Background
        g.setColor(Color.CYAN);  
        if (isMalam) {
            g.setColor(Color.BLACK);   
        }
        g.fillRect(5, 5, 260, 240);
        
        // Jalan
        int xroad[] = {50, 250, 260};
        int yroad[] = {110, 200, 240};
        g.setColor(Color.GRAY);
        g.fillPolygon(xroad, yroad, 3);
        
        // Awan
        if (isAwanVisible) {
            drawCloud(g);
        }
        
        // Matahari
        if (isMatahariVisible) {
            g.setColor(Color.YELLOW);
            g.fillOval(xMatahari, yMatahari, widthMatahari, heightMatahari);   
        }
        
        // Gunung
        int xa[] = {0, 80, 160};
        int ya[] = {150, 90, 150};
        int xb[] = {100, 180, 260};
        int yb[] = {150, 90, 150};
        g.setColor(Color.BLUE);
        g.fillPolygon(xa, ya, 3);
        g.fillPolygon(xb, yb, 3);
        
         // Mobil
        if (isCarVisible) {
            g.setColor(Color.RED);
            g.fillRect(xKotak, yKotak, widthKotak, heightKotak);      
        }
    }
    
    public void run() {
        while(true) {
            try {
                animateMatahari(tipeAnimasiMatahari);
                if (awanDanMobilJalan) {
                    animateMobil();   
                    animateAwan();
                }
                repaint();
                Thread.sleep(50);
            } catch (Exception e) {
                
            }
        }
    }
    
    public void animateMobil() {
        xKotak += arahXKotak;
        yKotak += arahYKotak;
        if (xKotak < 150 && yKotak < 150) {
            widthKotak -= 1;
            heightKotak -= 1;   
        }
        if (xKotak < 130 || yKotak < 140) {
            isCarVisible = false;
        }
    }
    
    public void animateAwan() {
        xAwan += arahXAwan;
        if (xAwan >= 250) {
            isAwanVisible = false;
        }
    }
    
    public void animateMatahari(int type) {
        
        if (type == 0) {
            // Pagi
            xMatahari += arahXMatahari;
            yMatahari -= arahYMatahari;
            widthMatahari += 2;
            heightMatahari += 2;
            
            if (xMatahari >= 240 || yMatahari <= 20) {
                // Siang
                tipeAnimasiMatahari = 1;
            }
        } else if (type == 1) {
            awanDanMobilJalan = true;
            // Siang
            if (!isCarVisible && !isAwanVisible) {
                // Sore
                tipeAnimasiMatahari = 2;
            }
        } else if (type == 2) {
            // Sore
            xMatahari -= arahXMatahari;
            yMatahari += arahYMatahari;
            widthMatahari -= 2;
            heightMatahari -= 2;
            
            if (xMatahari <= 150 || yMatahari >= 150) {
                isMatahariVisible = false;
                isMalam = true;
            }
        }
    }
    
    private void drawCloud(Graphics g) {
        
        g.setColor(Color.WHITE);
        g.fillOval(xAwan, yAwan, 30, 30);
        g.fillOval(xAwan + 15, yAwan - 10, 30, 30);
        g.fillOval(xAwan + 22, yAwan + 2, 30, 30);
    }

    // TODO overwrite start(), stop() and destroy() methods
}
