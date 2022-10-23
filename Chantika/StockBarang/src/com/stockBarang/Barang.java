/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.stockBarang;

/**
 *
 * @author acer
 */
public class Barang {
    
    public String kode;
    
    public String nama;
    
    public String harga;
    
    public String stok;

    public Barang(String kode, String nama, String harga, String stok) {
        this.kode = kode;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
    
}
