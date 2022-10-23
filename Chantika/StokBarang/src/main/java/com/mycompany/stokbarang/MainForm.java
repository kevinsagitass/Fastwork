/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package com.mycompany.stokbarang;

import java.sql.ResultSet;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author acer
 */
public class MainForm extends javax.swing.JFrame {

    koneksi connect = new koneksi();
    ResultSet data = null;

    /**
     * Creates new form MainForm
     */
    public MainForm() {
        initComponents();
    }

    private void refresh() {

        int jumbaris = 0;
        int i = 0;

        String query = "select*from barang";

        try {
            data = connect.getStatement().executeQuery(query);
            while (data.next()) {
                jumbaris++;
            }
        } catch (SQLException ex) {

        }
        String isi[][] = new String[jumbaris][5];

        try {
            data = connect.getStatement().executeQuery(query);
            while (data.next()) {
                isi[i][0] = data.getString("kode");
                isi[i][1] = data.getString("nama");
                isi[i][2] = data.getString("harga");
                isi[i][3] = data.getString("stok");
                i++;
            }
        } catch (SQLException ex) {

        }
        String namakolom[] = {"kode", "nama", "harga", "stok"};
        DefaultTableModel model = new DefaultTableModel(isi, namakolom) {
        };
        tblbarang.setModel(model);
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        txtkode = new javax.swing.JTextField();
        txtnama = new javax.swing.JTextField();
        txtharga = new javax.swing.JTextField();
        txtstok = new javax.swing.JTextField();
        btnsimpan = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        jLabel6 = new javax.swing.JLabel();
        txtcari = new javax.swing.JTextField();
        btncaribarang = new javax.swing.JButton();
        jPanel5 = new javax.swing.JPanel();
        jLabel9 = new javax.swing.JLabel();
        txtkodeupdate = new javax.swing.JTextField();
        btncariupdate = new javax.swing.JButton();
        txtnamaupdate = new javax.swing.JTextField();
        txthargaupdate = new javax.swing.JTextField();
        txtstokupdate = new javax.swing.JTextField();
        jLabel11 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        btnupdate = new javax.swing.JButton();
        jPanel3 = new javax.swing.JPanel();
        jLabel7 = new javax.swing.JLabel();
        txtkodehapus = new javax.swing.JTextField();
        btnhapus = new javax.swing.JButton();
        jScrollPane2 = new javax.swing.JScrollPane();
        tblbarang = new javax.swing.JTable();
        btnrefresh = new javax.swing.JButton();

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane1.setViewportView(jTable1);

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel1.setText("KODE BARANG");

        jLabel2.setText("NAMA BARANG");

        jLabel3.setText("HARGA (IDR)");

        jLabel4.setText("STOK");

        btnsimpan.setText("Simpan");
        btnsimpan.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnsimpanActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel3)
                    .addComponent(jLabel4)
                    .addComponent(jLabel2)
                    .addComponent(jLabel1))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(btnsimpan)
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(txtkode, javax.swing.GroupLayout.DEFAULT_SIZE, 415, Short.MAX_VALUE)
                    .addComponent(txtnama)
                    .addComponent(txtstok)
                    .addComponent(txtharga))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel1)
                    .addComponent(txtkode, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(15, 15, 15)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(txtnama, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(txtharga, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4)
                    .addComponent(txtstok, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addComponent(btnsimpan)
                .addContainerGap(201, Short.MAX_VALUE))
        );

        jTabbedPane1.addTab("Tambah Barang", jPanel1);

        jLabel6.setText("Kode Barang");

        btncaribarang.setText("Cari");
        btncaribarang.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btncaribarangActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addComponent(jLabel6)
                        .addGap(18, 18, 18)
                        .addComponent(txtcari, javax.swing.GroupLayout.DEFAULT_SIZE, 419, Short.MAX_VALUE))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addComponent(btncaribarang)
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(txtcari, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btncaribarang)
                .addContainerGap(310, Short.MAX_VALUE))
        );

        jTabbedPane1.addTab("Cari Barang", jPanel2);

        jLabel9.setText("Kode Barang");

        btncariupdate.setText("Cari");
        btncariupdate.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btncariupdateActionPerformed(evt);
            }
        });

        txtnamaupdate.setEnabled(false);

        txthargaupdate.setEnabled(false);

        txtstokupdate.setEnabled(false);

        jLabel11.setText("Nama Barang");

        jLabel12.setText("Harga Barang");

        jLabel13.setText("Stok");

        btnupdate.setText("Update");
        btnupdate.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnupdateActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel5Layout = new javax.swing.GroupLayout(jPanel5);
        jPanel5.setLayout(jPanel5Layout);
        jPanel5Layout.setHorizontalGroup(
            jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel5Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel5Layout.createSequentialGroup()
                        .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel9)
                            .addComponent(jLabel11)
                            .addComponent(jLabel12)
                            .addComponent(jLabel13))
                        .addGap(18, 18, 18)
                        .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(txthargaupdate, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(txtnamaupdate, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(txtkodeupdate)
                            .addComponent(txtstokupdate, javax.swing.GroupLayout.DEFAULT_SIZE, 345, Short.MAX_VALUE))
                        .addGap(18, 18, 18)
                        .addComponent(btncariupdate))
                    .addGroup(jPanel5Layout.createSequentialGroup()
                        .addComponent(btnupdate)
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel5Layout.setVerticalGroup(
            jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel5Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel9)
                    .addComponent(txtkodeupdate, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btncariupdate))
                .addGap(18, 18, 18)
                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtnamaupdate, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel11))
                .addGap(18, 18, 18)
                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txthargaupdate, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel12))
                .addGap(18, 18, 18)
                .addGroup(jPanel5Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtstokupdate, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel13))
                .addGap(18, 18, 18)
                .addComponent(btnupdate)
                .addContainerGap(181, Short.MAX_VALUE))
        );

        jTabbedPane1.addTab("Update Barang", jPanel5);

        jLabel7.setText("Kode Barang");

        btnhapus.setText("Hapus");
        btnhapus.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnhapusActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addComponent(jLabel7)
                        .addGap(18, 18, 18)
                        .addComponent(txtkodehapus))
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addComponent(btnhapus)
                        .addGap(0, 435, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel7)
                    .addComponent(txtkodehapus, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnhapus)
                .addContainerGap(310, Short.MAX_VALUE))
        );

        jTabbedPane1.addTab("Hapus Barang", jPanel3);

        tblbarang.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        tblbarang.setEnabled(false);
        jScrollPane2.setViewportView(tblbarang);

        btnrefresh.setText("Refresh Table");
        btnrefresh.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnrefreshActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jTabbedPane1)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(btnrefresh)
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTabbedPane1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(btnrefresh)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 155, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(40, 40, 40))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnsimpanActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnsimpanActionPerformed

        String kode = txtkode.getText();
        String nama = txtnama.getText();
        String harga = txtharga.getText();
        int stok = Integer.parseInt(txtstok.getText());

        String query = "insert into barang(kode, nama, harga, stok) values('" + kode + "','" + nama + "','" + harga + "','" + stok + "')";

        try {
            connect.getStatement().executeUpdate(query);
            JOptionPane.showMessageDialog(null, "Insert berhasil");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Insert gagal");
        }
    
        refresh();
    }//GEN-LAST:event_btnsimpanActionPerformed

    private void btnrefreshActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnrefreshActionPerformed

        refresh();
      
    }//GEN-LAST:event_btnrefreshActionPerformed

    private void btncaribarangActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btncaribarangActionPerformed
        String kode = txtcari.getText();

        int jumbaris = 0;
        int i = 0;

        String query = "select*from barang where kode='" + kode + "'";

        try {
            data = connect.getStatement().executeQuery(query);
            while (data.next()) {
                jumbaris++;
            }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "data tidak ditemukan");
        }
        String isi[][] = new String[jumbaris][5];

        try {
            data = connect.getStatement().executeQuery(query);

            while (data.next()) {
                isi[i][0] = data.getString("kode");
                isi[i][1] = data.getString("nama");
                isi[i][2] = data.getString("harga");
                isi[i][3] = data.getString("stok");
                i++;
            }

        } catch (SQLException ex) {

        }
        String namakolom[] = {"kode", "nama", "harga", "stok"};
        DefaultTableModel model = new DefaultTableModel(isi, namakolom) {
        };
        tblbarang.setModel(model);

    }//GEN-LAST:event_btncaribarangActionPerformed

    private void btnhapusActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnhapusActionPerformed
        String kode = txtkodehapus.getText();
        String nama, harga, stok;

        String query = "delete from barang where kode='" + kode + "'";
        try {
            int konfirmasi = JOptionPane.showConfirmDialog(null, "Ingin dihapus?");

            switch (konfirmasi) {
                case 0:
                    connect.getStatement().executeUpdate(query);
                    JOptionPane.showMessageDialog(null, "Data berhasil dihapus");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Data gagal dihapus");
            }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "data tidak ditemukan");
        }
        refresh();
    }//GEN-LAST:event_btnhapusActionPerformed

    private void btncariupdateActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btncariupdateActionPerformed
        String kode = txtkodeupdate.getText();
        String nama, harga, stok;

        String query = "select*from barang where kode='" + kode + "'";

        try {
            data = connect.getStatement().executeQuery(query);
            if (data.next()) {
                nama = data.getString("nama");
                harga = data.getString("harga");
                stok = data.getString("stok");

                txtnamaupdate.setText(nama);
                txthargaupdate.setText(harga);
                txtstokupdate.setText(stok);

                txtnamaupdate.setEnabled(true);
                txthargaupdate.setEnabled(true);
                txtstokupdate.setEnabled(true);
            } else {
                JOptionPane.showMessageDialog(null, "data tidak ditemukan");
            }
        } catch (SQLException ex) {

        }
    }//GEN-LAST:event_btncariupdateActionPerformed

    private void btnupdateActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnupdateActionPerformed
        String kode = txtkodeupdate.getText();
        String nama = txtnamaupdate.getText();
        String harga = txthargaupdate.getText();
        String stok = txtstokupdate.getText();
        txtnamaupdate.setEnabled(false);
        txthargaupdate.setEnabled(false);
        txtstokupdate.setEnabled(false);

        String query = "update barang set nama='" + nama + "', harga='" + harga + "',stok='" + stok + "' where kode='" + kode + "'";
        try {
            connect.getStatement().executeUpdate(query);
            JOptionPane.showMessageDialog(null, "update berhasil");
        } catch (SQLException ex) {

        }
        refresh();
    }//GEN-LAST:event_btnupdateActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(MainForm.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(MainForm.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(MainForm.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(MainForm.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new MainForm().setVisible(true);
            }
        });
    }


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btncaribarang;
    private javax.swing.JButton btncariupdate;
    private javax.swing.JButton btnhapus;
    private javax.swing.JButton btnrefresh;
    private javax.swing.JButton btnsimpan;
    private javax.swing.JButton btnupdate;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPanel jPanel5;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTable jTable1;
    private javax.swing.JTable tblbarang;
    private javax.swing.JTextField txtcari;
    private javax.swing.JTextField txtharga;
    private javax.swing.JTextField txthargaupdate;
    private javax.swing.JTextField txtkode;
    private javax.swing.JTextField txtkodehapus;
    private javax.swing.JTextField txtkodeupdate;
    private javax.swing.JTextField txtnama;
    private javax.swing.JTextField txtnamaupdate;
    private javax.swing.JTextField txtstok;
    private javax.swing.JTextField txtstokupdate;
    // End of variables declaration//GEN-END:variables

}
